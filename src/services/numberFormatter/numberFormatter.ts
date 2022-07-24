export class NumberFormatter {
  static format(value: number): string {
    return String(value).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
  }
}
