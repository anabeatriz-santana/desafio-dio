// Desafio: Classificador de Nível de Herói
// Conceitos utilizados: Variáveis, Operadores, Estruturas de Decisão

// 1. Variáveis para armazenar o nome e o XP do herói
const nome = "Arthas";
const xp = 6500;

// 2. Variável que vai guardar o nível calculado
let nivel = "";

// 3. Estrutura de decisão (if / else if) para classificar o nível
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

// 4. Exibindo o resultado final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);