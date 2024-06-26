import { useContext } from "react";
import authContext from "../context";

const useAuth = () => {
  const { currentUser, signInWithGoogle, logOut, loading, setCurrentUser } =
    useContext(authContext);

  return {
    currentUser,
    signInWithGoogle,
    logOut,
    loading,
    setCurrentUser,
  };
};

export default useAuth;
