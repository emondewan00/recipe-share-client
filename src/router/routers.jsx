import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../page/Home";
import PrivateRoute from "./PrivateRoute";
import AddRecipe from "../page/AddRecipe";
import DetailsPage from "../page/Details";
import AllRecipesPage from "../page/Recipes";
import RecipesProvider from "../provider/RecipesProvider";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>please try again </div>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>please try again </div>,
      },
      {
        path: "/recipeDetails/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes",
        element: (
          <RecipesProvider>
            <AllRecipesPage />
          </RecipesProvider>
        ),
      },
    ],
  },
]);

export default routers;
