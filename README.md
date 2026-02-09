# 🏆 Sistema de Rank do Herói (Node.js)

## 📌 Sobre o projeto

Este projeto foi desenvolvido em **JavaScript utilizando Node.js** e tem como objetivo **calcular o nível (rank) de um herói** com base no **saldo de vitórias**, que é obtido a partir da diferença entre o número de vitórias e derrotas.

O projeto é simples, mas foi estruturado de forma organizada para **praticar lógica de programação**, **uso de funções**, **entrada de dados pelo terminal** e **boas práticas de código**.

---

## 🎯 Objetivo

* Receber do usuário:

  * Quantidade de vitórias
  * Quantidade de derrotas
* Calcular o saldo de vitórias
* Determinar o rank do herói com base nesse saldo
* Exibir o resultado final no terminal

---

## 🛠️ Tecnologias utilizadas

* **JavaScript**
* **Node.js**
* Módulo nativo **readline** (para entrada de dados no terminal)

> ⚠️ Observação: o projeto não utiliza `prompt()` porque esse recurso existe apenas em navegadores, não no Node.js.

---

## 📂 Estrutura do projeto

```
📁 projeto
 ├── script.js   # Código principal do programa
 └── README.md   # Documentação do projeto
```

---

## 📥 Entrada de dados (readline)

No Node.js, a entrada de dados pelo terminal é feita com o módulo **readline**.

```js
const readline = require("readline");
```

Esse módulo permite que o usuário digite valores diretamente no terminal durante a execução do programa.

Criamos uma interface para leitura e escrita:

```js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

* `process.stdin`: entrada de dados
* `process.stdout`: saída de dados

---

## 🧮 Função `calcularSaldo`

```js
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}
```

### 🔎 Por que essa função existe?

* Responsável **apenas** por calcular o saldo
* Evita repetição de código
* Facilita manutenção e leitura

Essa função segue o princípio de que **cada função deve ter uma única responsabilidade**.

---

## 🏅 Função `obterRank`

```js
function obterRank(saldo) {
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal";
}
```

### 🔎 Por que usar essa lógica?

* O `if` sequencial evita comparações desnecessárias
* O código fica mais limpo e fácil de entender
* O `return` encerra a função assim que a condição é atendida

Essa função **não calcula o saldo**, apenas decide o rank com base em um valor já calculado.

---

## ⌨️ Leitura das entradas do usuário

```js
rl.question("Digite o número de vitórias: ", (v) => {
    rl.question("Digite o número de derrotas: ", (d) => {
```

* O programa aguarda o usuário digitar os valores
* Os dados chegam como **string**, por isso são convertidos:

```js
const vitorias = Number(v);
const derrotas = Number(d);
```

Essa conversão é essencial para evitar erros em cálculos matemáticos.

---

## 📤 Exibição do resultado

```js
console.log(
    `O Herói tem saldo de ${saldo} vitórias e está no nível ${rank}`
);
```

* Usa **template string** para deixar a saída mais legível


---

## 🔚 Encerramento do programa

```js
rl.close();
```

Finaliza a leitura do terminal, evitando que o programa fique em execução indefinidamente.

---

## ▶️ Como executar o projeto

1. Certifique-se de ter o Node.js instalado
2. No terminal, navegue até a pasta do projeto
3. Execute:

```bash
node script.js
```

4. Insira as vitórias e derrotas quando solicitado

---

## ✅ Conclusão

Este projeto demonstra:

* Uso correto de entrada de dados no Node.js
* Organização de código com funções bem definidas
* Aplicação de lógica condicional
* Boas práticas para iniciantes em JavaScript
