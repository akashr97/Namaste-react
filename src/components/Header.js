import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const [btnNameReact,setBtnNameReact] = useState("Login")
const onlineStatus =  useOnlineStatus()

console.log("Header rendered");

// if no dependency array => useEffect is called on every render
// if empty dependency array => useEffect is called only once on the initial render
// if dependency array is [btnNameReact ] => useEffect is called everytime when the btnNamReact changes
useEffect(() => {
console.log("useEffect called");
},[btnNameReact])

    return (
      <div className="flex justify-between shadow-lg bg-pink-100  sm:bg-yellow-100">
        <div className="logo-container">
          <img
            className="w-20"
            src={LOGO_URL}
                  />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4" >Online Status:{onlineStatus ? "✅":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button onClick={()=> btnNameReact === 'Login' ? setBtnNameReact('LogOut'):setBtnNameReact('Login')} className="login">{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;