import { actionTypes } from '../types';
import { deliverToReducer } from '../../helpers/api-helper';
import { call, put } from 'redux-saga/effects';

export function getProductsAction() {
  return { type: actionTypes.GET_PRODUCTS };
}

export function* getProductsSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/product`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}

export function getCategoriesAction() {
  return { type: actionTypes.GET_CATEGORIES };
}

export function* getCategoriesSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/categories`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}
