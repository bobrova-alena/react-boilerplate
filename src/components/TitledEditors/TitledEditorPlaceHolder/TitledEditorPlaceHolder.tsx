import React from 'react';
import { theme } from 'src/theme';
import { SvgButton } from 'components/Editors/SvgButton';
import { FlexContainer } from 'components/Layout/FlexContainer';
import { Text } from 'components/Typography/Text';
import { ChildrenProps } from 'src/model/props';
import { RequiredFieldIndicator } from 'components/TitledEditors/RequiredFieldIndicator';
import { Container } from 'components/TitledEditors/TitledEditorPlaceHolder/styles';

export type TitledEditorPlaceHolderProps = ChildrenProps & {
  text: string;
  isError?: boolean;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  padding?: string;
  info?: string;
  wideTooltip?: boolean;
  width?: string;
  editorTopMargin?: string;
  required?: boolean;
  onClick?: () => void;
  showBottomBorder?: boolean;
};

export const TitledEditorPlaceHolder = (
  props: TitledEditorPlaceHolderProps
): JSX.Element => {
  return (
    <Container
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
      marginTop={props.marginTop}
      padding={props.padding}
      width={props.width}
      onClick={props.onClick}
      showBottomBorder={props.showBottomBorder}>
      <FlexContainer marginBottom={props.editorTopMargin}>
        <Text
          color={props.isError ? theme.colors.red : theme.colors.mediumGray}
          fontSize={theme.fontSizes.small}>
          {props.text}
        </Text>
        {props.info && (
          <SvgButton
            name={'info'}
            size={'14px'}
            marginLeft={'5px'}
            marginBottom={'4px'}
            tooltip={props.info}
            wideTooltip={props.wideTooltip}
          />
        )}
        {props.required && <RequiredFieldIndicator marginLeft={'5px'} />}
      </FlexContainer>
      {props.children}
    </Container>
  );
};
