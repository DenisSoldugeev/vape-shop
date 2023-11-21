import { FC } from 'react';
import { Product } from 'types/products';
import styles from './ProductsCategory.module.scss';
import ProductCard from 'components/ProductsCategory/ProductCard';
type Props = {
  products: Product[];
};
export const ProductsCategory: FC<Props> = ({ products }) => {
  return (
    <section id='products-category' className={styles.productsSection}>
      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};
