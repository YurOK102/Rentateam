import { actionTypes } from '../types';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
};

function cartReducer(state = initialState, action) {
  let findPro;
  let index;

  switch (action.type) {
    // добавляем товар в корзину из карточки товара
    case actionTypes.ADD_TO_CART:
      const check = state.cartItems.find((item) => item.id === action.data.id);

      if (!!check) {
        return state;
      } else {
        const Tprice =
          state.totalPrice + action.data.price * action.data.quantity;
        const Tquantities = state.totalQuantities + action.data.quantity;

        return {
          ...state,
          cartItems: [...state.cartItems, action.data],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
        };
      }

    case actionTypes.INCREMENT_PRODUCT:
      // в корзине ищем такой товар
      findPro = state.cartItems.find((product) => product.id === action.id);
      index = state.cartItems.findIndex((product) => product.id === action.id);
      // найденному товару добавляем единицу товара
      findPro.quantity += 1;
      let newCart = [...state.cartItems];
      newCart[index] = findPro;
      state.cartItems[index] = findPro;
      return {
        ...state,
        cartItems: newCart,
        totalPrice: state.totalPrice + findPro.price,
        totalQuantities: state.totalQuantities + 1,
      };

    case actionTypes.DECREMENT_PRODUCT:
      findPro = state.cartItems.find((product) => product.id === action.id);
      index = state.cartItems.findIndex((product) => product.id === action.id);
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        let newCart = [...state.cartItems];
        newCart[index] = findPro;
        state.cartItems[index] = findPro;
        return {
          ...state,
          cartItems: newCart,
          totalPrice: state.totalPrice - findPro.price,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        findPro = state.cartItems.find((product) => product.id === action.id);
        const filtered = state.cartItems.filter(
          (product) => product.id !== action.id
        );
        return {
          ...state,
          cartItems: filtered,
          totalPrice: state.totalPrice - findPro.price * findPro.quantity,
          totalQuantities: state.totalQuantities - findPro.quantity,
        };
      }

    // очищаем корзину от товаров
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
        totalQuantities: 0,
      };

    default:
      return state;
  }
}

export default cartReducer;
