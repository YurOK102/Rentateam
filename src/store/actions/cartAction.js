import { actionTypes } from '../types';

export function addToCart(data) {
  return {
    type: actionTypes.ADD_TO_CART,
    data,
  };
}

export function incrementProduct(id) {
  return {
    type: actionTypes.INCREMENT_PRODUCT,
    id,
  };
}

export function decrementProduct(id) {
  return {
    type: actionTypes.DECREMENT_PRODUCT,
    id,
  };
}

export function clearCart() {
  return {
    type: actionTypes.CLEAR_CART,
  };
}

export function sendOrder(data) {
  return {
    type: actionTypes.SEND_ORDER,
    data,
  };
}

export function addStreet(data) {
  return {
    type: actionTypes.ADD_STREET,
    data,
  };
}

export function addHome(data) {
  return {
    type: actionTypes.ADD_HOME,
    data,
  };
}

export function checkSelector(data) {
  return {
    type: actionTypes.CHECK_SELECTOR,
    data,
  };
}
