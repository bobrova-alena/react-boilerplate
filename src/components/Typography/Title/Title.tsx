import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';
import { theme } from 'src/theme';

type TitleProps = {
  variant?: 'primary' | 'secondary';
} & SpaceProps &
  LayoutProps;

export const Title = styled.div<TitleProps>`
  overflow-wrap: break-word;
  color: ${theme.colors.accent};
  font-size: ${props =>
    props.variant !== 'secondary' ? theme.fontSizes.title : theme.fontSizes.thirdTitle};
  padding-bottom: ${props =>
    props.variant !== 'secondary' ? theme.space.large32 : '0px'};
  max-width: 700px;
  
  ${space}
  ${layout}
`;
