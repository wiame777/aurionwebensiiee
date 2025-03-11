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
        loginContainer.style.display = "none";
        content.style.display = "block";
    } else {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
});

// Gestion des menus et affichage des sections
document.getElementById("mon-compte-button").addEventListener("click", function() {
    // Cacher toutes les autres sections
    document.getElementById("notes-annee-en-cours").style.display = "none";
    document.getElementById("absence-section").style.display = "none";
    // Afficher la section Mon Compte
    document.getElementById("mon-compte-section").style.display = "block";
});

document.getElementById("absence-button").addEventListener("click", function() {
    document.getElementById("mon-compte-section").style.display = "none";
    document.getElementById("notes-annee-en-cours").style.display = "none";
    document.getElementById("absence-section").style.display = "block";
});

document.getElementById("resultats-button").addEventListener("click", function() {
    document.getElementById("mon-compte-section").style.display = "none";
    document.getElementById("absence-section").style.display = "none";
    document.getElementById("notes-annee-en-cours").style.display = "block";
});

// Gestion du bouton de déconnexion
document.getElementById("logout-button").addEventListener("click", function() {
    alert("Vous avez été déconnecté.");
    location.reload();
});





