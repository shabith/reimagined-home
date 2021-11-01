import { render } from '@testing-library/react';

import Search from './search';

test('renders the Search', async () => {
  const { findByTestId } = render(<Search />);
  const input = await findByTestId('search');
  expect(input).toBeInTheDocument();
});
