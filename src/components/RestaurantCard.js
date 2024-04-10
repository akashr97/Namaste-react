import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "lightGray",
  };

const RestaurantCard = (props) => {
    // const {resName, cuisines} = props;
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL
           +
            cloudinaryImageId
          }
        />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime}mins</h4>
      </div>
    );
  };

export default RestaurantCard  