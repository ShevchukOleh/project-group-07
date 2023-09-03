import './error.css';
import { ErrorMessage } from 'formik';
const ErrorComponent = ({ name }) => (
  <ErrorMessage name={name} component="div" className="error-message" />
);
const ErrorIncorrectLogin = ({ loginError }) => {
  return (
    <div component="div" className="error-message">
      {loginError.objError}
    </div>
  );
};
export { ErrorComponent, ErrorIncorrectLogin };
