import { NumberFormatter } from 'src/services/numberFormatter';
import { DateFormatter } from 'src/services/dateFormatter';

export type PropertyTypes = string | number | boolean | object;

export class DisplayValueService {
  static booleanToString(value?: boolean): string {
    return value ? 'true' : 'false';
  }
  static getDisplayValue(
    value?: PropertyTypes,
    isDateTime?: boolean
  ): string | undefined {
    if (typeof value === 'boolean') {
      return this.booleanToString(value);
    } else if (typeof value === 'number') {
      return NumberFormatter.format(value);
    } else if (typeof value === 'string') {
      return value;
    } else if (value instanceof Date) {
      return isDateTime
        ? DateFormatter.formatDateTime(value)
        : DateFormatter.formatDate(value);
    } else {
      return undefined;
    }
  }
}
