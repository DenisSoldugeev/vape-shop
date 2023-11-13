import { ReactNode } from 'react';
import styles from 'components/pages/LkPage/LkPage.module.scss';
import LkMenu from 'components/pages/LkPage/LkMenu';

export default function LkLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.lkLayout}>
      <div className='container'>
        <h1 className={styles.mainTitle}>Мои данные</h1>
        <div className={styles.infoWrapper}>
          <LkMenu />
          <div className={styles.contentTab}>{children}</div>
        </div>
      </div>
    </div>
  );
}
