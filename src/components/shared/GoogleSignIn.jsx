import useAuth from "../../hooks/useAuth";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useAuth();

  const clickHandler = () => {
    signInWithGoogle()
  };

  return (
    <button onClick={clickHandler} className="btn">
      Login
    </button>
  );
};

export default GoogleSignIn;
