import { actionTypes } from '../types';

const initialState = {
  product: [],
  categories: [],
  street: '',
  home: '',
  selector: 'pickup',
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.data,
      };

    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.data,
      };

    case actionTypes.ADD_STREET:
      return {
        ...state,
        street: action.data,
      };

    case actionTypes.ADD_HOME:
      return {
        ...state,
        home: action.data,
      };

    case actionTypes.CHECK_SELECTOR:
      return {
        ...state,
        selector: action.data,
      };

    default:
      return state;
  }
}

export default productsReducer;
