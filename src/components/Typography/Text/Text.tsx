import styled from 'styled-components';
import {
  typography,
  color,
  TypographyProps,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
} from 'styled-system';

type TextProps = TypographyProps &
  ColorProps &
  SpaceProps &
  LayoutProps & {
    oneLine?: boolean;
  };

export const Text = styled.div<TextProps>`
  overflow: ${props => (props.oneLine ? 'hidden' : 'unset')};
  text-overflow: ${props => (props.oneLine ? 'ellipsis' : 'unset')};
  white-space: ${props => (props.oneLine ? 'nowrap' : 'unset')};
  overflow-wrap: ${props => (props.oneLine ? 'unset' : 'break-word')};
  word-break: break-word;
  
  ${typography}
  ${color}
  ${space}
  ${layout}
`;
