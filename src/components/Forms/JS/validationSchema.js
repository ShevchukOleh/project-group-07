import * as Yup from 'yup';

const validationSchemaRestration = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
      'Invalid email format'
    ),
  password: Yup.string().required('Password is required'),
});
const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
      'Invalid email format'
    ),
  password: Yup.string().required('Password is required'),
});
export { validationSchemaRestration, validationSchemaLogin };
