import styled from 'styled-components';
import React, { ForwardedRef, useMemo } from 'react';
import { inputCss, InputMode, StyledInputProps } from '../styledCss/input.styles';
import { theme } from '../../../theme';

export type InputProps = StyledInputProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    onValidatedChange?: (value?: string) => void;
    mode?: InputMode;
    padding?: string;
  };

const getPaddings = (props: InputProps) => {
  if (props.padding) {
    return props.padding;
  }
  return props.mode === 'compact' ? '0px' : '2px 0px';
};

const getFontSize = (props: InputProps) => {
  switch (props.mode) {
    case 'large':
      return theme.fontSizes.thirdTitle;
    case 'compact':
      return theme.fontSizes.small;
    default:
      return theme.fontSizes.base;
  }
};

export const StyledInput = styled.input<InputProps>`
  ${inputCss};

  font-size: ${props => getFontSize(props)};
  height: ${props => (props.mode === 'compact' ? 'unset' : '30px')};
  padding: ${props => getPaddings(props)};
`;

export const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const inputProps = useMemo(() => {
      const pureProps = { ...props };
      delete pureProps.onValidatedChange;
      return pureProps;
    }, [props]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onValidatedChange) {
        props.onValidatedChange(e.target.value);
      }
    };

    return <StyledInput {...inputProps} onChange={onChange} ref={ref} />;
  }
);

Input.displayName = 'Input';
