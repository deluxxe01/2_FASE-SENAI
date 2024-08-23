//3) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar 
//e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. 
//Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, 
//exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let numeroMultas = Number(prompt('Digte a quantidade de multas que deseja cadastrar: '))
let contador = 1
let valorReais
let pontosPerdidos

let somaMultas = 0
let somaPontos = 0

while (contador <= numeroMultas) {

    valorReais = Number(prompt("Digite o valor da multa: "))
    pontosPerdidos = Number(prompt('Digite os pontos perdidos na carteira de habilitação:'))

    somaMultas = somaMultas + valorReais 
    somaPontos = somaPontos + pontosPerdidos

    contador++
}

alert('Valor total de multas cadastradas: ' + somaMultas + '\n Total de pontos perdidos: ' + somaPontos)

if (somaPontos >= 21) {

    alert('Você está irregular!')
    
}else{
    alert('Você está regular!')
}