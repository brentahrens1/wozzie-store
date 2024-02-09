import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='product-footer'>
        <h2 className='product-name'>{name}</h2>
        <h2 className='product-price'>{price}</h2>
      </div>
      <div className="product-btn">
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;