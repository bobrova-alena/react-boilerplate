import styled from 'styled-components';
import { theme } from 'src/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div:first-of-type {
    border-top: none;
  }
`;

type StyledItemProps = {
  selected: boolean;
  width?: string;
  minWidth?: string;
  compact?: boolean;
};

export const Item = styled.div<StyledItemProps>`
  padding: ${props => (props.compact ? '5px 10px' : '10px')};
  border-top: 1px solid ${theme.colors.altoGray};
  color: ${props => (props.selected ? theme.colors.accent : undefined)};
  white-space: nowrap;
  width: ${props => (props.width ? props.width : undefined)};
  min-width: ${props => (props.minWidth ? props.minWidth : undefined)};
  overflow-wrap: break-word;
  height: 22px;
  font-size: ${props => (props.compact ? theme.fontSizes.small : theme.fontSizes.base)};
  
  &:hover {
    background-color: ${theme.colors.accent08};
  }
`;
