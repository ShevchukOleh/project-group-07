import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn, redirectPath = '/home', children }) => {
  if (!isLoggedIn) {
    return <Outlet /> || children;
  } else {
    return <Navigate to={redirectPath} replace={true} />;
  }
};

export default PublicRoute;
