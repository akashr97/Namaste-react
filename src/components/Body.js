import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const [listofRestaurants,setListofRestaurants] = useState(resList)

    // above line can be rewritten as , we are destructuring the useState object
    //const arr =  useState(resList)
    //const [listofRestaurants,setListofRestaurants] = arr
    //const [listofRestaurants] = arr[0]
    //const [setListofRestaurants] = arr[1]

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            const filteredList  = listofRestaurants.filter(res => res.info?.avgRating > 4.6)
            setListofRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
