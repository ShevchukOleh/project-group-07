import './error.css';
import { ErrorMessage } from 'formik';
const ErrorComponent = ({ name }) => (
  <ErrorMessage name={name} component="div" className="error-message" />
);
export default ErrorComponent;
