// components/ProtectedRoute.tsx

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

interface RootState {
  user: Record<string, any>; // Update this to match your Redux user state shape
}

interface ProtectedRouteProps {
  children: React.ReactNode;
}



const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children}) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user); // Replace with your Redux selector

  useEffect(() => {
    // Check if the user is authenticated
    if (!user) {
      // Redirect to the login page if not authenticated
      console.log("user not authenticated go to login")
      router.push('/login'); // Replace with your login page URL
    }
  }, [user, router]);

  // Render children only if the user is authenticated
  return user ? <>{children}</> : <>please login</>;
};

export default ProtectedRoute;
