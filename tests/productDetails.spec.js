const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      productDetails('Alcool gel', 'Máscara')
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    const productIdX = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const productIdY = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    expect(typeof productDetails).toBe('function');
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    expect(typeof Object.values(productDetails('Alcool gel', 'Máscara'))).toBe('object');
    expect(Object.values(productDetails('Alcool gel', 'Máscara'))[0]).not.toEqual(Object.values(productDetails('Alcool gel', 'Máscara')[1]));
    expect(productIdX).toMatch('123');
    expect(productIdY).toMatch('123');
  });
  
  
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
});
