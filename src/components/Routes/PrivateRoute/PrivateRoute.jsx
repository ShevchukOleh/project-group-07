const { Navigate } = require('react-router-dom');

const PrivateRoute = ({
  isLoggedIn,
  redirectPath = '/registration',
  children,
}) => {
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={redirectPath} replace={true} />;
};
export default PrivateRoute;
