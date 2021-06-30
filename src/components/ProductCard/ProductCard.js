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

  const onAddToCart = () => {
    handlerAddToCart({
      id: idProduct?.[idItem]?.id,
      name: idProduct?.[idItem]?.name,
      price: idProduct?.[idItem]?.price,
      delivery: idProduct?.[idItem]?.delivery,
      img: idProduct?.[idItem]?.img,
      quantity: idProduct?.[idItem]?.quantity,
    });
  };

  const destructItem = idProduct?.[idItem]?.id;
  useEffect(() => {
    const addedItemInCart = cartItems.find(
      (item) => item.id === idProduct?.[idItem]?.id
    );
    setGetQuantity(addedItemInCart?.quantity);
  }, [destructItem, cartItems, getQuantity, setGetQuantity, idProduct, idItem]);

  const product = () => {
    return (
      <div className={classes.product}>
        {idProduct?.[idItem]?.banner === 'new' && (
          <div className={classes.product__banner_new}>Новое</div>
        )}
        {idProduct?.[idItem]?.banner === 'hit' && (
          <div className={classes.product__banner_hit}>Хит</div>
        )}

        {getQuantity > 0 ? (
          <div className={classes.product__wrap_double_btn}>
            <button
              onClick={() => handlerDecrementProduct(idProduct?.[idItem]?.id)}
            >
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
            <button
              onClick={() => handlerIncrementProduct(idProduct?.[idItem]?.id)}
            >
              <img src={'img/plus_max.svg'} alt="" />
            </button>
          </div>
        ) : (
          <button onClick={onAddToCart} className={classes.product__white_btn}>
            <img src={'img/plus_min.svg'} alt="" />
          </button>
        )}
        <div className={classes.product__wrap_img}>
          <img src={idProduct?.[idItem]?.img} alt="" />
        </div>
        <div className={classes.product__text}>
          <div className={classes.product__name}>
            <p>{idProduct?.[idItem]?.name}</p>
          </div>
          <div className={classes.product__price}>
            {idProduct?.[idItem]?.price}₽
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {selector === 'delivery' ? (
        <>{idProduct?.[idItem]?.delivery && product()}</>
      ) : (
        product()
      )}
    </>
  );
};

export default ProductCard;
