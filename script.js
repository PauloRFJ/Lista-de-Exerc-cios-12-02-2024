                         //LISTA DE EXERCÍCIOS 12-02-2024  -  Paulo Roberto

                         
 
 // 10- Crie uma função que solicite para o usuário através do prompt de comando sua idade, e a partir da idade fornecida, 
 //exiba uma mensagem informando se ele é maior de idade ou não. Considere 18 anos como maior idade.
 
//  let idade = prompt("Digite a sua idade:");

//  if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você é menor de idade.");
// }
 


 
 
 // 9- Use um switch para exibir mensagens diferentes com base em uma condição.
 
//  let numero = parseInt(prompt("Digite um número de 1 a 7:"));
       
//       switch(numero) {
//           case 1:
//               console.log("Domingo");
//               break;
//           case 2:
//               console.log("Segunda-feira");
//               break;
//           case 3:
//               console.log("Terça-feira");
//               break;
//           case 4:
//               console.log("Quarta-feira");
//               break;
//           case 5:
//               console.log("Quinta-feira");
//               break;
//           case 6:
//               console.log("Sexta-feira");
//               break;
//           case 7:
//               console.log("Sábado");
//               break;
//           default:
//               console.log("Número inválido");
//       }                            
                             
                 



                             

// 8- Implemente uma função que determine se um número é par ou ímpar.

// function verificarParOuImpar(numero) {
//        if (numero % 2 === 0) {
//               console.log("O número é par");
//        } else {
//               console.log("O número é ímpar");
//        }
// }

// verificarParOuImpar(4); // Par
// verificarParOuImpar(7); // Ímpar







// 7- Crie uma função que receba o valor de uma hora qualquer,
//e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

// function saudacaoPorHora(hora) {
//        if (hora >= 0 && hora < 12) {
//               console.log("Bom dia!");
//        } else if (hora >= 12 && hora < 18) {
//               console.log("Boa tarde!");
//        } else if (hora > 18 && hora < 24) {
//               console.log("Boa noite!");
//        } else
//               console.log("Hora Inválida")
// }

// saudacaoPorHora(6); // Exemplo "bom dia"
// saudacaoPorHora(17); // Exemplo "boa tarde"
// saudacaoPorHora(23); // Exemplo "boa noite"
// saudacaoPorHora(65); // Exemplo "hora inválida"






// 6- Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e
//exiba essas informações com um console.log para cada objeto.

// let pessoa1 = {
//        nome: "Alex",
//        idade: 20,
//        nacionalidade: "Italiano",
//        profissao: "Professor"
// };

// let pessoa2 = {
//        nome: "Helena",
//        idade: 32,
//        nacionalidade: "Brasileira",
//        profissao: "Médica"
// };

// let pessoa3 = {
//        nome: "Eduardo",
//        idade: 52,
//        nacionalidade: "Chileno",
//        profissao: "Policial"
// };

// console.log("Informações da pessoa 1:");
// console.log("Nome: " + pessoa1.nome);
// console.log("Idade: " + pessoa1.idade);
// console.log("Nacionalidade: " + pessoa1.nacionalidade);
// console.log("Profissão: " + pessoa1.profissao);

// console.log("Informações da pessoa 2:");
// console.log("Nome: " + pessoa2.nome);
// console.log("Idade: " + pessoa2.idade);
// console.log("Nacionalidade: " + pessoa2.nacionalidade);
// console.log("Profissão: " + pessoa2.profissao);

// console.log("Informações da pessoa 3:");
// console.log("Nome: " + pessoa3.nome);
// console.log("Idade: " + pessoa3.idade);
// console.log("Nacionalidade: " + pessoa3.nacionalidade);
// console.log("Profissão: " + pessoa3.profissao);






// 5- Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero.
//    Exiba os valores no console.log().

// function verificarNumero(numero) {
//        if (numero > 0) {
//               console.log("O número é positivo");
//        } else if (numero < 0) {
//               console.log("O número é negativo");
//        } else {
//               console.log("O número é zero");
//        }
// }

// verificarNumero(10); // número positivo
// verificarNumero(-10); // número negativo
// verificarNumero(0); // zero






// 4- Crie uma função que receba dois números como parâmetros e retorne sua soma no console.log.

// function somarNumeros(num1, num2) {
//        let soma = num1 + num2;
//        console.log("A soma dos números é: " + soma);
// }

// somarNumeros(35, 15);






// 3- Combine duas strings usando o operador de concatenação e exiba o resultado no console.
//      Utilize o template string ou a concatenação simples.

// let string1 = "Turma";
// let string2 = "Fitness";

// // Possibilidade 1
// let resultado1 = string1 + " " + string2;
// console.log(resultado1);

// // Possibilidade 2
// let resultado2 = `${string1} ${string2}`;
// console.log(resultado2);





// 2- Declare uma variável e atribua um número a ela, em seguida, exiba seu valor no console.
// Atribua o valor a variável usando o window.prompt();

// let numero = window.prompt("Digite um número:");
// console.log("O número digitado é: " + numero);




// 1- Crie uma função que exiba uma mensagem simples no console. Escolha a mensagem que será exibida no console.log.

// function exibirMensagem() {
//        console.log("Olá, mundo!");
// }

// exibirMensagem();
