import { IApplicationState } from 'src/app/state';

export const selectCopied = (state: IApplicationState): Array<string> | undefined =>
  state.home.data;
