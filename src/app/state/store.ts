import { Reducer, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { homeReducer, HomeState } from 'src/ducks/home';
import rootSaga from './sagas';

export interface IApplicationState {
  home: HomeState;
}

export const createRootReducer = (): Reducer<IApplicationState> =>
  combineReducers<IApplicationState>({
    home: homeReducer,
  });

const composeEnhancersWithDevTools = composeWithDevTools({
  trace: true,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  createRootReducer(),
  composeEnhancersWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
