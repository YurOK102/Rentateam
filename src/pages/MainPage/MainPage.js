import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getProductsAction,
  getCategoriesAction,
} from '../../store/sagas/productsSaga';
import {
  addToCart,
  incrementProduct,
  decrementProduct,
} from '../../store/actions/cartAction';

import ProductCard from '../../components/ProductCard/ProductCard';
import { useStylesMain } from './MainStyles';

function MainPage({
  productsState,
  getProductsAction,
  getCategoriesAction,
  addToCart,
  cartItems,
  incrementProduct,
  decrementProduct,
}) {
  const classes = useStylesMain();

  let { product, categories, selector } = productsState;

  let [current, setCurrent] = useState(0);

  const changeBg = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    getProductsAction();
    getCategoriesAction();
  }, [getProductsAction, getCategoriesAction]);

  const idToProduct = product.reduce((acc, it) => {
    return {
      ...acc,
      [it.id]: it,
    };
  }, {});

  return (
    <>
      <div className={classes.main_area}>
        <div className={classes.main}>
          {categories.map((i, index) => {
            return (
              <div
                key={i.id}
                onClick={() => changeBg(index)}
                className={`${classes.main__tabs} ${
                  current === index ? ' active' : ''
                }`}
              >
                <a href={`#puk-${index} `}>{i.name}</a>
              </div>
            );
          })}
        </div>
      </div>

      {categories.map((category, index) => (
        <div key={category.id} className={classes.products_area}>
          <div className={classes.products} id={`puk-${index}`}>
            <div className={classes.products__title}>
              <p>{category.name}</p>
            </div>

            <div className={classes.products__wrapper}>
              {category.products.map((id) =>
                idToProduct ? (
                  <ProductCard
                    key={id}
                    idProduct={idToProduct}
                    idItem={id}
                    handlerAddToCart={addToCart}
                    cartItems={cartItems}
                    handlerIncrementProduct={incrementProduct}
                    handlerDecrementProduct={decrementProduct}
                    selector={selector}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  productsState: state.productsReducer,
  cartItems: state.cartReducer.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsAction: () => dispatch(getProductsAction()),
  getCategoriesAction: () => dispatch(getCategoriesAction()),
  addToCart: (data) => dispatch(addToCart(data)),
  incrementProduct: (data) => dispatch(incrementProduct(data)),
  decrementProduct: (data) => dispatch(decrementProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
