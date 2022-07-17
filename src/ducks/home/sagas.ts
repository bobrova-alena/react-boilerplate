import { all, takeEvery } from '@redux-saga/core/effects';
import { GET_HOME_STATE } from './slice';

function* GetHomeState() {
  //
}

export default function* rootEventFlowsSaga(): unknown {
  yield all([yield takeEvery(GET_HOME_STATE.toString(), GetHomeState)]);
}
