import React from 'react';
import { Container, Indicator, StyledText } from './styles';

export type SwitchProps = {
  text: string;
  checked: boolean;
  onClick: () => void;
};

export const Switch = (props: SwitchProps): JSX.Element => {
  return (
    <Container>
      <StyledText>{props.text}</StyledText>
      <Indicator checked={props.checked} onClick={props.onClick} />
    </Container>
  );
};
