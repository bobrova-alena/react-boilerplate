import React from 'react';
import { Container } from 'components/Editors/Tag/styles';
import { SvgButton } from 'components/Editors/SvgButton';

export type TagProps = {
  tag: string;

  hasCloseButton?: boolean;
  onClickClose?: (tag: string) => void;
};

export const Tag = (props: TagProps): JSX.Element => {
  const onClose = () => {
    if (props.onClickClose) {
      props.onClickClose(props.tag);
    }
  };

  return (
    <Container>
      {props.tag}
      {props.hasCloseButton && (
        <SvgButton
          name={'close'}
          variant={'danger'}
          size={'18px'}
          onClick={onClose}
          marginTop={'3px'}
          marginLeft={'3px'}
        />
      )}
    </Container>
  );
};
