import { IMAGE_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import {
  faStar,
  faStopwatch,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const [res, isLoaded] = useRestaurant();

  const dispatch = useDispatch();

  const handleAdditems = (item) => {
    dispatch(addItem(item));
  };
  if (!res) return null;

  return !isLoaded ? (
    <MenuShimmer />
  ) : (
    <>
      {/* #3C4852  primary - #174d44*/}
      <div className="bg-[#3C4852] text-white py-8 mb-5">
        <div className="m-auto w-4/5 flex justify-evenly items-center gap-5">
          <div>
            <img
              className="w-96"
              src={IMAGE_CDN_URL + res?.cloudinaryImageId}
            />
          </div>

          <div className="w-1/3">
            <div className="text-3xl pb-2">{res?.name}</div>
            <div className="text-xl pb-2">{res?.cuisines.join(",")}</div>
            <div className="pb-2">{res?.locality}</div>
            <div className="flex gap-2 ">
              <div className="border-r-2 p-2">
                <FontAwesomeIcon icon={faStar} /> {res?.avgRatingString}
              </div>
              <div className="border-r-2 p-2">
                {" "}
                <FontAwesomeIcon icon={faStopwatch} /> {res?.sla?.slaString}
              </div>
              <div className=" p-2">
                <FontAwesomeIcon icon={faMoneyBill} /> {res?.costForTwoMsg}
              </div>
            </div>
          </div>

          <div className="border-2 border-white p-5 text-xl relative">
            <p className="absolute top-[-24px] p-2 translate-x-[-10px] bg-[#3C4852]">
              Offers :{" "}
            </p>
            <p>{res?.aggregatedDiscountInfo?.descriptionList[0].meta} </p>
            <p>{res?.aggregatedDiscountInfo?.descriptionList[1].meta} </p>
          </div>
        </div>
      </div>
      <nav className="w-3/5 m-auto text-xl ">
        <button className="border-2 border-black p-2 mb-5">
          <Link to="/">Home</Link>
        </button>
      </nav>
      {Object.values(res?.menu?.items).map((item) => {
        return (
          <div className="m-auto w-3/5" key={item.id}>
            {item?.cloudinaryImageId === "" ||
            !item?.cloudinaryImageId ? null : (
              <div className="flex gap-5 justify-between p-5 mb-5 shadow-md items-center">
                <div className="w-3/4">
                  <p className="text-xl font-bold pb-2">{item?.name}</p>
                  <p className="font-bold pb-2">
                    ₹ {Math.floor(item?.price) / 100}
                  </p>
                  <p className="pb-2">{item?.description}</p>
                  <button
                    onClick={() => handleAdditems(item)}
                    className="border-2 text-white border-white bg-gray-900 px-3 py-2 "
                  >
                    + Add to cart
                  </button>
                </div>
                <div className="">
                  <img
                    className="w-52"
                    src={IMAGE_CDN_URL + item?.cloudinaryImageId}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
