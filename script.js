// Script pour gérer la connexion et l'affichage des notes

// Identifiants valides
const validUsername = "wiame.mohafidi";
const validPassword = "MOHA_ahmed3";

// Éléments du DOM
const loginForm = document.getElementById("login-form");
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
    const accountLink = document.querySelector('.menu a[href="#"]'); // Lien "Mon compte"
    const contentSections = document.querySelectorAll("main > section");
    const mainContent = document.querySelector("main"); // Contenu principal

    // Cache toutes les sections au chargement
    contentSections.forEach(section => section.style.display = "none");

    // Gestion du clic sur le bouton de déconnexion
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        // Action de déconnexion ici
        alert("Vous avez été déconnecté."); // Notification de déconnexion

        // Redirection vers la page de connexion
        window.location.href = "index.html"; // Remplacez "index.html" par l'URL de votre page de connexion
    });

    // Gestionnaire de clic pour afficher la section des notes
    notesLink.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        // Cache toutes les sections
        contentSections.forEach(section => section.style.display = "none");

        // Affiche uniquement la section des notes
        notesSection.style.display = "block";
    });

    // Gestionnaire de clic pour "Mon compte"
    accountLink.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        // Cache toutes les sections
        contentSections.forEach(section => section.style.display = "none");

        // Affiche un message "Accueil ENSIIE" dans le contenu principal
        mainContent.innerHTML = `
            <section>
                <h2>Accueil ENSIIE</h2>
                <p>Bienvenue sur votre espace étudiant.</p>
            </section>
        `;
    });
});

