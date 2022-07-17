import { createGlobalStyle } from 'styled-components';
import { theme } from 'src/theme';
import { bodyPaddingCss } from 'src/styledCss/body';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.fontSizes.base};
    margin: 0px;
    color: ${theme.colors.baseColor};
    
    ${bodyPaddingCss}
  }
`;
