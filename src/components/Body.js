import RestrauntCard from "./RestrauntCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import Search from "./Search";
import Shimmer from "./Shimmer";


const Body = () => {
  const [restaurants, actualData,  setRestaurants, loading] = useRestaurantList();
  return (
    <>

      <Search
        restaurants={restaurants}
        actualData={actualData}
        setRestaurants={setRestaurants}
      />

      {loading ? (
        <Shimmer />
      ) : (
        <div>
          <div className="m-0 w-full md:m-auto md:w-4/5 flex flex-wrap gap-6 justify-evenly">
            {restaurants.length === 0 ? (
              <p className="text-center w-full text-3xl my-5">
                No restaurant found...
              </p>
            ) : (
              restaurants.map((restaurant) => {
                return (
                  <Link
                    key={restaurant.data.id}
                    to={"/restaurant/" + restaurant.data.id}
                  >
                    <div className="border-transparent h-full hover:scale-110 transition duration-0 hover:duration-450">
                      <RestrauntCard {...restaurant.data} />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
