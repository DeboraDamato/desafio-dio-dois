let totalGeral = rankingCalculator(102, 1)
let nivel;

function rankingCalculator(qtdVitoria, qtdDerrota){

    let totalVitoria = qtdVitoria - qtdDerrota
    return totalVitoria
}
if (totalGeral <= 10){
    nivel = "Ferro";
} else if (totalGeral  <= 20){
    nivel = "Bronze";
} else if (totalGeral  <= 50){
    nivel = "Prata";
} else if (totalGeral  <= 80){
    nivel = "Ouro";
} else if (totalGeral  <= 90){
    nivel = "Diamante";
} else if (totalGeral  <= 100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}
console.log(`Saldo de vitórias é ${totalGeral} está no nível ${nivel}`);
