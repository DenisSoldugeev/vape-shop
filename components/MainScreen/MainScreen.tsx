'use client';
import { FC, useEffect } from 'react';
import CardCategory from './CardCategory';
import styles from './MainScreen.module.scss';
import { fetchCategories } from 'utils/categoryService';
import { useRecoilState } from 'recoil';
import { categoryState } from 'state/atoms/categoryState';
export const MainScreen: FC = () => {
  const [categories, setCategories] = useRecoilState(categoryState);

  useEffect(() => {
    const loadCategories = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);
    };

    loadCategories();
  }, []);

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
