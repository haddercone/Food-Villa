import { MENU_IMAGE_ITEM_URL } from "../config";
import { Link } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantProfile from "./RestaurantProfile";

const RestaurantMenu = () => {
  const [res, isLoaded] = useRestaurant();
  const restaurantProfileData = res[0]?.card?.card?.info;
  const menuData =
    res[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ??
    res[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const dispatch = useDispatch();

  const handleAdditems = (item) => {
    dispatch(addItem(item));
  };

  // console.log(menuData);
  return !isLoaded ? (
    <MenuShimmer />
  ) : (
    <>
      <RestaurantProfile {...restaurantProfileData} />
      {menuData &&
        menuData.map((menu) => {
          const menuCard = menu?.card?.card;
          const title = menu.card?.card?.title;
          const items = menu?.card?.card?.itemCards;

          return (
            <div className="w-3/5 m-auto text-xl" key={title}>
              {!menuCard?.title ? null : (
                <div className=" font-bold my-4 px-2 py-4 border-2 border-gray-400">
                  {title}
                </div>
              )}

              {!items
                ? null
                : items.map((item) => {
                    const { imageId, name, id, price } = item?.card?.info;
                    return imageId === "" || !imageId ? null : (
                      <div
                        key={id}
                        className="flex gap-5  flex-col-reverse md:flex-row justify-between p-5 mb-5 shadow-md items-center "
                      >
                        <div className="w-3/4">
                          <p className="text-xl font-bold pb-2">{name}</p>
                          <p className="font-bold pb-2">
                            ₹ {Math.floor(price) / 100}
                          </p>
                          <p className="pb-2">
                            {item?.card?.info?.description}
                          </p>
                          <button
                            onClick={() => handleAdditems(item)}
                            className="border-2 text-white border-white bg-gray-900 px-3 py-2 "
                          >
                            + Add to cart
                          </button>
                        </div>
                        <img
                          className="md:w-52 "
                          src={MENU_IMAGE_ITEM_URL + item?.card.info.imageId}
                        />
                      </div>
                    );
                  })}
            </div>
          );
        })}
    </>
  );
};

export default RestaurantMenu;
