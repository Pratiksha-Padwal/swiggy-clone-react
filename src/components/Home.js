import { useEffect, useState } from "react";
import RestaurantSlide from "./RestaurantSlide";
import RestaurantCard from "./RestaurantCard";
const Home = () => {
  const [listOfBestOffer, setListOfBestOffer] = useState([]);
  const [listOfTopRes, setListOfTopRes] = useState([]);
  const [listOfRestaurants, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    setListOfBestOffer(
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setListOfTopRes(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestraunts(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="w-[90%] text-center m-auto">
      <h1 className="text-start m-2">Best offers for you</h1>
      <div className="flex flex-wrap">
        {listOfBestOffer?.map((restaurant, index) => (
          <RestaurantSlide key={restaurant.id} resData={restaurant} />
        ))}
      </div>
      <h1 className="text-start m-2">Top Restaurants</h1>
      <div className="flex flex-wrap">
        {listOfTopRes?.map((topRes, index) => (
          <RestaurantCard key={topRes?.info?.id} resData={topRes} />
        ))}
      </div>
      <h1 className="text-start m-2">Restaurants with online food delivery</h1>
      <div className="flex flex-wrap">
        {listOfRestaurants?.map((resList, index) => (
          <RestaurantCard resData={resList} />
        ))}
      </div>
    </div>
  );
};
export default Home;
