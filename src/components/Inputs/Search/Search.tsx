import React from 'react';
import { theme } from 'src/theme';
import { Input } from '../Input';
import { SvgButton } from '../../Editors/SvgButton';
import { Container } from './styles';

export type SearchProps = {
  filter?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  width?: string;
  compact?: boolean;
  withoutBorders?: boolean;
  margin?: string;
};

export const Search = (props: SearchProps): JSX.Element => {
  return (
    <Container
      margin={!props.compact ? props.margin ?? `0px ${theme.space.base24}` : undefined}>
      <Input
        value={props.filter ?? ''}
        mode={props.compact ? 'compact' : 'large'}
        onValidatedChange={props.onChange}
        padding={props.compact ? '4px 10px' : `0px 0px 0px ${theme.space.small6}`}
        withoutBorders={props.withoutBorders}
        width={props.width}
        placeholder={props.compact ? undefined : 'Search'}
      />
      <SvgButton
        name={props.filter ? 'cross-rounded' : 'search'}
        size={props.compact ? '12px' : '16px'}
        position={'absolute'}
        right={props.compact ? '6px' : '3px'}
        top={props.compact ? '4px' : '7px'}
        onClick={props.onClear}
      />
    </Container>
  );
};
