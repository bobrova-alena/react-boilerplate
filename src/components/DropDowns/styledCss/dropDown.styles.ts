import styled, { css } from 'styled-components';
import { theme } from 'src/theme';
import { space, SpaceProps } from 'styled-system';

export type PopupPropsBase = {
  visible: boolean;
};

export const CompactPopupCss = css`
  box-shadow: ${theme.shadow.wide};
  border: solid 1px ${theme.colors.altoGray};
  border-radius: 5px;
  position: absolute;
  max-height: 169px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const PopupCss = css<PopupPropsBase>`
  z-index: 4;
  background-color: ${theme.colors.white};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  color: ${theme.colors.baseColor};
`;

export const Container = styled.div<SpaceProps>`
  position: relative;
  display: flex;
  align-items: center;
  
  ${space}
`;
