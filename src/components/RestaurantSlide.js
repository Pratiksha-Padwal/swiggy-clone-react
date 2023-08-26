import { CDN_URL } from "../utils/constants";
const RestaurantSlide = (props) => {
  const imageId = props.resData.imageId;
  return (
    <div className="w-56 h-100 bg-gray-200 rounded-sm m-2 cursor-pointer">
      <img className="w-56 h-52 rounded-lg" src={CDN_URL + imageId} alt="pp" />
    </div>
  );
};

export default RestaurantSlide;
