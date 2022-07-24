import styled from 'styled-components';
import { theme } from 'src/theme';

export type ContainerProps = {
  padding?: string;
  lineHeight?: string;
  marginLeft?: string;
};

export const Container = styled.div<ContainerProps>`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.mediumGray};
  margin-left: ${props => props.marginLeft};
  position: relative;
  padding:${props => props.padding};
  line-height: ${props => props.lineHeight};
`;
