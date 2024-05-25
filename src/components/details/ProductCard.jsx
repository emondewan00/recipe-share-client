import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="bg-white shadow-md ">
      <div className="overflow-hidden relative">
        <img
          className="hover:scale-125 transition-all duration-200"
          src="http://source.unsplash.com/random/260x170?recipe"
          alt="Recipe image "
        />
        <div className="absolute top-0 left-0 flex  items-center space-x-1 w-full p-2 bg-gradient-to-t from-transparent to-black/65 text-sky-500">
          <img className=" w-5 " src="/thumbs-up.svg" alt="like svg" />
          <span> : 100</span>
        </div>
      </div>
      <div className="p-4">
        <span className="bg-[#FFFFAA] px-1 text-sm italic ">Category</span>
        <Link
          to="/"
          className="font-semibold text-lg block cursor-pointer truncate"
        >
          Product Name hello Product Name hello Product Name hello
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
