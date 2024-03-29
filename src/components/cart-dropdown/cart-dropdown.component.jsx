import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className={`cart-dropdown ${isCartOpen ? 'cart-dropdown-open' : '' }`}>
      <div className='cart-items'>
        {
          cartItems.map((item) => {
            return (
              <CartItem key={item.id} cartItem={item} /> 
            )
          })
        }
      </div>
      <div className='cart-dropdown-footer'>
        <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
      </div>
    </div>
  )
}

export default CartDropdown;