import './error.css';
import { ErrorMessage } from 'formik';
const ErrorComponent = () => (
  <ErrorMessage name="email" component="div" className="error-message" />
);
export default ErrorComponent;
