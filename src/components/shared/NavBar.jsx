import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleSignIn from "./GoogleSignIn";

const NavBar = () => {
  const { currentUser, logOut } = useAuth();
  return (
    <nav className="bg-white shadow-md">
      <div className="container items-center flex justify-between py-6">
        <Link to="/">Hello</Link>

        <ul className="flex items-center gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link to="/">Home</Link>
          </li>

          <li className="py-2">
            <Link to="/recipes">Recipes</Link>
          </li>

          <li className="py-2">
            <Link to="/">About us</Link>
          </li>

          {currentUser ? (
            <>
              <li>
                <Link to={"/add-recipe"}>Add Recipe</Link>
              </li>
              <li>
                <p className="coin py-2 rounded-full px-4 flex  gap-x-2">
                  <img src="/gem.png" className="w-full" alt="" />{" "}
                  <span>{currentUser?.coins || 0}</span>
                </p>
              </li>
              <li>
                <img
                  src={currentUser?.photoURL}
                  className="size-10 rounded-full bg-green-500 "
                />
              </li>
              <li>
                <button onClick={logOut} className="btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <GoogleSignIn />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
