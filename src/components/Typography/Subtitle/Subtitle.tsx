import styled from 'styled-components';
import { space, SpaceProps, color, ColorProps, layout, LayoutProps } from 'styled-system';
import { theme } from 'src/theme';

type SubtitleProps = SpaceProps &
  ColorProps &
  LayoutProps & {
    variant?: 'secondary' | 'primary';
  };

const getColor = (props: SubtitleProps) => {
  return props.variant === 'primary' ? theme.colors.accent : theme.colors.mediumGray;
};

export const Subtitle = styled.div<SpaceProps & ColorProps & LayoutProps>`
  overflow-wrap: break-word;
  color: ${props => getColor(props)};
  font-size: ${theme.fontSizes.thirdTitle};
  padding-bottom: 10px;
  
  ${space}
  ${color}
  ${layout}
`;
