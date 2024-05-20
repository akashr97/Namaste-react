import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);

  // fetchdata

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();

    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
