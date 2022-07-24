import { format } from 'date-fns';
import { theme } from 'src/theme';
import enUsLocale from 'date-fns/locale/en-US';

export class DateFormatter {
  static formatDate(value: Date) {
    return format(value, theme.datetimeFormat.date, { locale: enUsLocale });
  }

  static formatDateTime(value: Date) {
    return format(value, theme.datetimeFormat.datetime, { locale: enUsLocale });
  }
}
