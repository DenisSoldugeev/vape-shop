'use client';
import { FC } from 'react';
import { menuData } from 'components/pages/LkPage/LkMenu/menuData';
import Link from 'next/link';
import styles from './LkMenu.module.scss';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { removeFirstPathSegment } from 'utils/path';

export const LkMenu: FC = () => {
  const pathname = removeFirstPathSegment(usePathname());
  // console.log(pathname);
  return (
    <nav>
      <ul className={styles.list}>
        {menuData.map((item) => (
          <li
            key={item.id}
            className={classNames({ [styles.active]: pathname === item.href })}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li>Выйти</li>
      </ul>
    </nav>
  );
};
