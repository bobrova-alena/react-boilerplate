import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StyledTextArea, StyledTextAreaProps } from './styles';

export type TextAreaProps = StyledTextAreaProps & {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxHeight?: number;
  placeholder?: string;
};

type RejectFunc = (reason?: unknown) => void;

export const TextArea = (props: TextAreaProps): JSX.Element => {
  const minHeight = useMemo(() => {
    return props.mode === 'compact' ? 18 : 30;
  }, [props.mode]);
  const [inputHeight, setInputHeight] = useState(minHeight + 'px');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const rejectCalcHeight = useRef<null | RejectFunc>(null);

  const calcHeight = () => {
    new Promise((resolve, reject) => {
      rejectCalcHeight.current = reject;
      setInputHeight('0px');
      resolve(undefined);
    }).then(() => {
      const scrollHeight = textAreaRef.current?.scrollHeight || 0;
      let height = scrollHeight < 36 ? minHeight : scrollHeight;
      if (scrollHeight < 36) {
        height = minHeight;
      } else if (props.maxHeight !== undefined && scrollHeight > props.maxHeight) {
        height = props.maxHeight;
      }

      setInputHeight(height + 'px');
    });
  };

  useEffect(() => {
    if (!props.height) {
      calcHeight();
    }
    return () => {
      if (rejectCalcHeight.current !== null) {
        rejectCalcHeight.current();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  return (
    <StyledTextArea
      ref={textAreaRef}
      height={inputHeight}
      minHeight={inputHeight}
      placeholder={props.placeholder}
      {...props}
    />
  );
};
