import React from 'react';
import { ChildrenProps } from 'src/model/props';
import { FlexContainer } from 'components/Layout/FlexContainer';
import { GlobalStyle } from './globalStyles';

export const PageTemplate = (props: ChildrenProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <FlexContainer flexDirection={'column'} height={'100%'}>
        {props.children}
      </FlexContainer>
    </>
  );
};
