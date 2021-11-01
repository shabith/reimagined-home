export interface Theme {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    highlight: string;
    white: string;
    black: string;
    text: string;
    gray: string;
    lightGray: string;
    border: string;
    danger: {
      backgroundColor: string;
      color: string;
    };
    skeleton: {
      baseColor: string;
      highlightColor: string;
    };
  };
  spacing: number[];
  fonts: {
    body: string;
  };
  lineHeight: {
    body: number;
    heading: number;
  };
  fontSizes: number[];
  buttons: {
    primary: {
      color: string;
      backgroundColor: string;
      border: string;
      borderColor: string;
    };
  };
}
