import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // above line can be rewritten as , we are destructuring the useState object
  //const arr =  useState(resList)
  //const [listofRestaurants,setListofRestaurants] = arr
  //const [listofRestaurants] = arr[0]
  //const [setListofRestaurants] = arr[1]

  useEffect(() => {
    console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91870&lng=74.85980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus =  useOnlineStatus()
if(onlineStatus === false){
  return <h1>Looks like you are offline!! Please check your internet connection</h1>
}



  console.log("body rendered");
  //Conditional Rendering
  // if(listofRestaurants.length === 0) {
  // return <Shimmer/>
  // }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="px-4 py-1 m-4 bg-green-100 rounded-lg "
            onClick={() => {
              console.log(searchText);
              const filteredList = listofRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("search list: " + filteredList);
              setFilteredRestaurants(filteredList); //updated with the filtered list
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center ">

        <button
          className="px-4 py-2 bg-gray-50 rounded-lg"
          onClick={() => {
            console.log("button clicked");
            const filteredList = listofRestaurants.filter(
              (res) => res.info?.avgRating > 4.6
            );
            console.log("filtered list: " + filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


