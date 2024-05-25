import { useContext } from "react";
import authContext from "../context";

const useAuth = () => {
  const { currentUser, signInWithGoogle, logOut, loading } =
    useContext(authContext);

  return {
    currentUser,
    signInWithGoogle,
    logOut,
    loading,
  };
};

export default useAuth;
