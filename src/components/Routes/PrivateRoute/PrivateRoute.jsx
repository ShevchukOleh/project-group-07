const { Navigate, Outlet } = require('react-router-dom');

const PrivateRoute = ({
  isLoggedIn,
  redirectPath = '/auth/login',
  children,
}) => {
  if (isLoggedIn) {
    return children || <Outlet />;
  }
  return <Navigate to={redirectPath} replace={true} />;
};
export default PrivateRoute;
