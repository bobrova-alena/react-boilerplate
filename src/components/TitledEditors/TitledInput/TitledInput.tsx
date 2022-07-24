import React from 'react';
import { Input, InputProps } from 'components/Inputs/Input';
import {
  TitledEditorPlaceHolder,
  TitledEditorPlaceHolderProps,
} from 'components/TitledEditors/TitledEditorPlaceHolder';

export type TitledInputProps = TitledEditorPlaceHolderProps & InputProps;

export const TitledInput = (props: TitledInputProps): JSX.Element => {
  return (
    <TitledEditorPlaceHolder
      text={props.text}
      marginBottom={props.marginBottom}
      marginTop={props.marginTop}
      padding={props.padding}
      info={props.info}
      width={props.width}
      required={props.required}>
      <Input
        value={props.value}
        onValidatedChange={props.onValidatedChange}
        marginRight={props.marginRight}
        type={props.type}
        readOnly={props.readOnly}
        disabled={props.disabled}
      />
    </TitledEditorPlaceHolder>
  );
};
