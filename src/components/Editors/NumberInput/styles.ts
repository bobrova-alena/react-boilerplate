import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { theme } from '../../../theme';
import { inputCss } from '../styledCss/input.styles';

export const Container = styled.div<SpaceProps>`
  ${space}
`;

export const StyledNumberFormat = styled(NumberFormat)`
  ${inputCss}
`;

export const CompactStyledNumberFormat = styled(NumberFormat)`
  ${inputCss};

  font-size: ${theme.fontSizes.small};
  height: unset;
  padding: unset;
`;
