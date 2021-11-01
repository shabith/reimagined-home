import { render } from '@testing-library/react';

import ArticleCardLoading from './article-card.loading';

test('renders the ArticleCardLoading', async () => {
  const { findByTestId } = render(<ArticleCardLoading />);
  const articleCardElement = await findByTestId('skeleton-name');
  expect(articleCardElement).toBeInTheDocument();
});
