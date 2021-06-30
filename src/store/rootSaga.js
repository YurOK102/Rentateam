import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../store/types';
import { getProductsSaga, getCategoriesSaga } from './sagas/productsSaga';

export function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_PRODUCTS, getProductsSaga),
    takeLatest(actionTypes.GET_CATEGORIES, getCategoriesSaga),
  ]);
}

export default rootSaga;
