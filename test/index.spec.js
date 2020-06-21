/* eslint-disable eol-last */
import { emailLogin, createAccount, loginGoogle } from '../src/lib/index';

test('emailLogin debería ser una función', () => {
  expect(typeof emailLogin).toBe('function');
});

test('createAccount debería ser una función', () => {
  expect(typeof createAccount).toBe('function');
});

test('loginGoogle debería ser una función', () => {
  expect(typeof loginGoogle).toBe('function');
});