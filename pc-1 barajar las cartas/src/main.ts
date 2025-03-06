import "./style.css";

console.log("Hello Typescript!");

function barajarCartas(cartas: string[]): string[] {
    for (let i = cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; 
    }
    return cartas;
}


let cartas: string[] = ["A♥", "2♦", "3♣", "4♠", "5♥", "6♦", "7♣", "8♠"];

console.log("Antes de barajar:", [...cartas]); 
cartas = barajarCartas(cartas);
console.log("Después de barajar:", cartas);
