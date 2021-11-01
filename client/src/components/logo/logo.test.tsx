import { render } from '@testing-library/react';

import Logo from './logo';

test('renders the Logo', async () => {
  const { findByText } = render(<Logo />);
  const logoElement = await findByText(/home24/i);
  expect(logoElement).toBeInTheDocument();
});
