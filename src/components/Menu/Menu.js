import React from 'react';
import { connect } from 'react-redux';

import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';
import {
  addStreet,
  addHome,
  checkSelector,
} from '../../store/actions/cartAction';

import { useStylesMenu } from './MenuStyles';

function Menu({ productState, addStreet, addHome, checkSelector }) {
  const classes = useStylesMenu();

  const { street, home, selector } = productState;

  const handlerAddName = (e) => {
    addStreet(e.target.value);
  };
  const handlerAddAddress = (e) => {
    addHome(e.target.value);
  };

  const InputError = () => (
    <div className={classes.menu__validate}>
      <img src={'img/arrow.png'} alt="" />
      <p>Нужно заполнить для оформления доставки</p>
    </div>
  );

  return (
    <div className={classes.menu}>
      <div className={classes.menu__wrapper}>
        <div className={classes.menu__text}>
          {selector === 'delivery' ? (
            <p>Доставка г. Москва</p>
          ) : (
            <p>Самовывоз г. Москва</p>
          )}
        </div>
        <div className={classes.menu__selector}>
          <RadioButtonGroup checkSelector={checkSelector} />
        </div>
      </div>

      {selector === 'delivery' && (
        <div className={classes.menu__delivery}>
          <div className={classes.menu__delivery_group}>
            <div className={classes.menu__address}>
              <p>Улица</p>
              <input
                placeholder="Остоженка"
                value={street}
                onChange={(e) => handlerAddName(e)}
              />
            </div>
            {street === '' && <InputError />}
          </div>
          <div className={classes.menu__delivery_group}>
            <div className={classes.menu__address}>
              <p>Дом</p>
              <input
                placeholder="Остоженка"
                value={home}
                onChange={(e) => handlerAddAddress(e)}
              />
            </div>
            {home === '' && <InputError />}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  productState: state.productsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addStreet: (data) => dispatch(addStreet(data)),
  addHome: (data) => dispatch(addHome(data)),
  checkSelector: (data) => dispatch(checkSelector(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
