import React from 'react';
import { gql } from 'graphql-request';
import Skeleton from 'react-loading-skeleton';

import { Category } from 'types';

import PublicLayout from 'layouts/public-layout';
import Header from 'components/header';
import Box from 'components/box';
import Sidebar from 'components/sidebar';
import ArticleCard from 'components/article-card';
import useRequest from 'utils/use-request';
import ArticleCardLoading from 'components/article-card/article-card.loading';

type CategoriesType = { categories: Category[] };

const ProductList = (): JSX.Element => {
  const { data, isError, isLoading } = useRequest<CategoriesType>(gql`
    {
      categories(ids: "156126", locale: de_DE) {
        name
        articleCount
        childrenCategories {
          name
          urlPath
        }
        categoryArticles(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
              path
            }
          }
        }
      }
    }
  `);

  const currentCategory = data?.categories[0];

  return (
    <PublicLayout>
      <Header />
      {isError ? (
        <Box
          gridArea="content"
          gridColumn="span 3"
          bg="danger.backgroundColor"
          color="danger.color"
          p={2}
          textAlign="center">
          Sorry! we are having trouble loading this page.
        </Box>
      ) : (
        <>
          <Sidebar
            childCategories={currentCategory?.childrenCategories || []}
            loading={isLoading}
          />
          <Box gridArea="content" gridColumn="span 2" p={10}>
            <h1>
              {isLoading ? (
                <Skeleton containerTestId="name-skeleton" inline width={100} height={40} />
              ) : (
                currentCategory?.name
              )}{' '}
              <small>
                {isLoading ? (
                  <Skeleton inline width={80} height={32} />
                ) : (
                  <>({currentCategory?.articleCount})</>
                )}
              </small>
            </h1>
            <Box
              display="grid"
              gridGap={26}
              gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))">
              {isLoading ? (
                <>
                  <ArticleCardLoading />
                  <ArticleCardLoading />
                  <ArticleCardLoading />
                </>
              ) : (
                <>
                  {currentCategory?.categoryArticles.articles.map((article, index) => (
                    <ArticleCard key={`${article.name}-${index}`} article={article} />
                  ))}
                </>
              )}
            </Box>
          </Box>
        </>
      )}
    </PublicLayout>
  );
};

export default ProductList;
