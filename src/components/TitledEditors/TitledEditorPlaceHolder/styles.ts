import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { theme } from 'src/theme';

type ContainerProps = LayoutProps &
  SpaceProps & {
    showBottomBorder?: boolean;
  };

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  border-bottom: ${props =>
    props.showBottomBorder ? `1px solid ${theme.colors.altoGray}` : 'unset'};
  
  ${layout}
  ${space}
`;
