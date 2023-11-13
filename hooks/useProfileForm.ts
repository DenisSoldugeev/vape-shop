import { useFormik } from 'formik';
import { ChangesUserData } from 'types/user';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';

const useProfileForm = () => {
  const formik = useFormik<ChangesUserData>({
    initialValues: {
      email: '',
      name: '',
    },
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    const loadProfileData = async () => {
      const session = await getSession();
      if (session) {
        const userData = session.user as ChangesUserData;
        formik.setValues(userData);
      }
    };

    loadProfileData();
  }, []);

  return { formik };
};
export default useProfileForm;
