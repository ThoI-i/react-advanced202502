import React from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../context/cart-context';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;

  return (
    <CartContext.Consumer>
      {
        (x) => {
          console.log(x);
          return (
            <button
              className={button}
              onClick={onShow}>
              <span className={icon}>
                <CartIcon />
              </span>
              <span>My Cart</span>
              <span className={badge}>3</span>
            </button>
          );
        }
      }
      
    </CartContext.Consumer>
  );
};

export default HeaderCartButton;
