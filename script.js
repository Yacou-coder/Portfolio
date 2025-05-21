// Gestion du menu hamburger
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Fermer le menu quand on clique à l'extérieur
        document.addEventListener('click', (e) => {
            if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('active');
            }
        });

        // Fermer le menu après clic sur un lien
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // Gestion du menu hamburger à gauche
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        menuContainer.innerHTML = `
            <nav class="menu" aria-label="Navigation principale">
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="gallery.html">Galerie</a></li>
                    <li><a href="social.html">Réseaux Sociaux</a></li>
                </ul>
            </nav>
        `;
    }

    // Gestion de la soumission du formulaire avec Formspree via AJAX
    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');

    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();
            status.innerHTML = '';

            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = 'Merci ! Votre message a été envoyé.';
                    status.classList.add('success');
                    form.reset();
                } else {
                    status.innerHTML = 'Erreur lors de l\'envoi. Veuillez réessayer.';
                    status.classList.add('error');
                }
            } catch (error) {
                status.innerHTML = 'Erreur lors de l\'envoi. Veuillez réessayer.';
                status.classList.add('error');
            }
        });
    }
   
    // Fonction pour afficher le modal d'image
    function openModal(src) {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-image');
        if (modal && modalImg) {
            modal.style.display = 'flex';
            modalImg.src = src;
        }
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Attacher les événements aux images de la galerie
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            openModal(image.src);
        });
    });

    // Gestion du bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
            ctaButton.classList.add('clicked');
            setTimeout(() => ctaButton.classList.remove('clicked'), 200);
        });

        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.backgroundColor = '#ff6347';
        });

        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.backgroundColor = '';
        });

        ctaButton.addEventListener('mousedown', () => {
            ctaButton.style.backgroundColor = '#ff4500';
        });

        ctaButton.addEventListener('mouseup', () => {
            ctaButton.style.backgroundColor = '#ff6347';
        });
    }

    // Animation de zoom de l'image de profil au survol ou au toucher
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        // Pour ordinateur : survol
        profileImage.addEventListener('mouseenter', () => {
            profileImage.classList.remove('unzoom-effect');
            profileImage.classList.add('zoom-effect');
        });
        profileImage.addEventListener('mouseleave', () => {
            profileImage.classList.remove('zoom-effect');
            profileImage.classList.add('unzoom-effect');
            setTimeout(() => profileImage.classList.remove('unzoom-effect'), 300);
        });
        // Pour mobile : toucher
        profileImage.addEventListener('touchstart', () => {
            profileImage.classList.remove('unzoom-effect');
            profileImage.classList.add('zoom-effect');
        });
        profileImage.addEventListener('touchend', () => {
            profileImage.classList.remove('zoom-effect');
            profileImage.classList.add('unzoom-effect');
            setTimeout(() => profileImage.classList.remove('unzoom-effect'), 300);
        });
    }

    // Année dynamique pour le copyright
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
