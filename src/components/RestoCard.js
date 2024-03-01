import { CDN_URL } from "../utils/constants";

const ResCard = (restaurantData) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restaurantData.resData?.card?.card?.info;

  return (
    <div className="resto-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="resto-card-img"
        className="resto-card-img"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(" ,")}</p>
      <p>{avgRating} star</p>
      <p>{costForTwo}</p>
    </div>
  );
};
export default ResCard;
