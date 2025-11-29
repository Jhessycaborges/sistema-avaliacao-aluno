const prompt = require("prompt-sync")();

let aluno = prompt("Digite o nome do aluno(a): ");
console.log("\nAluno(a): " + aluno);

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nA média final é:", media.toFixed(2));

if (media >= 6) {
    console.log("O aluno foi aprovado!");
} else if (media >= 5) {
    console.log("O aluno está em recuperação.");
} else {
    console.log("O aluno está reprovado.");
}