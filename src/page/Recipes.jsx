import { useContext } from "react";
import FilterByCategory from "../components/recipes/FilterByCategory";
import RecipeCard from "../components/recipes/RecipeCard";
import { RecipeContext } from "../context";

const AllRecipesPage = () => {
  const { recipes, hasMore } = useContext(RecipeContext);
  return (
    <section className="my-10 flex gap-x-4">
      <FilterByCategory />
      <div className="space-y-4">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
        {hasMore && <div id="spinner"> Loading...</div>}
      </div>
    </section>
  );
};

export default AllRecipesPage;
