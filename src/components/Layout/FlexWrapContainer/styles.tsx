import styled from 'styled-components';
import { theme } from 'src/theme';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

export type ContainerProps = SpaceProps &
  LayoutProps & {
    itemMarginRight?: string;
    itemMarginBottom?: string;
  };

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  
  > * {
    margin-right: ${props => props.itemMarginRight ?? theme.space.small6};
    margin-bottom: ${props => props.itemMarginBottom ?? theme.space.small6};
  }
  
  ${space}
  ${layout}
`;
