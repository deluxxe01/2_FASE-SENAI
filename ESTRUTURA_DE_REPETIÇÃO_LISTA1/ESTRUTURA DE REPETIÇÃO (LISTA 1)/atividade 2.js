//2) Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano.
// Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

let alturaJoao = 1.75
let alturaPedro = 1.60
let joaoCrescePorAno = 0.03
let pedroCrescePorAno = 0.01
let ano = 0

while(alturaJoao >= alturaPedro ){
    
      alturaJoao = alturaJoao + joaoCrescePorAno
      alturaPedro = alturaPedro + pedroCrescePorAno
    
      ano++

    if (alturaJoao < alturaPedro) {

        alert('Quantos anos para Pedro alcançar João: ' + ano)
    }
}


