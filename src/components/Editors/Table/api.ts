import { KeyValueItem } from "src/services/filterService/api";

export type TableStyle = 'large' | 'medium' | 'small' | 'wide';

export type TableItemProps = {
  tableStyle: TableStyle;
};

export type TableCellType = string | number | boolean | Array<string> | Date;

export type TableCell = {
  value: TableCellType;
  title?: string | CellValueHeader;
  isTags?: boolean;
};

export type TableRowType =
  | 'primary'
  | 'secondary'
  | 'third'
  | 'gray-text'
  | 'secondary-highlighted'
  | 'selected'
  | 'third-highlighted';

export type TableRow = {
  cells: Array<TableCell>;
  name?: string;
  variant?: TableRowType;
  allowEdit?: boolean;
  allowCopy?: boolean;
};

export type Filter = {
  items: Array<KeyValueItem>;
  selectedKey?: string;
  onSelection: (key?: string) => void;
};

export type CellValueHeader = {
  text: string;
  info?: string;
};

export type TableHeader = CellValueHeader & {
  filter?: Filter;
  required?: boolean;
};

