import { useEffect, useState } from "react";
import logo from "../assets/images/Logo_of_DEWA.png";
import { useLocation } from "react-router-dom";

export default function TopBar() {

  return (
    <>
     
        <div className=" fixed top-0 z-10 shadow-lg shadow-embrald-600/50 bg-white p-2 right-0 flex flex-row justify-between items-center h-14  w-[82%]">
          

          <div className=" bg-white sm:w-5/6 w-[79%] h-full px-4 justify-center md:text-3xl font-bold text-[#151D48] flex items-center">
            DEWA HQ ENERGY MANAGEMENT CENTER PORTAL
          </div>
        </div>
  
    </>
  );
}
