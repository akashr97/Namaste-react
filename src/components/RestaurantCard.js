import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="m-4 p-4 bg-white rounded-lg shadow-md hover:bg-gray-200" >
      <img
        className="rounded-t-lg h-40 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 mb-2">{cuisines.join(", ")}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">{avgRating}</span>
          <span className="text-sm text-gray-600">{costForTwo}</span>
        </div>
        <p className="text-gray-600">{resData.info.sla.deliveryTime} mins delivery time</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
