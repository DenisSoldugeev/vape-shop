import { FC } from 'react';
import { Product } from 'types/products';
import styles from 'components/ProductsCatgory/ProductsCategory.module.scss';
import Link from 'next/link';

type Props = {
  product: Product;
};
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productTop}></div>
      <div className={styles.productBody}>
        <Link href={`/product/${product._id}`}>
          <h4 className={styles.productTitle}>{product.name}</h4>
        </Link>
        <div className={styles.priceWrapper}>
          <span className={styles.priceTitle}>Цена</span>
          <span className={styles.price}>{product.price} &#8381;</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
