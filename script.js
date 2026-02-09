const vitorias = 10;
const derrotas = 5;


function CalcularRAnk(vitorias, derrotas) {
 let resultado = vitorias - derrotas;
 return resultado;
}

function ExibirRank() {
    let resultado = CalcularRAnk(vitorias, derrotas);
    if (resultado <= 10) {
        return "Ferro";
    } else if (11 <= resultado && resultado <= 20) {
        return "Bronze";
    } else if (21 <= resultado && resultado <= 50) {
        return "Prata";
    } else if (51 <= resultado && resultado <= 80) {
        return "Ouro";
    } else if (81 <= resultado && resultado <= 90) {
        return "Diamante";
    } else if (91 <= resultado && resultado <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let rank = ExibirRank(CalcularRAnk(vitorias, derrotas));
console.log("O Herói tem de saldo de " + CalcularRAnk(vitorias, derrotas) + " vitórias e está no nível de " + rank);