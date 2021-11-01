import { render } from '@testing-library/react';

import Header from './header';

test('renders the Header', async () => {
  const { findByText } = render(<Header />);
  const headerElement = await findByText(/home24/i);
  expect(headerElement).toBeInTheDocument();
});
