const no = document.getElementById("no");
const yes = document.getElementById("yes");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");

// Bouton "Non" qui fuit
no.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - no.clientWidth);
    const y = Math.random() * (window.innerHeight - no.clientHeight);

    no.style.position = "absolute";
    no.style.left = x + "px";
    no.style.top = y + "px";
});

// Bouton "Oui" affiche le message et lance les cœurs
yes.addEventListener("click", () => {
    buttons.style.display = "none";       // cache les boutons
    message.classList.remove("hidden");   // montre le message
    startHearts();                        // lance les cœurs
});

// Fonction pour créer un cœur
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s"; // vitesse aléatoire
    document.body.appendChild(heart);

    // Supprime le cœur après l'animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Lance régulièrement les cœurs
function startHearts() {
    const interval = setInterval(createHeart, 300); // toutes les 0.3s
    // stop après 10s
    setTimeout(() => clearInterval(interval), 10000);
}
