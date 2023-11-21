import { FC } from 'react';
import { Product } from 'types/products';
import styles from 'components/ProductsCategory/ProductsCategory.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from 'utils/routes';

type Props = {
  product: Product;
};
const ProductCard: FC<Props> = ({ product }) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  return (
    <div className={styles.productCard}>
      <div className={styles.productTop}>
        <Link
          href={`${ROUTES.PRODUCT_PAGE}/${product._id}`}
          className={styles.productImgLink}
        >
          <Image
            src={`${baseURL}/${product.images[0]}`}
            alt={product.name}
            width={226}
            height={385}
            className={styles.productImg}
          />
        </Link>
      </div>
      <div className={styles.productBody}>
        <Link href={`${ROUTES.PRODUCT_PAGE}/${product._id}`}>
          <h4 className={styles.productTitle}>{product.name}</h4>
        </Link>
        <div className={styles.priceWrapper}>
          <span className={styles.priceTitle}>Цена</span>
          <span className={styles.price}>{product.price} &#8381;</span>
        </div>
        <div className={styles.cardHiddenElement}>
          <Link
            href={`${ROUTES.PRODUCT_PAGE}/${product._id}`}
            className={styles.cardButton}
          >
            <span>Подробнее</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
