import { FC } from 'react';
import styles from './ProductPage.module.scss';
import { Product } from 'types/products';
import Breadcrumbs from 'components/Breadcrumb';
import { FaHome } from 'react-icons/fa';
import { ROUTES } from 'utils/routes';
import Image from 'next/image';

type Props = {
  product: Product;
};
export const ProductPage: FC<Props> = ({ product }) => {
  return (
    <div className={styles.productPage}>
      <div className='container'>
        <Breadcrumbs
          items={[
            {
              label: <FaHome />,
              path: '/',
            },
            {
              label: `${product.category.title}`,
              path: `${ROUTES.CATEGORY_PAGE}/${product.category.slug}`,
            },
            {
              label: `${product.name}`,
              path: `${ROUTES.PRODUCT_PAGE}/${product._id}`,
            },
          ]}
        />
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardLeft}>
            <div className={styles.productCardImage}>
              <Image
                src={`http://localhost:3003/${product.images[0]}`}
                alt={product.name}
                width={500}
                height={500}
              />
            </div>
            <div className={styles.productCardInfo}>
              <h2>Описание</h2>
              <p>{product.description}</p>
            </div>
          </div>
          <div className={styles.productCardRight}></div>
        </div>
      </div>
    </div>
  );
};
