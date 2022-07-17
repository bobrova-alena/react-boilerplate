import React, { ForwardedRef, useMemo } from 'react';
import { NumberFormatPropsBase } from 'react-number-format';
import { CompactStyledNumberFormat, Container, StyledNumberFormat } from './styles';

export type NumberInputProps = NumberFormatPropsBase<number> & {
  placeholder?: string;
  width?: string;
  maxLength?: number;
  compact?: boolean;
  marginRight?: string;
};

export const NumberInput = React.forwardRef(
  (props: NumberInputProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const pureProps = useMemo(() => {
      const changedProps = { ...props };
      delete changedProps.compact;
      return changedProps;
    }, [props]);

    return (
      <Container ref={ref} marginRight={props.marginRight}>
        {props.compact ? (
          <CompactStyledNumberFormat
            {...pureProps}
            thousandSeparator={' '}
            maxLength={props.maxLength ?? 19}
          />
        ) : (
          <StyledNumberFormat
            {...pureProps}
            thousandSeparator={' '}
            maxLength={props.maxLength ?? 19}
          />
        )}
      </Container>
    );
  }
);

NumberInput.displayName = 'NumberInput';
