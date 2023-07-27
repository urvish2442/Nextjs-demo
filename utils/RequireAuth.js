import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();  

  useEffect(() => {
    if (isAuthenticated && router.pathname === '/user/login') {
      router.push('/'); 
    }
    if (!isAuthenticated && router.pathname !== '/user/login') {
      router.push('/user/login'); 
    }
  }, [isAuthenticated,router]);

  return <>{children}</>;
};

export default RequireAuth;