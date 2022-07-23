import { KeyValueItem } from 'src/services/filterService/api';

export class FilterService {
  static getFilteredItems(
    displayValue: string,
    items?: Array<KeyValueItem>,
    selectedKey?: string
  ): Array<KeyValueItem> {
    const allItems = items ?? [];
    const selectedItem = items?.find(item => item.key === selectedKey);
    const selectedDisplayValue = selectedItem?.value ?? selectedItem?.key ?? '';
    if (displayValue === selectedDisplayValue) {
      return allItems;
    }

    return allItems.filter(item => (item.value ?? item.key).indexOf(displayValue) !== -1);
  }
}
