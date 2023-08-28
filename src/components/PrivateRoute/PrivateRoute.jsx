const { Navigate } = require('react-router-dom');

const ProtectedRoute = ({
  isLoggedIn,
  redirectPath = '/registration',
  children,
}) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children;
};
export default ProtectedRoute;
