import styled from '@emotion/styled';
import {
  borderRadius,
  buttonStyle,
  space,
  width,
  textAlign,
  TextAlignProps,
  fontSize,
  FontSizeProps,
  WidthProps,
  SpaceProps,
  ButtonStyleProps,
  BorderRadiusProps,
} from 'styled-system';

import { Component, Theme } from 'types';

type ButtonVariant = keyof Theme['buttons'];

type ButtonProps = Component<
  FontSizeProps & SpaceProps & ButtonStyleProps & BorderRadiusProps & WidthProps & TextAlignProps
> & {
  variant?: ButtonVariant;
};

const Button = styled.button<ButtonProps>(
  {
    appearance: 'button',
    border: 0,
    outline: 0,
    cursor: 'pointer',
  },
  borderRadius,
  buttonStyle,
  space,
  fontSize,
  width,
  textAlign,
);

Button.defaultProps = {
  variant: 'primary',
  p: '.2em',
  fontSize: [2],
  textAlign: 'center',
};

export default Button;
