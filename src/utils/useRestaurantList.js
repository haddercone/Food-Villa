import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_CDN_URL } from "../config";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [loading, setIsLoading] = useState(true)

  async function getRestaurants() {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_CDN_URL);
      const json = await data.json();
      setRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      setActualData(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return [restaurants, actualData, setRestaurants, loading];
};

export default useRestaurantList; 
