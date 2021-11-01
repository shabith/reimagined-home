import { render } from '@testing-library/react';

import ArticleImage from './article-image';

test('renders the ArticleImage', async () => {
  const { findByAltText } = render(
    <ArticleImage src="https://dummyimage.com/600x400/000/fff" alt="article-image" />,
  );
  const imgElement = await findByAltText('article-image');
  expect(imgElement).toBeInTheDocument();
});
