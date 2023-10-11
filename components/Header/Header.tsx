import { FC } from 'react';
import Link from 'next/link';
import Button from 'components/Button';
import styles from './Header.module.scss';
export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.btnWrapper}>
            <Button
              color='primary'
              size='medium'
              outline
              className={styles.btnCatalog}
            >
              Каталог
            </Button>
          </div>
          <div className={styles.logo}>
            <Link href='/'>Vape Store</Link>
          </div>
          <section className={styles.rightSection}>
            <div className={styles.user}>
              {/* TODO: Сделать компонент Icons*/}
              USER ICON
            </div>
            <div className={styles.cart}>
              {/* TODO: Сделать компонент Icons*/}
              CART ICON
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};
