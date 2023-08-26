import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, areaName, avgRating, cloudinaryImageId, cuisines } =
    props.resData.info;
  return (
    <div className="w-56 h-100 bg-gray-200 m-2 cursor-pointer rounded-lg">
      <img
        className="w-56 h-52 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="img"
      />

      <h1>{name}</h1>
      <h1>{avgRating}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;
