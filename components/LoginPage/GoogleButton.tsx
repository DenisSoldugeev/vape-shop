'use client';
import { FC } from 'react';
import Button from 'components/Button';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { BsGoogle } from 'react-icons/bs';
import styles from './LoginPage.module.scss';

const GoogleButton: FC = () => {
  const searchParam = useSearchParams();
  const callbackUrl = searchParam.get('callbackUrl') || '/';
  return (
    <Button
      className={styles.googleButton}
      onClick={() => signIn('google', { callbackUrl })}
    >
      <BsGoogle />
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
