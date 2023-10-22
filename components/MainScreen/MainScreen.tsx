import { FC } from 'react';
import CardCategory from './CardCategory';
import styles from './MainScreen.module.scss';
import { mockCategories } from 'components/MainScreen/data';

export const MainScreen: FC = () => {
  return (
    <div className={styles.mainScreen}>
      <div className='container'>
        <div className={styles.categoryList}>
          {mockCategories.map((cat) => (
            <CardCategory key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};
