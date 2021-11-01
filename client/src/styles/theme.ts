import { Theme } from '@emotion/react';

const colors: Theme['colors'] = {
  white: 'white',
  black: '#1e2122',
  primary: 'lightblue',
  secondary: 'lavender',
  background: 'white',
  highlight: 'lightgoldenrodyellow',
  text: '#565d60',
  gray: '#ccc',
  danger: {
    color: '#dc3545',
    backgroundColor: '#fff1f0',
  },
  lightGray: 'lightgray',
  skeleton: {
    baseColor: '#f6f6f6',
    highlightColor: '#E5E4E2',
  },
  border: 'lavenderblush',
};

const theme: Theme = {
  spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  lineHeight: {
    body: 1.2,
    heading: 2,
  },
  colors,
  buttons: {
    primary: {
      color: colors.black,
      backgroundColor: colors.highlight,
      border: '1px solid',
      borderColor: colors.lightGray,
    },
  },
};

export default theme;
