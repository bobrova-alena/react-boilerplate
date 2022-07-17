import { all } from '@redux-saga/core/effects';
import { homeSagas } from 'src/ducks/home';

export default function* rootSaga(): Generator {
  yield all([homeSagas.default()]);
}
