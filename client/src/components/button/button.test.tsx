import { render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest';

import Button from './button';

expect.addSnapshotSerializer(createSerializer());

describe('Button Component', () => {
  test('renders the Button', async () => {
    const { findByText } = render(<Button>button-with-text</Button>);
    const buttonElement = await findByText(/button-with-text/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
