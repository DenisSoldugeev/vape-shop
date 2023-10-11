import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.wrapper}>©Denis Soldugeev</div>
      </div>
    </footer>
  );
};
