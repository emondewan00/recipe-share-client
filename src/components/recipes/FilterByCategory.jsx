const FilterByCategory = () => {
  return (
    <div className="max-w-72 w-full bg-white h-fit  p-4 shadow">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="flex justify-between ">
        <div className="space-y-2 ">
          <div className="flex items-center">
            <label
              htmlFor={"label.name"}
              className="text-gray-600 cursor-pointer "
            >
              <input
                type="checkbox"
                name={"label.name"}
                id={"label.name"}
                className="text-primary focus:ring-0 rounded-sm cursor-pointer mr-3"
              />
              hello world
            </label>
          </div>
          <div className="flex items-center">
            <label
              htmlFor={"label.name"}
              className="text-gray-600 cursor-pointer "
            >
              <input
                type="checkbox"
                name={"label.name"}
                id={"label.name"}
                className="text-primary focus:ring-0 rounded-sm cursor-pointer mr-3"
              />
              hello world
            </label>
          </div>
        </div>
        {/* <div className="flex flex-col justify-evenly">hello</div> */}
      </div>
    </div>
  );
};

export default FilterByCategory;
