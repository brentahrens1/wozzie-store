import { useContext } from 'react';
import { ShopContext } from '../../contexts/shop.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { shopData } = useContext(ShopContext);

  return (
    <div className='shop-container'>
      {shopData.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product}  />
          </div>
        )
      })}
    </div>
  )
};

export default Shop;