'use client';
import { FC, FormEventHandler } from 'react';
import styles from './LoginPage.module.scss';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm: FC = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/');
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input
        name='email'
        type='email'
        placeholder='Email'
        className={styles.loginInput}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        className={styles.loginInput}
      />
      <button type='submit' className={styles.loginButton}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
