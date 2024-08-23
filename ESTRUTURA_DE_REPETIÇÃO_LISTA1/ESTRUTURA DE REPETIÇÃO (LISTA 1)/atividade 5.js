//5) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
// Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

//DECLARAÇÃO VARIAVEIS
let contador = 0
let nome 
let idade
let maiorIdade = 0
let nomeMaiorIdade
let somaIdades = 0

//USO DE ENQUANTO PARA DEFINIR A QUANTIDADE DE PESSOAS QUE VAI PERGUNTAR
while(contador < 5 ) {
    
    //ENTRADA DE DADOS
     nome = prompt('Digite um nome: ')
     idade = Number(prompt('Digte a idade: '))
    
     //IR SOMANDO AS IDADES
     somaIdades += idade

     //CONDICIONAL PARA VALIDAR A IDADE DA PESSOA CASO SEJA A MAIOR
    if (idade > maiorIdade){
        maiorIdade = idade
        nomeMaiorIdade = nome
     

    }

    contador++
}

//CALCULOS
var mediaIdades = somaIdades / 5;

//SAIDA DE DADOS
alert('A média de idade das pessoas é: '+ (mediaIdades.toFixed(2)))
alert('A maior idade encontrada foi: '+ maiorIdade);
alert('A pessoa com maior idade é: '+ nomeMaiorIdade);
