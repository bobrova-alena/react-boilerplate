import React, { useMemo } from 'react';
import { SvgIcon } from '../SvgIcon';
import {
  CheckboxIndicator,
  CheckboxInput,
  CheckboxLabel,
  CheckboxTickWrap,
  Placeholder,
} from './styles';

export type CheckBoxProps = {
  disabled?: boolean;
  checked?: boolean;
  placeholder: string;
  onClick?: () => void;
};

export const CheckBox = (props: CheckBoxProps): JSX.Element => {
  const name = useMemo(() => props.placeholder.replaceAll(' ', '-'), [props.placeholder]);

  return (
    <CheckboxLabel htmlFor={name}>
      <CheckboxInput
        id={name}
        type='checkbox'
        checked={props.checked}
        onChange={props.onClick}
        disabled={props.disabled}
      />
      <CheckboxIndicator>
        <CheckboxTickWrap>
          <SvgIcon name='check' size='20px' status={'indication'} />
        </CheckboxTickWrap>
      </CheckboxIndicator>
      {props.placeholder && <Placeholder>{props.placeholder}</Placeholder>}
    </CheckboxLabel>
  );
};
