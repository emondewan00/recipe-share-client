import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipe }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { creatorEmail, _id } = recipe || {};
  const onClick = () => {
    if (!currentUser) {
      return;
    } else if (creatorEmail === currentUser?.email) {
      navigate(`/recipeDetails/${_id}`);
      return;
    } else if (currentUser?.coins < 10) {
      return;
    } else {
      confirm("Are you sure you want to buy this recipe?");
      navigate(`/recipeDetails/${_id}`);
    }
  };
  return (
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="flex flex-col md:flex-row">
        <img
          className=" object-cover "
          src="https://placehold.co/250x210"
          alt="Chocolate Earl Grey Pots de Creme "
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold ">
            Chocolate Earl Grey Pots de Creme Recipe
          </h2>
          <p className="text-sm text-zinc-600">
            <span className="font-bold">Category:</span>
            <span className="text-green-600 ml-1">Chocolate</span>
            <span className="ml-4 font-bold">Country:</span>
            <span className="text-green-600 ml-1">American</span>
          </p>
          <div className="flex items-center mt-2">
            <span className=" text-zinc-600 font-semibold ">Total Sells:</span>
            <span className=" text-blue-700 ml-1">44</span>
            <span className=" text-zinc-600 font-semibold ml-4">
              Total Watch:
            </span>
            <span className=" text-blue-700 ml-1">44</span>
          </div>
          <p className="mt-1">
            <span className="text-zinc-600 font-semibold">Creator Name:</span>
            <span> {currentUser?.displayName}</span>
          </p>
          <p className="mt-2 text-zinc-700 text-sm">
            2 cups cream 120 grams dark chocolate, chopped 2 bags of earl grey
            tea 6 egg yolks 3 Tablespoons of sugar 1/2 cup whipping cream 2
            Tablespoons powdered sugar 2-3 Teaspoons cointreau
          </p>
          <div className="flex gap-x-4">
            <button className="mt-4 bg-gray-100  w-28 py-2 gap-x-2 rounded   flex justify-center items-center border-blue-300 border text-blue-600 hover:scale-90 duration-150">
              <svg
                className="w-5 "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" />
              </svg>
              <span className="font-semibold text-gray-700">Like</span>
            </button>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              View The Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
