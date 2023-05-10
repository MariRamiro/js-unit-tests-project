const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    expect(createMenu().toHaveReturned(expect.objectContaining({fetchMenu : value})));
    expect(createMenu().toHaveReturnedWith('function'));
    expect(createMenu({ food: {}, drinks: {} }).equals({ food: {}, drinks: {} }).toBe(true));
    expect(createMenu().fetchMenu().toEqual({ food: {}, drinks: {} }).fetchMenu());
    expect(menu.consumption).toEqual([]);
    expect(menu.order).toHaveReturnedWith('function');
    expect(menu.order('Beer')).toHaveReturned('Item indisponível');

  });
});

// expect(arrayGenerator('keys', { chave: 'valor' })).toEqual([ 'chave' ]);
