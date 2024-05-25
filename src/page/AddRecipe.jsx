import addRecipe from "../utils/addRecipe";

const AddRecipe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(e);
  };

  return (
    <section className="bg-white p-8 shadow-lg max-w-4xl mx-auto my-10">
      <h1 className="text-2xl font-bold uppercase">Create Recipe</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        {/* Recipe Name and youtube video code fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Recipe Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-100 p-3 border-none focus:outline-indigo-300"
              placeholder="Recipe Name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="videoCode">Embedded youtube video code</label>
            <input
              type="text"
              id="videoCode"
              name="videoCode"
              required
              className="w-full bg-gray-100 p-3 border-none focus:outline-indigo-300"
              placeholder="Embedded youtube video code"
            />
          </div>
        </div>
        {/* country and category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="country">Country </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className="w-full bg-gray-100 p-3 border-none focus:outline-indigo-300"
              placeholder="Country"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              required
              className="w-full bg-gray-100 p-3 border-none focus:outline-indigo-300"
            >
              <option value="category 1">Category</option>
              <option value="category 2">Category</option>
              <option value="category 3">Category</option>
              <option value="category 4">Category</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="image">Recipe Image </label>
          <input
            type="file"
            id="image"
            name="image"
            required
            className="w-full bg-gray-100 p-3 border-none focus:outline-indigo-300"
            placeholder="Image"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="details">Recipe Details </label>
          <textarea
            id="details"
            name="details"
            required
            className="w-full bg-gray-100 p-3 border-none focus:outline-indigo-300"
            placeholder="Recipe Details"
            rows={5}
          />
        </div>
        <div className="w-full text-center">
          <button className="btn font-semibold" type="submit">
            Create Recipe
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddRecipe;
