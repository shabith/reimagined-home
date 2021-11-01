import { render } from '@testing-library/react';

import ArticleCard from './article-card';

test('renders the ArticleCard', async () => {
  const { findByAltText } = render(
    <ArticleCard
      article={{
        name: 'article-card',
        images: [{ path: 'https://dummyimage.com/600x400/000/fff' }],
        prices: {
          currency: 'EUR',
          regular: {
            value: 10000,
          },
        },
        variantName: 'test',
      }}
    />,
  );
  const articleElement = await findByAltText('article-card');
  expect(articleElement).toBeInTheDocument();
});
