import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';

interface FlexContainerProps extends SpaceProps, LayoutProps {}

export const Container = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: flex-end;

  > * {
    margin-right: 10px;
  }

  > *:last-child {
    margin-right: 0px;
  }

  ${space}
  ${layout}
`;
