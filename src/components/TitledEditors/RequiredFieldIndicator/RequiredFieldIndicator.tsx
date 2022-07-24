import React from 'react';
import {
  Container,
  ContainerProps,
} from 'components/TitledEditors/RequiredFieldIndicator/styles';

export const RequiredFieldIndicator = (props: ContainerProps): JSX.Element => {
  return <Container {...props}>{'*'}</Container>;
};
