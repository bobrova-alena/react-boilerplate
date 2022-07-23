import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FilterService } from 'src/services/filterService';
import { KeyValueItem } from '../../../services/filterService/api';
import { Search } from '../../Inputs/Search';
import { Container, Item } from './styles';

type SelectionMode = 'none' | 'single';

export type ListProps = {
  items?: Array<KeyValueItem>;
  onSelect?: (key?: string) => void;
  selectionMode?: SelectionMode;
  width?: string;
  minWidth?: string;
  selectedKey?: string;
  compact?: boolean;
  clearAllowed?: boolean;
  filtrationAllowed?: boolean;
  onInfoClick: () => void;
};

export const List = (props: ListProps): JSX.Element => {
  const [filter, setFilter] = useState<string>('');
  const items = useMemo(
    () => FilterService.getFilteredItems(filter, props.items, props.selectedKey),
    [props.items, filter, props.selectedKey]
  );
  const selectedItemDisplayValue = useRef<string>('');

  useEffect(() => {
    setFilter('');
    const selectedItem = props.items?.find(item => item.key === props.selectedKey);
    selectedItemDisplayValue.current = selectedItem?.value ?? selectedItem?.key ?? '';
  }, [props.selectedKey, props.items]);

  const onClick = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>, key?: string) => {
    if (props.selectionMode !== 'none') {
      if (props.onSelect) {
        props.onSelect(key);
      }
    }
  };

  const clearFilter = () => {
    setFilter('');
  };

  const onFilterChange = (value: string) => {
    setFilter(value);
  };

  return (
    <Container>
      {props.filtrationAllowed && (
        <Search
          filter={filter}
          onChange={onFilterChange}
          onClear={clearFilter}
          width={props.width}
          compact={props.compact}
          withoutBorders={true}
        />
      )}
      {props.clearAllowed && (
        <Item
          selected={false}
          onClick={e => onClick(e, undefined)}
          width={props.width}
          compact={props.compact}>
          {''}
        </Item>
      )}
      {items.map((item, index) => (
        <Item
          key={index}
          onClick={e => onClick(e, item.key)}
          selected={props.selectionMode !== 'none' && item.key === props.selectedKey}
          width={props.width}
          compact={props.compact}>
          {item.value ?? item.key}
        </Item>
      ))}
      {items.length === 0 && (
        <Item
          selected={false}
          width={props.width}
          compact={props.compact}
          onClick={props.onInfoClick}>
          {'There is no items'}
        </Item>
      )}
    </Container>
  );
};
