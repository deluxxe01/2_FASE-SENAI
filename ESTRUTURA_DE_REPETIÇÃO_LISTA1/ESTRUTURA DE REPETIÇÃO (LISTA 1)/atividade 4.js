//4) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida.
// Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
 //Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".
 
 //DECLARAÇÃO VARIAVEIS
 let sequenciaNumeros = true
 let contador = 10
 

 alert('Nesta brincadeira você tera que digitar uma sequencia invertida de números, do 1 ao 10!')
 
 //USO DO CONTADOR PARA CONTAR A SEQUENCIA DE 10 A 0
 while(contador > 0){
 
    //ENTRADA DE DADOS
     sequenciaNumeros = Number(prompt('Digite o próximo número da sequência (do 10 ao 1):'))
 
     //CONDICIONAL PARA VERIFICAR 
     if (sequenciaNumeros != contador) {
         sequenciaNumeros = false
         alert('Você errou a sequência.')
         break
     }
 
     contador--
 }
 if (sequenciaNumeros) {
     alert('Você terminou a sequencia corretamente!')  
 }

