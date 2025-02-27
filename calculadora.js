let saldoRankeadas;

function calculadoraRanqueada(vitorias, derrotas) {
    saldoRankeadas = (vitorias - derrotas)
    return rank(saldoRankeadas)
}

function rank(nivel) {
    let heroRank;
    
    if (nivel >= 10 && nivel <= 20) {
        heroRank = "Bronze"
    } else if (nivel >= 21 && nivel <= 50) {
        heroRank = "Prata"
    } else if (nivel >= 51 && nivel <= 80) {
        heroRank = "Ouro"
    } else if (nivel >= 81 && nivel <= 90) {
        heroRank = "Diamante"
    } else if (nivel >= 91 && nivel <= 100) {
        heroRank = "Lendário"
    } else if (nivel >= 101) {
        heroRank = "Imortal"
    } else {
        heroRank = "Ferro"
    }

    return messageHeroi(nivel, heroRank)
}

function messageHeroi(saldoVitorias, heroRank) {
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${heroRank}`
}


console.log(calculadoraRanqueada(100, 3))