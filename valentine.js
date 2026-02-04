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

// Bouton "Oui" affiche le message
yes.addEventListener("click", () => {
    buttons.style.display = "none";       // cache les boutons
    message.classList.remove("hidden");   // montre le message
});
