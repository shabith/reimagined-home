const currencyFormatter = (
  value: number,
  currencyType = 'EUR',
  locales = 'de-DE',
  options?: Intl.NumberFormatOptions,
): string => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currencyType,
    ...options,
  }).format(value);
};

export default currencyFormatter;
