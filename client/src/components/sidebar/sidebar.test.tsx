import { render } from '@testing-library/react';

import Sidebar from './sidebar';

describe('Sidebar Component', () => {
  test('renders the Sidebar', () => {
    const { getByText } = render(<Sidebar childCategories={[]} />);
    const content = getByText(/Kategorien/i);

    expect(content).toBeInTheDocument();
  });

  test('Sidebar loading', async () => {
    const { getByTestId } = render(<Sidebar childCategories={[]} loading />);
    const skeleton = getByTestId('sidebar-skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  test('Sidebar no child categories', () => {
    const { getByText } = render(<Sidebar childCategories={[]} />);
    const noChildTextElement = getByText(/no child categories/i);
    expect(noChildTextElement).toBeInTheDocument();
  });

  test('Sidebar with child categories', () => {
    const { getByText } = render(
      <Sidebar childCategories={[{ name: 'first-child-category', urlPath: '/first-child' }]} />,
    );
    const childCategory = getByText(/first-child-category/i);
    expect(childCategory).toBeInTheDocument();
  });
});
