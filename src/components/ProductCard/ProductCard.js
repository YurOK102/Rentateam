import React, { useState, useEffect } from 'react';

import { useStylesProductCard } from './ProductCardStyles';

const ProductCard = ({
  idProduct,
  idItem,
  handlerAddToCart,
  cartItems,
  handlerIncrementProduct,
  handlerDecrementProduct,
  selector,
}) => {
  const classes = useStylesProductCard();

  const [getQuantity, setGetQuantity] = useState(0);

  const { id, name, price, delivery, img, quantity, banner } =
    idProduct?.[idItem];
  const onAddToCart = () => {
    handlerAddToCart({
      id,
      name,
      price,
      delivery,
      img,
      quantity,
    });
  };

  useEffect(() => {
    const addedItemInCart = cartItems.find((item) => item.id === id);
    setGetQuantity(addedItemInCart?.quantity);
  }, [id, cartItems, getQuantity, setGetQuantity]);

  const product = () => {
    return (
      <div className={classes.product}>
        {banner === 'new' && (
          <div className={classes.product__banner_new}>Новое</div>
        )}
        {banner === 'hit' && (
          <div className={classes.product__banner_hit}>Хит</div>
        )}

        {getQuantity > 0 ? (
          <div className={classes.product__wrap_double_btn}>
            <button onClick={() => handlerDecrementProduct(id)}>
              {getQuantity < 2 ? (
                <img
                  className={classes.product__remove_icon}
                  src={'img/remove.svg'}
                  alt=""
                />
              ) : (
                <img src={'img/minus_max.svg'} alt="" />
              )}
            </button>
            <p>{getQuantity}</p>
            <button onClick={() => handlerIncrementProduct(id)}>
              <img src={'img/plus_max.svg'} alt="" />
            </button>
          </div>
        ) : (
          <button onClick={onAddToCart} className={classes.product__white_btn}>
            <img src={'img/plus_min.svg'} alt="" />
          </button>
        )}
        <div className={classes.product__wrap_img}>
          <img src={img} alt="" />
        </div>
        <div className={classes.product__text}>
          <div className={classes.product__name}>
            <p>{name}</p>
          </div>
          <div className={classes.product__price}>{price}₽</div>
        </div>
      </div>
    );
  };

  return (
    <>{selector === 'delivery' ? <>{delivery && product()}</> : product()}</>
  );
};

export default ProductCard;
