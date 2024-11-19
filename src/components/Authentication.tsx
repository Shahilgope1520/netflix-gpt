import { Navigate, Outlet, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "../utils/usersSlice";

const Authentication = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        dispatch(logIn({ email, displayName }));
        setIsAuthenticated(true);
      } else {
        dispatch(logOut());
        setIsAuthenticated(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  if (isAuthenticated === null) {
    // Loading state
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    // Redirect authenticated users away from "/auth"
    if (location.pathname === "/auth") {
      return <Navigate to="/browse" replace />;
    }
    return <Outlet />;
  } else {
    // Redirect unauthenticated users to "/auth"
    if (location.pathname !== "/auth") {
      return <Navigate to="/auth" replace />;
    }
    return <Outlet />;
  }
};

export default Authentication;
