import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { theme } from '../../../theme';
import {
  getBackground,
  getBoxShadow,
  getHoveredBackground,
  getColor,
  StyledButtonVariant,
} from './styles';

export type ButtonProps = SpaceProps & {
  variant?: StyledButtonVariant;
  disabled?: boolean;
  lifted?: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-family: ${theme.font.family};
  border: none;
  width: fit-content;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  vertical-align: top;
  font-size: ${theme.fontSizes.subtitle};
  line-height: 32px;
  border-radius: 72px;
  padding: 10px 40px;

  color: ${props => getColor(props)};
  background: ${props => getBackground(props)};
  box-shadow: ${props => getBoxShadow(props)};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &:hover,
  &:active {
    background: ${props => getHoveredBackground(props)};
  }
  
  ${space}
`;
