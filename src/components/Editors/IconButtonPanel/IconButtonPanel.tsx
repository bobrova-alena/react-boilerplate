import React from 'react';
import { SvgButton } from 'components/Editors/SvgButton';
import { Container } from './styles';

export type IconButtonPanelProps = {
  hasEditButton?: boolean;
  hasDeleteButton?: boolean;
  hasCopyButton?: boolean;

  editButtonDisabled?: boolean;
  deleteButtonDisabled?: boolean;
  copyButtonDisabled?: boolean;

  onEditClick?: () => void;
  onDeleteClick?: () => void;
  onCopyClick?: () => void;

  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginRight?: string;

  paddingLeft?: string;

  size?: string;
  hidden?: boolean;
  height?: string;
};

export const IconButtonPanel = (props: IconButtonPanelProps): JSX.Element => {
  return (
    <Container
      marginLeft={props.marginLeft}
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      paddingLeft={props.paddingLeft}
      height={props.height}>
      {props.hasEditButton && (
        <SvgButton
          name={'edit'}
          onClick={() => props.onEditClick && props.onEditClick()}
          size={props.size ? props.size : '14px'}
          variant={'primary'}
          disabled={props.editButtonDisabled}
          hidden={props.hidden}
          marginTop={props.marginTop}
        />
      )}
      {props.hasCopyButton && (
        <SvgButton
          name={'copy'}
          onClick={() => props.onCopyClick && props.onCopyClick()}
          size={props.size ? props.size : '14px'}
          variant={'primary'}
          disabled={props.copyButtonDisabled}
          hidden={props.hidden}
          marginTop={props.marginTop}
        />
      )}
      {props.hasDeleteButton && (
        <SvgButton
          name={'delete'}
          onClick={() => props.onDeleteClick && props.onDeleteClick()}
          size={props.size ? props.size : '14px'}
          variant={'danger'}
          disabled={props.deleteButtonDisabled}
          hidden={props.hidden}
          marginTop={props.marginTop}
        />
      )}
    </Container>
  );
};
