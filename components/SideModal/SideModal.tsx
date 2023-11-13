import { FC, useContext } from 'react';
import styles from './SideModal.module.scss';
import { User } from 'types/user';
import { UserMenu } from 'components/SideModal/UserMenu';
import { UserMenuContext } from 'context/UserMenuContext';

type Props = {
  isAuthenticated: boolean;
  user: User;
};

export const SideModal: FC<Props> = ({ user, isAuthenticated }) => {
  const { isMenuOpen, toggleModal } = useContext(UserMenuContext);

  if (!isMenuOpen) return null;

  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modal}>
        <div className={styles.user} onClick={(e) => e.stopPropagation()}>
          {isAuthenticated && user ? (
            <UserMenu user={user} />
          ) : (
            <div>
              <button className={styles.button}>Регистрация</button>
              <button className={styles.button}>Авторизация</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
