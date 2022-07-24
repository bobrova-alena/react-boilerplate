import styled from 'styled-components';
import { theme } from 'src/theme';
import React, { useMemo } from 'react';
import { FlexContainer } from 'components/Layout/FlexContainer';
import { SvgButton } from 'components/Editors/SvgButton';
import { TableHeader, TableItemProps, TableStyle } from 'components/Editors/Table/api';
import { IconDropDown } from 'components/DropDowns/IconDropDown';
import { RequiredFieldIndicator } from 'components/TitledEditors/RequiredFieldIndicator';
import { getCellMinWidth, getCellWidth, getFirstCellWidth } from '../Cell';

const getHeaderPadding = (props: TableItemProps): string => {
  switch (props.tableStyle) {
    case 'small':
      return '6px 6px 3px 6px';
    case 'medium':
    case 'wide':
      return '12px 12px 6px 12px';
    default:
      return '25px 25px 10px 25px';
  }
};

type StyledHeaderProps = TableItemProps & {
  width?: string;
  editMode?: boolean;
};

const StyledHeader = styled.th<StyledHeaderProps>`
  width: ${props => getCellWidth(props)};
  text-align: left;
  padding: ${props => getHeaderPadding(props)};
  color: ${theme.colors.mediumGray};
  font-weight: normal;
  font-size: ${props =>
    props.tableStyle === 'medium' || props.tableStyle === 'wide'
      ? theme.fontSizes.small
      : 'unset'};
  word-break: break-word;

  :first-of-type {
    width: ${props => getFirstCellWidth(props)};
  }

  :last-of-type {
    width: unset;
    max-width: ${props => getCellWidth(props)};
    min-width: ${props => (props.editMode ? 'unset' : getCellMinWidth(props))};
  }
`;

type HeaderProps = {
  header: string | TableHeader;
  tableStyle: TableStyle;
  editMode?: boolean;
  width?: string;
  required?: boolean;
};

export const Header = (props: HeaderProps): JSX.Element => {
  const tableHeader = useMemo(() => props.header as TableHeader, [props.header]);
  return (
    <StyledHeader
      tableStyle={props.tableStyle}
      width={props.width}
      editMode={props.editMode}>
      <FlexContainer>
        {tableHeader !== undefined && tableHeader.text != undefined ? (
          <>
            {tableHeader.text}
            {props.editMode && (
              <FlexContainer alignItems={'center'}>
                {tableHeader.info && (
                  <SvgButton
                    name={'info'}
                    size={'14px'}
                    marginLeft={'5px'}
                    tooltip={tableHeader.info}
                  />
                )}
                {tableHeader.filter && (
                  <IconDropDown
                    items={tableHeader.filter.items}
                    selectedKey={tableHeader.filter.selectedKey}
                    onSelection={tableHeader.filter.onSelection}
                    width={'100px'}
                    clearAllowed={true}
                    icon={
                      tableHeader.filter.selectedKey !== undefined
                        ? 'filter'
                        : 'empty-filter'
                    }
                  />
                )}
                {props.required && <RequiredFieldIndicator marginLeft={'5px'} />}
              </FlexContainer>
            )}
          </>
        ) : (
          (props.header as string)
        )}
      </FlexContainer>
    </StyledHeader>
  );
};
