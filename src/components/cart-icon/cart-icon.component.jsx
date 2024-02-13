import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
      <p className='cart-icon'>Cart</p>
      <span className='cart-count'>0</span>
    </div>
  );
};

export default CartIcon;