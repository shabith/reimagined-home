import { render, waitFor } from '@testing-library/react';

import PublicLayout from './public-layout';

test('renders the PublicLayout', async () => {
  const { getByText } = render(<PublicLayout>public-layout</PublicLayout>);
  const content = getByText(/public-layout/i);

  await waitFor(() => {
    expect(content).toBeInTheDocument();
  });
});
