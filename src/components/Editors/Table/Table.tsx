import React, { useMemo, useState } from 'react';
import { FlexContainer } from 'components/Layout/FlexContainer';
import { IconButtonPanel } from 'components/Editors/IconButtonPanel';
import { Row, StyledTable, TableTitle } from './styles';
import { Cell } from './Cell';
import { TableHeader, TableRow, TableStyle } from './api';
import { Header } from './Header';

export type TableProps = {
  rows: Array<TableRow>;
  style: TableStyle;
  headers?: Array<string | TableHeader>;
  columnWidth?: Array<string | undefined>;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  titleLink?: string;
  editMode?: boolean;
  title?: string;
  onRowClick?: (index: number) => void;
  onItemDelete?: (index: number) => void;
  onItemEdit?: (index: number) => void;
  onItemCopy?: (index: number) => void;
  deletingForbidden?: boolean;
  multiselect?: boolean;
};

export const Table = (props: TableProps): JSX.Element => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);

  const onRowClick = (index: number) => {
    if (props.onRowClick) {
      props.onRowClick(index);
    } else if (props.editMode) {
      if (props.onItemEdit) {
        props.onItemEdit(index);
      } else if (props.onItemCopy) {
        props.onItemCopy(index);
      }
    }
  };

  return (
    <FlexContainer
      flexDirection={'column'}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}>
      <TableTitle tableStyle={props.style}>{props.title}</TableTitle>
      <StyledTable cellSpacing='0' cellPadding='0' marginTop={props.marginTop}>
        {props.headers && props.headers.length !== 0 && (
          <thead>
            <tr>
              {props.headers &&
                ((!props.editMode && props.rows.length > 0) || props.editMode) &&
                props.headers.map((header, index) => (
                  <Header
                    tableStyle={props.style}
                    key={index}
                    header={header}
                    editMode={props.editMode}
                    required={(header as TableHeader)?.required}
                    width={props.columnWidth ? props.columnWidth[index] : undefined}
                  />
                ))}
              {props.editMode && (
                <Header tableStyle={props.style} header={''} editMode={props.editMode} />
              )}
            </tr>
          </thead>
        )}
        <tbody>
          {props.rows.map((row, rowIndex) => (
            <Row
              key={rowIndex}
              tableStyle={props.style}
              variant={row.variant}
              hoverAllowed={props.editMode || props.onRowClick !== undefined}
              onMouseEnter={() => setHoveredRowIndex(rowIndex)}
              onMouseLeave={() => setHoveredRowIndex(-1)}>
              {row.cells.map((cell, cellIndex) => (
                <Cell
                  key={`${rowIndex}_${cellIndex}`}
                  width={props.columnWidth ? props.columnWidth[cellIndex] : undefined}
                  value={cell.value}
                  tableStyle={props.style}
                  editMode={props.editMode}
                  rowVariant={row.variant}
                  title={cell.title}
                  isTags={cell.isTags}
                  onClick={() => onRowClick(rowIndex)}
                  pointerCursor={
                    props.onRowClick !== undefined ||
                    (props.editMode &&
                      (props.onItemEdit !== undefined || props.onItemCopy !== undefined))
                  }
                />
              ))}
              {props.editMode && (
                <Cell
                  tableStyle={props.style}
                  editMode={props.editMode}
                  rowVariant={row.variant}>
                  <IconButtonPanel
                    hasDeleteButton={!props.deletingForbidden}
                    hasEditButton={row.allowEdit}
                    hasCopyButton={props.onItemCopy !== undefined}
                    onEditClick={() => props.onItemEdit && props.onItemEdit(rowIndex)}
                    onDeleteClick={() => props.onItemDelete && props.onItemDelete(rowIndex)}
                    onCopyClick={() => props.onItemCopy && props.onItemCopy(rowIndex)}
                    hidden={rowIndex !== hoveredRowIndex}
                  />
                </Cell>
              )}
            </Row>
          ))}
        </tbody>
      </StyledTable>
    </FlexContainer>
  );
};
