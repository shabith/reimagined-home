import styled from '@emotion/styled';
import {
  compose,
  space,
  flex,
  layout,
  grid,
  color,
  typography,
  border,
  BorderProps,
  TypographyProps,
  ColorProps,
  GridProps,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
} from 'styled-system';

import { Component } from 'types';

type BoxProps = Component<
  SpaceProps & FlexboxProps & LayoutProps & GridProps & ColorProps & TypographyProps & BorderProps
>;

const Box = styled.div<BoxProps>(compose(space, layout, flex, grid, color, typography, border));

export default Box;
