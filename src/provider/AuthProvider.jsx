import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import authContext from "../context";
import app from "../../firebase.config";
import postOrLoginUser from "../utils/postOrLoginUser";
import getLoggedUser from "../utils/getLoggedUser";
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // login with google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const data = await signInWithPopup(auth, googleProvider);
      const { email, displayName, photoURL } = data.user || {};

      if (email) {
        const user = await postOrLoginUser({ email, displayName, photoURL });
        if (user?.token) {
          setCurrentUser(user?.user);
          setLoading(false);
          localStorage.setItem("token", user?.token);
          return;
        }
      }
      setCurrentUser(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // logout
  const logOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    signOut(auth);
  };

  // get current user
  useEffect(() => {
    setLoading(true);
    const user = async () => {
      const data = await getLoggedUser();
      if (data?.email) {
        setCurrentUser(data);
        setLoading(false);
        return;
      }
      setLoading(false);
      setCurrentUser(null);
      localStorage.removeItem("token");
    };
    user();
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    logOut,
    loading,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
