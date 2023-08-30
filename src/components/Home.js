import { useEffect, useState } from "react";
import RestaurantSlide from "./RestaurantSlide";
import { Carousel } from "react-bootstrap";
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
      <h3 className="text-start my-5">Best offers for you</h3>
      <Carousel className="">
        {listOfBestOffer?.map((restaurant, index) => (
          <Carousel.Item>
            <RestaurantSlide key={restaurant.id} resData={restaurant} />
          </Carousel.Item>
        ))}
      </Carousel>
      <h3 className="text-start my-5">Top Restaurants</h3>
      <div className="flex flex-wrap">
        {listOfTopRes?.map((topRes, index) => (
          <RestaurantCard key={topRes?.info?.id} resData={topRes} />
        ))}
      </div>
      <h3 className="text-start my-5">Restaurants with online food delivery</h3>
      <div className="flex flex-wrap">
        {listOfRestaurants?.map((resList, index) => (
          <RestaurantCard key={resList?.info?.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};
export default Home;
