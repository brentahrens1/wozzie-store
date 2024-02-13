import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className='cart-item'>
      <div className='cart-item-image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='cart-item-details'>
        <h2 className='cart-item-name'>{name}</h2>
        <span className='cart-item-quantity-and-price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem;