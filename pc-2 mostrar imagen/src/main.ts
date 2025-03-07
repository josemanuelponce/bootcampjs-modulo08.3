import "./style.css";

const carta = document.getElementById("imagenCarta") as HTMLImageElement;
const carta2 = document.getElementById("imagenCarta2") as HTMLImageElement;

carta.addEventListener("click", () => {
    carta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
});

carta2.addEventListener("click", () => {
    carta2.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
});
