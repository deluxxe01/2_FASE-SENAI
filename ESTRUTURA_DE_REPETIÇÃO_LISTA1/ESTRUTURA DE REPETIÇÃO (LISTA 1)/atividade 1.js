//1) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “.
// Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!”

let saladaFrutas = prompt('Qual fruta adicionar? ')

while (saladaFrutas != "cereja") {

    saladaFrutas = prompt('Qual fruta adcionar? ')
}

alert('Parabéns você adicionou a cereja!')