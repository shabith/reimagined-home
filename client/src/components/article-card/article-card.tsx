import React from 'react';

import { Article } from 'types';

import Box from 'components/box';
import Button from 'components/button';
import ArticleImage from 'components/article-image';
import currencyFormatter from 'utils/currency-formatter';

type ArticleProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleProps): JSX.Element => {
  return (
    <Box p={10} border="1px solid" borderColor="border">
      {/** TODO: 'flexDirection' was not working so I had to use inline styles */}
      <Box minHeight="100%" display="flex" style={{ flexDirection: 'column' }}>
        <ArticleImage py="1" my="1" src={article.images[0].path} alt={article.name} />
        <Box flex={1} display="inline-block" py="1" my="1" width={[1]}>
          {article.name}
        </Box>
        <Box display="inline-block" py="1" my="1" width={[1]}>
          {currencyFormatter(article.prices.regular.value / 100, 'EUR', 'de-DE')}
        </Box>
        <Box>
          <Button py="1" my="1" width={[1]}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleCard;
