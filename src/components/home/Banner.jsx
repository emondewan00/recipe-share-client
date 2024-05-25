const Banner = () => {
  return (
    <section className="container">
      <div className="py-4  rounded-b-lg p-4 md:p-12 min-h-[500px] bg-cover grid place-items-center grid-cols-12"
      style={{ backgroundImage: 'url(./images/cover.png)' }}
      >
        <div className="col-span-12 md:col-span-6">
          <h1 className="font-bold text-3xl md:text-5xl text-white">
            Choose from thousands of recipes
          </h1>
          <p className="text-white my-4">
            Appropriately integrate technically sound value with scalable
            infomediaries negotiate sustainable strategic theme areas
          </p>
          <div>
            <button className="btn ">View All Recipes</button>
            <button className="border bg-white px-3 py-2 rounded  font-semibold ml-2 ">Add Recipe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
