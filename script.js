// Identifiants valides
const validUsername = "wiame.mohafidi";
const validPassword = "MOHA_ahmed3";

// Éléments du DOM
const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const loginContainer = document.getElementById("login-container");
const content = document.getElementById("content");

// Gestion du clic sur le bouton de connexion
loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === validUsername && password === validPassword) {
        // Authentification réussie
        loginContainer.style.display = "none";
        content.style.display = "block";
    } else {
        // Afficher un message d'erreur
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000); // Cache le message d'erreur après 3 secondes
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout-button");
    const notesLink = document.querySelector('a[href="#notes-annee-en-cours"]');
    const notesSection = document.getElementById("notes-annee-en-cours");
    const absenceLink = document.querySelector('a[href="#absence"]');
    const absenceSection = document.getElementById("absence");
    const contentSections = document.querySelectorAll("main > section");

    // Cache toutes les sections au chargement
    contentSections.forEach(section => section.style.display = "none");

    // Gestion du clic sur "Absence"
    absenceLink.addEventListener("click", (event) => {
        event.preventDefault();
        contentSections.forEach(section => section.style.display = "none");
        absenceSection.style.display = "block";
    });

    // Gestion du clic sur "Notes aux épreuves année en cours"
    notesLink.addEventListener("click", (event) => {
        event.preventDefault();
        contentSections.forEach(section => section.style.display = "none");
        notesSection.style.display = "block";
    });

    // Gestion du clic sur "Déconnexion"
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Vous avez été déconnecté.");
        location.reload(); // Recharge la page pour revenir à l'écran de connexion
    });
});


