import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  return (
    <div className='checkout-cart-item'>
      <div className='checkout-image-container'>
        <img src={imageUrl} alt={name} /> 
      </div>
      <h2>{name}</h2>
      <div className='checkout-add-remove'>
        <span onClick={() => removeItemFromCart(cartItem)}>&#10094;</span>
        <h2>{quantity}</h2>
        <span onClick={() => addItemToCart(cartItem)}>&#10095;</span>
      </div>
      <h2>{price}</h2>
      <h2 className='checkout-item-remove' onClick={() => clearItemFromCart(cartItem)}>&#10005;</h2>
    </div>
  )
}

export default CheckoutItem;