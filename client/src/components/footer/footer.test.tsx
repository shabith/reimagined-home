import { render } from '@testing-library/react';

import Footer from './footer';

test('renders the Footer', async () => {
  const { findByText } = render(<Footer />);
  const footerElement = await findByText(/Versandkosten/i);
  expect(footerElement).toBeInTheDocument();
});
