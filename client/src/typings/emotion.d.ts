import { Theme as SiteTheme } from '../types';

declare module '@emotion/react' {
  export interface Theme extends SiteTheme {}
}
