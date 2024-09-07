import React, { useContext, useState } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { AuthContext } from "../Contexts/AuthProvider";
import Spinner from "../Pages/Shared/Spinner/Spinner";
import "./Main.css";
import Sidebar from "../Components/Sidebar/Sidebar";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const [cart,setCart] = useState([]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="main">
      <Navbar cart={cart} setCart={setCart}></Navbar>

      <div className="outlet ">
        <div className=" flex mt-5 ms-20 ">
          <div className="w-1/6">
            
              <Sidebar></Sidebar>
          </div>
          <div className="w-5/6 pb-10 min-h-[100vh]">
            <Outlet  className=" w-100 md:w-5/6"></Outlet>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
