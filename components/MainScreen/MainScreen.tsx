'use client';
import { FC, useEffect } from 'react';
import CardCategory from './CardCategory';
import styles from './MainScreen.module.scss';
import { useRecoilState } from 'recoil';
import { categoryState } from 'state/atoms/categoryState';
import { Category } from 'types/categories';

type Props = {
  categoriesData: Category[];
};
export const MainScreen: FC<Props> = ({ categoriesData }) => {
  const [categories, setCategories] = useRecoilState(categoryState);

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData, setCategories]);

  return (
    <div className={styles.mainScreen}>
      <div className='container'>
        <div className={styles.categoryList}>
          {categories.map((cat) => (
            <CardCategory key={cat._id} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};
