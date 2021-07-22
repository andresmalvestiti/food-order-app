import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx; 

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    const timerId = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timerId);
  }, [items]);

  const numberOfCartItems = items.reduce((accum, item) => accum + item.amount, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : '' }`;

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>;
};

export default HeaderCartButton;