'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from 'components/Button';
import Input from 'components/Input';
import { FaListUl, FaRegUser } from 'react-icons/fa6';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import styles from './Header.module.scss';
import logo from 'public/logo.svg';
import useUser from 'hooks/useUser';
import SideModal from 'components/SideModal';
import { ROUTES } from 'utils/routes';

export const Header: FC = () => {
  const { user, isAuthenticated } = useUser();

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <section className={styles.left}>
            <Button color='primary' size='medium' className={styles.btnCatalog}>
              <FaListUl size={18} />
              Каталог
            </Button>
            <form className={styles.searchForm}>
              <button className={styles.searchButton}>
                <BsSearch />
              </button>
              <Input
                type='text'
                placeholder='Поиск'
                className={styles.searchInput}
              />
            </form>
          </section>
          <section className={styles.logo}>
            <Link href={ROUTES.MAIN_PAGE} aria-label='Link to go home page'>
              <Image src={logo} alt='Logo' />
            </Link>
          </section>
          <section className={styles.right}>
            <div className={styles.info}>
              <Link href='tel:89536279866' className={styles.telLink}>
                8(953)627-98-66
              </Link>
              <span className={styles.workingHours}>
                ежедневно с 10:00 до 22:00
              </span>
            </div>
            <div className={styles.controlButtons}>
              <Link className={styles.controlButton} href={ROUTES.LK_PAGE}>
                <FaRegUser size={24} />
              </Link>
              <button className={styles.controlButton}>
                <BsCart3 size={24} />
                <span className={styles.cartPrice}>0 р.</span>
              </button>
            </div>
          </section>
        </div>
      </div>
      <SideModal isAuthenticated={isAuthenticated} user={user} />
    </header>
  );
};
