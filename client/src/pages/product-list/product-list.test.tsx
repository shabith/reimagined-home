import { waitFor, render } from '@testing-library/react';

import ProductList from './product-list';

describe('Product Listing Page', () => {
  test('renders the ProductList', async () => {
    const { getByText } = render(<ProductList />);
    const linkElement = getByText(/home24/i);

    await waitFor(() => {
      expect(linkElement).toBeInTheDocument();
    });
  });
});
