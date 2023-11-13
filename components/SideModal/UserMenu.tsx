import { FC } from 'react';
import { User } from 'types/user';
import styles from './SideModal.module.scss';
import Link from 'next/link';
import { ROUTES } from 'utils/routes';

type Props = {
  user: User;
};

export const UserMenu: FC<Props> = ({ user }) => {
  return (
    <>
      <span className={styles.userName}>{user.name}</span>
      <hr className={styles.line} />
      <ul className={styles.userMenuList}>
        <Link href={ROUTES.PROFILE_PAGE}>Личная информация</Link>
        <li>Мои Заказы</li>
        <li>Избранное</li>
        <li>Выход</li>
      </ul>
    </>
  );
};
