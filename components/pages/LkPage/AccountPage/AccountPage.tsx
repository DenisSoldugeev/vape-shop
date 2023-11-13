'use client';
import { FC } from 'react';
import styles from './AccountPage.module.scss';
import useProfileForm from 'hooks/useProfileForm';
import Button from 'components/Button';
export const AccountPage: FC = () => {
  const { formik } = useProfileForm();
  return (
    <>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            id='profileEmail'
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email || ''}
          />
          <label htmlFor='profileEmail'>Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            id='profileName'
            type='text'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name || ''}
          />
          <label htmlFor='profileName'>Name</label>
        </div>
        <Button type='submit' disabled={!formik.dirty}>
          Сохранить
        </Button>
      </form>
    </>
  );
};
