import React from 'react';
import { Container, ContainerProps } from 'components/Layout/FlexWrapContainer/styles';
import { ChildrenProps } from 'src/model/props';

type FlexWrapContainerProps = ChildrenProps & ContainerProps;

export const FlexWrapContainer = (props: FlexWrapContainerProps): JSX.Element => {
  return <Container {...props}>{props.children}</Container>;
};
