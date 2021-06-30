import React from 'react';
import { Link } from '@material-ui/core';
import { connect } from 'react-redux';

import { useStylesHeader } from './HeaderStyles';

import Menu from '../Menu/Menu';
import { clearCart, addStreet, addHome } from '../../store/actions/cartAction';

function Header({ cartState, clearCart, productState, addStreet, addHome }) {
  const classes = useStylesHeader();

  const convertProduct = cartState.cartItems?.map((i) => ({
    name: i.name,
    price: i.price,
    quantity: i.quantity,
  }));

  const { street, home, selector } = productState;

  const sendAndRemoveProducts = () => {
    if (cartState.cartItems.length) {
      if (selector === 'delivery') {
        if (street !== '' || home !== '') {
          clearCart();
          addStreet('');
          addHome('');
          alert(`ЗАКАЗ ОТПРАВЛЕН
          ТОВАРЫ: ${JSON.stringify(convertProduct)}
          ОБЩАЯ СУММА: ${JSON.stringify(cartState.totalPrice)}
          УЛИЦА: ${JSON.stringify(street)}
          ДОМ: ${JSON.stringify(home)}
      `);
        } else {
          alert(`ЗАПОЛНИТЕ ПОЛЯ`);
        }
      } else if (selector === 'pickup') {
        clearCart();
        alert(`ЗАКАЗ ОТПРАВЛЕН
        ТОВАРЫ: ${JSON.stringify(convertProduct)}
        ОБЩАЯ СУММА: ${JSON.stringify(cartState.totalPrice)}
        `);
      }
    }
  };

  return (
    <div className={classes.header_area}>
      <div className={classes.header}>
        <div className={classes.header__bg_img}>
          <img src={'img/3_img.svg'} alt="" />
        </div>
        <Link className={classes.header__link}>
          <img src={'img/menu_icon.svg'} alt="" />
        </Link>
        <button onClick={sendAndRemoveProducts} className={classes.header__btn}>
          <p>{cartState.totalPrice} ₽</p>
          <div className={classes.header__btn_img}>
            <img src={'img/basket_icon.svg'} alt="" />
          </div>
        </button>
      </div>

      <Menu />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartState: state.cartReducer,
  productState: state.productsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  addStreet: (data) => dispatch(addStreet(data)),
  addHome: (data) => dispatch(addHome(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
