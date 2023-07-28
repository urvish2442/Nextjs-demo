import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  const publicRoutes = ['/user/login', '/demo/stepper' , '/demo/moviedb'];

  useEffect(() => {
    if (!isAuthenticated && !publicRoutes.includes(router.pathname)) {
      router.push('/user/login');
    }
    if (isAuthenticated && router.pathname === '/user/login') {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default RequireAuth;