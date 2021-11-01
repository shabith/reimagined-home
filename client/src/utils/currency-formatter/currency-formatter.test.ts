import currencyFormatter from './currency-formatter';

test('price of 56999 should be 569,99 €', () => {
  const currency = currencyFormatter(569.99, 'EUR', 'de-DE');
  expect(currency).toContain('569,99');
  expect(currency).toContain('€');
});
