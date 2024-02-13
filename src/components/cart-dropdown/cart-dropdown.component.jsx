import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className={`cart-dropdown ${isCartOpen ? 'cart-dropdown-open' : '' }`}>
      <div className='cart-items'>

      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown;