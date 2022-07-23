import styled from 'styled-components';
import { theme } from 'src/theme';

export type TooltipProps = {
  visible: boolean;
  wide?: boolean;
};

export const Tooltip = styled.span<TooltipProps>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  color: ${theme.colors.baseColor};
  width: ${props => (props.wide ? '260px' : '150px')};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.wide};
  border: solid 1px ${theme.colors.altoGray};
  text-align: center;
  border-radius: 5px;
  padding: 5px 7px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: ${props => (props.wide ? '-135px' : '-80px')};
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${theme.colors.white} transparent transparent transparent;
  }
`;
