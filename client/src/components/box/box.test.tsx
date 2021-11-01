import { render } from '@testing-library/react';

import Box from './box';

test('renders the Box', async () => {
  const { findByText } = render(<Box>box-with-text</Box>);
  const boxElement = await findByText(/box-with-text/i);
  expect(boxElement).toBeInTheDocument();
});
