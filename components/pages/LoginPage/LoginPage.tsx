import styles from './LoginPage.module.scss';
import GoogleButton from 'components/pages/LoginPage/GoogleButton';
import LoginForm from 'components/pages/LoginPage/LoginForm';

export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <h1 className={styles.title}>Личные данные</h1>
      <div className={styles.formWrapper}>
        <GoogleButton />
        <span>or</span>
        <LoginForm />
      </div>
    </div>
  );
}
