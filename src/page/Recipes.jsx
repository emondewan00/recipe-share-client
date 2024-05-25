import RecipeCard from "../components/recipes/RecipeCard";

const AllRecipesPage = () => {
  return (
    <section className="my-10">
      <div className="space-y-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
};

export default AllRecipesPage;
