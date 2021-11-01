import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Global, useTheme, css } from '@emotion/react';
import { SkeletonTheme as OriginalSkeletonTheme } from 'react-loading-skeleton';

import theme from 'styles/theme';
import ProductList from 'pages/product-list';

const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: ${theme.fonts.body};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
};

const SkeletonTheme: React.FC = ({ children }): JSX.Element => {
  const theme = useTheme();
  return (
    <OriginalSkeletonTheme
      baseColor={theme.colors.skeleton.baseColor}
      highlightColor={theme.colors.skeleton.highlightColor}>
      {children}
    </OriginalSkeletonTheme>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SkeletonTheme>
        <ProductList />
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
