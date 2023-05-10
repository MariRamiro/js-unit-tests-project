/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// const average = (array) => {
//   const arrayValidation = (array) =>{
//     if ((isNaN(array)) || (array === [ ])) {
//       throw new Error(`undefined`);
//     }
//   };

//   try {
//     arrayValidation(array);
//     return ((Math.round(array))/array.length);
//   } catch (error) {
//     return error.message;
//   }
// };

const average = (array) => {
  for(let index = 0; index < array.length; index += 1)
  if (array === []) { 
    return undefined; 
  } if (array[index] === 'number') {
    let count = 0;
    count += array[index];
    }
  return (Math.round(count / array.length));
};

module.exports = average;
