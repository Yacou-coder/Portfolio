function showWelcomeMessage() {
    alert("Bienvenue sur mon portfolio ! Explorez mes projets et contactez-moi pour plus d'infos.");
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Message envoyé ! Merci de m'avoir contacté.");
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
