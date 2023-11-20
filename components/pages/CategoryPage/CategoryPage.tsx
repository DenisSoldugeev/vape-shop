'use client';
import NotFound from 'next/dist/client/components/not-found-error';
import styles from './CategoryPage.module.scss';
import { FC } from 'react';
import { Category } from 'types/categories';
import Breadcrumbs from 'components/Breadcrumb';
import { FaHome } from 'react-icons/fa';
import { ROUTES } from 'utils/routes';

type Props = {
  category: Category;
};

export const CategoryPage: FC<Props> = async (props) => {
  const { category } = props;

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className={styles.categoryPage}>
      <div className='container'>
        <Breadcrumbs
          items={[
            {
              label: <FaHome />,
              path: '/',
            },
            {
              label: `${category.title}`,
              path: `${ROUTES.CATEGORY_PAGE}/${category.slug}`,
            },
          ]}
        />
        <h1 className={styles.categoryTitle}>{category.title}</h1>
      </div>
    </div>
  );
};
