import { css } from 'styled-components';
import { LayoutProps, SizeProps, SpaceProps, space, layout, size } from 'styled-system';
import { theme } from '../../../theme';

export type InputMode = 'normal' | 'compact' | 'without-borders' | 'large';

export type StyledInputProps = SpaceProps &
  SizeProps &
  LayoutProps & {
    disabled?: boolean;
    mode?: InputMode;
    withoutBorders?: boolean;
  };

const getBottomBorderColor = (props: StyledInputProps) => {
  if (props.mode === 'without-borders' || props.withoutBorders) {
    return 'transparent';
  }
  return props.disabled ? theme.colors.altoGray : theme.colors.accent40;
};

export const inputCss = css<StyledInputProps>`
  font-family: ${theme.font.family};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  line-height: 23px;
  height: 30px;
  padding: 2px 0px;
  font-size: ${theme.fontSizes.base};
  border-bottom-color: ${props =>
    props.mode !== 'without-borders' && !props.withoutBorders
      ? theme.colors.altoGray
      : 'transparent'};

  :focus-visible {
    outline: none;
    border-bottom-color: ${props => getBottomBorderColor(props)};
  }
  
  :hover {
    border-bottom-color: ${props => getBottomBorderColor(props)};
  }

  [value=""]:not(:hover):not(:focus-visible)  {
    border-bottom-color: ${theme.colors.altoGray};
  }

  :disabled {
    background-color: unset;
    color: ${theme.colors.mediumGray};
  }

  ${space}
  ${size}
  ${layout}
`;
