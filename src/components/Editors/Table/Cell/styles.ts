import styled from 'styled-components';
import { theme } from 'src/theme';
import { TableRowType, TableStyle } from '../api';

export type StyledCellProps = {
  tableStyle: TableStyle;
  rowVariant?: TableRowType;
  width?: string;
  withoutPadding?: boolean;
  editMode?: boolean;
  pointerCursor?: boolean;
};

export const getCellWidth = (props: StyledCellProps): string => {
  if (props.width) {
    return props.width;
  }
  switch (props.tableStyle) {
    case 'medium':
    case 'wide':
      return '150px';
    default:
      return 'unset';
  }
};

export const getCellMinWidth = (props: StyledCellProps): string => {
  if (props.width) {
    return props.width;
  }
  switch (props.tableStyle) {
    case 'small':
      return '70px';
    default:
      return '150px';
  }
};

export const getLastCellMinWidth = (props: StyledCellProps): string => {
  return props.editMode ? 'unset' : getCellMinWidth(props);
};

export const getFirstCellWidth = (props: StyledCellProps): string => {
  if (props.width) {
    return props.width;
  }
  switch (props.tableStyle) {
    case 'small':
    case 'medium':
    case 'wide':
      return '200px';
    default:
      return 'unset';
  }
};

const getFirstCellFontSize = (props: StyledCellProps): string => {
  switch (props.tableStyle) {
    case 'small':
      return '14px';
    case 'medium':
    case 'wide':
      return '16px';
    default:
      return '18px';
  }
};

export const getCellPaddings = (props: StyledCellProps): string => {
  if (props.withoutPadding) {
    return 'unset';
  }
  switch (props.tableStyle) {
    case 'small':
      return '6px';
    case 'medium':
      return '12px';
    case 'wide':
      return '24px 12px';
    default:
      return '25px';
  }
};

export const getCellColor = (tableStyle: TableStyle, rowVariant?: TableRowType) => {
  if (rowVariant === 'gray-text') {
    return theme.colors.lightGray;
  }

  return theme.colors.baseColor;
};

const getFirstCellColor = (props: StyledCellProps): string => {
  if (props.tableStyle === 'large') {
    return theme.colors.accent;
  }

  return getCellColor(props.tableStyle, props.rowVariant);
};

export const StyledCell = styled.td<StyledCellProps>`
  width: ${props => getCellWidth(props)};
  min-width: ${props => getCellMinWidth(props)};
  padding: ${props => getCellPaddings(props)};
  border-spacing: 0px;
  vertical-align: top;
  word-break: break-word;

  :first-of-type {
    color: ${props => getFirstCellColor(props)};
    font-size: ${props => getFirstCellFontSize(props)};
    width: ${props => getFirstCellWidth(props)};
  }

  :last-of-type {
    width: unset;
    max-width: ${props => getCellWidth(props)};
    min-width: ${props => getLastCellMinWidth(props)};
  }

  :hover {
    cursor: ${props => (props.pointerCursor ? 'pointer' : 'unset')};
  }
`;
