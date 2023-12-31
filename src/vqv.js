/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

// const vqv = (name, age) => {
//   const checkName = (name) => {
//     if (typeof name !== 'string' || name === ' '){
//       throw new Error(`undefined`);
//     }
//   };
//   const checkAge = (age) => {
//     if (typeof age !== 'number' || age === ' '){
//       throw new Error(`undefined`); 
//     }
//   };

//   try {
//     checkName(name);
//     checkAge(age);
//     return `Oi, meu nome é ${name}!
//     Tenho ${age} anos,
//     trabalho na Trybe e mando muito em programação!
//     #VQV!`
//   } catch (error) {
//     return error.message;
//   }
// };

const vqv = (string, number) => {
  if (!string) {
    return undefined; 
  } if (!number) {
    return undefined;
  }
return `Oi, meu nome é ${string}!
Tenho ${number} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
