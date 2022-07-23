import React, { KeyboardEvent } from 'react';
import { Input, InputProps } from 'components/Inputs/Input';
import { Container } from 'components/Inputs/TagInput/styles';
import { SvgButton } from 'components/Editors/SvgButton';

export type TagInputProps = InputProps & {
  onAdd: () => void;
};

export const TagInput = (props: TagInputProps): JSX.Element => {
  const onEnterPress = (event: KeyboardEvent): void => {
    if (event.key == 'Enter' && props.value !== '') {
      props.onAdd();
    }
  };

  return (
    <Container>
      <Input
        value={props.value}
        onValidatedChange={props.onValidatedChange}
        marginRight={props.marginRight}
        type={props.type}
        onKeyPress={onEnterPress}
        width={'100%'}
      />
      <SvgButton
        name={'add'}
        size={'16px'}
        position={'absolute'}
        right={'0px'}
        top={'9px'}
        disabled={props.value === ''}
        onClick={props.onAdd}
      />
    </Container>
  );
};
