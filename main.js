let heroName = "Raphael";
let experience = 7530;
let nivel;

if (experience > 1000 && experience <= 2000) {
    nivel = "Bronze"
} else if (experience > 2000 && experience <= 5000) {
    nivel = "Prata"
} else if (experience >= 5000 && experience <= 7000) {
    nivel = "Ouro"
} else if (experience > 7000 && experience <= 8000) {
    nivel = "Platina"
} else if (experience > 8000 && experience <= 9000) {
    nivel = "Ascendente"
} else if (experience > 9000 && experience <= 10000) {
    nivel = "Imortal"
} else if (experience > 10000) {
    nivel = "Radiante"
} else {
    nivel = "Ferro"
}

console.log(`O Herói de nome ${heroName} está no nível de ${nivel}`)