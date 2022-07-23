import { theme } from 'src/theme';
import styled from 'styled-components';
import { Text } from '../../Typography/Text';

export const Container = styled.div`
  display: flex;
`;

export const StyledText = styled(Text)`
  line-height: 29px;
  margin-right: ${theme.space.base12};
`;

type IndicatorProps = {
  checked: boolean;
};

const getBackground = (props: IndicatorProps) => {
  return props.checked ? theme.colors.accent : theme.colors.lightGray;
};

export const Indicator = styled.span<IndicatorProps>`
  height: 28px;
  width: 48px;
  cursor: pointer;
  position: relative;
  
  :before {
    background-color: ${props => getBackground(props)};
    border-radius: 14px;
    content: "";
    height: 100%;
    width: 100%;
    transition-duration: 0.15s;
    transition-property: background-color;
    position: absolute;
    top: 0px;
    left: ${props => (props.checked ? 'auto' : '0px')};
    right: ${props => (props.checked ? '0px' : 'auto')};
  }
  
  :after {
    background-color: ${theme.colors.white};
    left: ${props => (props.checked ? 'auto' : '4px')};
    right: ${props => (props.checked ? '4px' : 'auto')};
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 4px;
    width: 20px;
    height: 20px;
  }
`;
