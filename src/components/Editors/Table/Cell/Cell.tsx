import React, { useMemo } from 'react';
import { CellValueHeader, TableCellType } from '../api';
import { theme } from 'src/theme';
import { Text } from 'components/Typography/Text';
import { CellContentHolder } from 'components/Editors/Table/CellContentHolder';
import { Tag } from 'components/Editors/Tag';
import { FlexWrapContainer } from 'components/Layout/FlexWrapContainer';
import { DisplayValueService, PropertyTypes } from 'src/services/displayValueService';
import { ChildrenProps } from 'src/model/props';
import { KeyValueItem } from 'src/services/filterService/api';
import { StyledCell, StyledCellProps } from './styles';

export type CellProps = StyledCellProps &
  ChildrenProps & {
    value?: TableCellType;
    title?: string | CellValueHeader;
    isTags?: boolean;
    onClick?: () => void;
    pointerCursor?: boolean;
  };

export const Cell = (props: CellProps): JSX.Element => {
  const displayValue = useMemo<string | undefined>(
    () => DisplayValueService.getDisplayValue(props.value),
    [props]
  );
  const arrayValue = useMemo<Array<PropertyTypes> | undefined>(
    () =>
      props.value instanceof Array ? (props.value as Array<PropertyTypes>) : undefined,
    [props]
  );

  return (
    <StyledCell
      width={props.width}
      tableStyle={props.tableStyle}
      withoutPadding={arrayValue !== undefined}
      editMode={props.editMode}
      onClick={props.onClick}
      rowVariant={props.rowVariant}
      pointerCursor={props.pointerCursor}>
      <CellContentHolder title={props.title}>
        {props.children}
        {displayValue && <>{displayValue}</>}
        {arrayValue && props.isTags && (
          <FlexWrapContainer padding={'22px 25px'}>
            {arrayValue.map(value => (
              <Tag
                tag={DisplayValueService.getDisplayValue(value) ?? ''}
                key={value.toString()}
                hasCloseButton={false}
              />
            ))}
          </FlexWrapContainer>
        )}
      </CellContentHolder>
    </StyledCell>
  );
};
