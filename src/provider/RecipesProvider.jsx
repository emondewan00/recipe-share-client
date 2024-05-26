import { useEffect, useState } from "react";
import { RecipeContext } from "../context";

// eslint-disable-next-line react/prop-types
const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState(1);
  useEffect(() => {
    const server = import.meta.env.VITE_SERVER;
    const spinnerRef = document.querySelector("#spinner");
    const controller = new AbortController();
    let page = 0;
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${server}recipes?page=${page}`, {
          signal: controller.signal,
        });
        const data = await response.json();
        if (data.status === "success") {
          setRecipes((prev) => [...prev, ...data.recipes]);
          if (data.morePages) {
            setHasMore(true);
          } else {
            setHasMore(false);
          }
          setLoading(false);
        } else {
          setHasMore(false);
          setError([data]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const onIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        page++;
        fetchRecipes();
      }
    };

    const observer = new IntersectionObserver(onIntersection);
    if (observer && spinnerRef) {
      observer.observe(spinnerRef);
    }
    // Clean up function
    return () => {
      if (observer) observer.disconnect();
      controller.abort();
    };
  }, []);
  const values = {
    recipes,
    loading,
    error,
    hasMore,
  };
  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
};

export default RecipesProvider;
