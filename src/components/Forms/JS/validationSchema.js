import * as Yup from 'yup';

const validationSchemaRestration = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must not exceed 32 characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
      'Invalid email format'
    ),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*]{8,64}$/,
      'Password must contain letters, digits, and be 8-64 characters long'
    ),
});
const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
      'Invalid email format'
    ),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*]{8,64}$/,
      'Password must contain letters, digits, and be 8-64 characters long'
    ),
});
export { validationSchemaRestration, validationSchemaLogin };
