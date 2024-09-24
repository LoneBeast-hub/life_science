import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";  // Import Firebase Auth

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "lTMleO25eHdQMTWvrZKBxsOgzBX2") {
        setIsAuthorized(true);
      } else {
        navigate("/admin_auth");  // Redirect unauthorized users
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div className="w-full h-[100vh] flex items-center justify-center"><p className="text-3xl text-center">Loading...</p></div>;  // Show a loading indicator while checking authorization
  }

  return isAuthorized ? children : null;
};

export default ProtectedRoute;