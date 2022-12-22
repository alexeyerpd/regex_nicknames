import { Validator } from '../validator';

const validator = new Validator();

test.each([
  'nett4444o',
  '1netto',
  '_netto',
  '-netto',
  'netto3',
  'netto-',
  'netto_',
  '1netto3',
])('validateUsername negative tests', (username) => {
  expect(validator.validateUsername(username)).toBeFalsy();
});

test.each(['netto', 'ne333tto', 'ne333_tt-o'])(
  'validateUsername positive tests',
  (username) => {
    expect(validator.validateUsername(username)).toBeTruthy();
  },
);
