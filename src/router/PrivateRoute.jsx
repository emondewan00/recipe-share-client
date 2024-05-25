import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      if (loading) {
        return <div>Loading...</div>;
      }
      if (!currentUser && !loading) {
        navigate("/");
      }
    };

    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loading]);

  return children;
};

export default PrivateRoute;
