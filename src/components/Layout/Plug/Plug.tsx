import {
  LayoutProps,
  layout,
  SpaceProps,
  space,
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
} from 'styled-system';
import styled from 'styled-components';

type PlugProps = LayoutProps & SpaceProps & ColorProps & FontSizeProps;

export const Plug = styled.div<PlugProps>`
  text-indent: -1000px;
  
  ${layout}
  ${space}
  ${color}
  ${fontSize}
`;
