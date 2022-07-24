import React, { useMemo } from 'react';
import { TitledEditorPlaceHolder } from 'components/TitledEditors/TitledEditorPlaceHolder';
import { FlexContainer } from 'components/Layout/FlexContainer';
import { ChildrenProps } from 'src/model/props';
import { CellValueHeader } from '../api';

type CellContentHolderProps = ChildrenProps & {
  title?: string | CellValueHeader;
};

export const CellContentHolder = (props: CellContentHolderProps): JSX.Element => {
  const title = useMemo(() => {
    const cellValueHeader = props.title as CellValueHeader;
    if (cellValueHeader && cellValueHeader.text !== undefined) {
      return cellValueHeader.text;
    }
    return props.title as string;
  }, [props.title]);

  const info = useMemo(() => {
    const cellValueHeader = props.title as CellValueHeader;
    if (cellValueHeader && cellValueHeader.info !== undefined) {
      return cellValueHeader.info;
    }
    return undefined;
  }, [props.title]);

  return (
    <>
      {props.title !== undefined ? (
        <TitledEditorPlaceHolder text={title} info={info}>
          <FlexContainer marginTop={'10px'}>{props.children}</FlexContainer>
        </TitledEditorPlaceHolder>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};
