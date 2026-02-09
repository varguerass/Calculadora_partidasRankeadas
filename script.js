const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function obterRank(saldo) {
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal";
}

rl.question("Digite o número de vitórias: ", (v) => {
    rl.question("Digite o número de derrotas: ", (d) => {

        const vitorias = Number(v);
        const derrotas = Number(d);

        const saldo = calcularSaldo(vitorias, derrotas);
        const rank = obterRank(saldo);

        console.log(
            `O Herói tem saldo de ${saldo} vitórias e está no nível ${rank}`
        );

        rl.close();
    });
});
