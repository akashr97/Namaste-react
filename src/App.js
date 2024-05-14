import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"


// not using key (not acceptable) <<< index as key <<< unique id(best practice)



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }, 
    {
      path:"/restaurant/:resid",
      element:<RestaurantMenu/>
    }

  ],
  errorElement: <Error/>
},
]); 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
