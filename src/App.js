import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
// import Grocery from "./components/Grocery";

// not using key (not acceptable) <<< index as key <<< unique id(best practice)


// chunking
// dynamic loading
// code splitting
// on demand loading
// dynamic import
// lazy loading


const Grocery =  lazy(()=>
import("./components/Grocery")
)

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
    },
    {
      path:'/grocery',
      element:(<Suspense fallback={<h1>Loading...</h1>}>
        <Grocery/>
        </Suspense>)
    }

  ],
  errorElement: <Error/>
},
]); 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
