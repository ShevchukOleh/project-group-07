import { Navigate } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn, redirectPath = '/dashboard', children }) => {
  if (!isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectPath} replace={true} />;
  }
};
export default PublicRoute;
