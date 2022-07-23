import { theme } from 'src/theme';
import styled from 'styled-components';
import { Text } from 'components/Typography/Text';

export const Placeholder = styled(Text)`
  margin-left: ${theme.space.base12};
`;
export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;
export const CheckboxIndicator = styled.span`
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 3px;
  display: inline-block;
  height: 20px;
  width: 20px;
  min-width: 20px;
  box-sizing: border-box;
  position: relative;
  margin-top: 3px;
`;
export const CheckboxTickWrap = styled.span`
  position: absolute;
  left: -2px;
  top: -2px;
  display: none;
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  cursor: pointer;
  font-size: ${theme.fontSizes.subtitle};

  &:hover {
    ${CheckboxIndicator} {
      border-color: ${theme.colors.mediumGray};
    }
    ${CheckboxInput}:checked + ${CheckboxIndicator} {
      background: ${theme.colors.accent60};
      border-color: ${theme.colors.accent60};
    }
  }

  ${CheckboxInput}:checked + ${CheckboxIndicator} {
    background: ${theme.colors.accent};
    border-color: ${theme.colors.accent};

    ${CheckboxTickWrap} {
      display: inline-block;
    }
  }

  ${CheckboxInput}[disabled] + ${CheckboxIndicator} {
    border-color: ${theme.colors.superLightGray};
  }

  ${CheckboxInput}[disabled]:checked + ${CheckboxIndicator} {
    background: ${theme.colors.accent40};
    border-color: transparent;
  }
`;
