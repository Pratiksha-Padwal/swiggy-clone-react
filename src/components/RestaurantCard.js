import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, areaName, avgRating, cloudinaryImageId, cuisines } =
    props.resData.info;
  const cuisineSel = cuisines.join(",").split(",").slice(0, 3).join(",");
  return (
    <div className="w-56 h-100 bg-gray-200 m-2 cursor-pointer rounded-lg">
      <img
        className="w-56 h-52 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="img"
      />
      <div className="text-start p-2">
        <h6>{name}</h6>
        <h6>{avgRating}</h6>
        <div>{cuisineSel}</div>
        <div>{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
