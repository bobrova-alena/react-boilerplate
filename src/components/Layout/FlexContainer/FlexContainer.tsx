import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
} from 'styled-system';

interface FlexContainerProps extends FlexboxProps, SpaceProps, LayoutProps {}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`;
