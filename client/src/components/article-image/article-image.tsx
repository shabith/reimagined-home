import styled from '@emotion/styled';
import { space, width, SpaceProps, WidthProps, compose } from 'styled-system';

type ArticleImageProps = SpaceProps &
  WidthProps & {
    src: string;
    alt?: string;
  };

const ArticleImage = styled.img<ArticleImageProps>(compose(space, width));

export default ArticleImage;
