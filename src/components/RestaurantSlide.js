import { CDN_URL } from "../utils/constants";
import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";

const RestaurantSlide = (props) => {
  const imageId = props.resData.imageId;

  return (
    // <div className="bg-gray-200 rounded-sm m-2 cursor-pointer d-block w-96">
    <img className=" rounded-lg" src={CDN_URL + imageId} alt="pp" />
    // </div>
  );
};

export default RestaurantSlide;
