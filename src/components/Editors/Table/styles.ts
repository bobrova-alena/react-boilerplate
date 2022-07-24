import styled from 'styled-components';
import { theme } from 'src/theme';
import { space, SpaceProps } from 'styled-system';
import { Title } from 'components/Typography/Title';
import { TableStyle, TableItemProps, TableRowType } from './api';

export const StyledTable = styled.table<SpaceProps>`
  ${space}
`;

const getTitlePadding = (props: TableItemProps) => {
  switch (props.tableStyle) {
    case 'small':
      return '0px 6px 4px 6px';
    case 'medium':
    case 'wide':
      return '0px 12px';
    default:
      return '10px';
  }
};

export const TableTitle = styled(Title)`
  padding: ${(props: TableItemProps) => getTitlePadding(props)};
`;

type StyledRowProps = {
  variant?: TableRowType;
  tableStyle: TableStyle;
  hoverAllowed?: boolean;
};

const getRowBaseColor = (props: StyledRowProps) => {
  switch (props.variant) {
    case 'third':
      return theme.colors.lightGray;
    case 'secondary':
      return theme.colors.mediumGray;
    case 'gray-text':
      return theme.colors.lightGray;
    default:
      return 'unset';
  }
};

const getRowFontSize = (props: StyledRowProps): string => {
  switch (props.tableStyle) {
    case 'small':
      return '14px';
    default:
      return '16px';
  }
};

const getRowBackgroundColor = (props: StyledRowProps): string => {
  switch (props.variant) {
    case 'secondary-highlighted':
      return theme.colors.accent06;
    case 'third-highlighted':
      return theme.colors.athensGray;
    case 'selected':
      return theme.colors.accent12;
    default:
      return 'unset';
  }
};

const getHoverBackgroundColor = (props: StyledRowProps): string => {
  return props.hoverAllowed ? theme.colors.accent08 : getRowBackgroundColor(props);
};

export const Row = styled.tr<StyledRowProps>`
  color: ${props => getRowBaseColor(props)};
  font-size: ${props => getRowFontSize(props)};
  background-color: ${props => getRowBackgroundColor(props)};

  :hover {
    background-color: ${props => getHoverBackgroundColor(props)};
  }
`;
