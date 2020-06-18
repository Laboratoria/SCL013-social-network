// importamos la funcion que vamos a testear
import { myFunction, emailLogin, createAccount, loginGoogle } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
test('emailLogin debería ser una función', () => {
  expect(typeof emailLogin).toEqual('function');
});

test('createAccount debería ser una función', () => {
  expect(typeof createAccount).toEqual('function');
});

test('loginGoogle debería ser una función', () => {
  expect(typeof loginGoogle).toEqual('function');
});

