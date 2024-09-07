import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-[250px] bg-[black] text-[white] w-full">
      <footer className="footer flex flex-col p-10  text-base-content rounded">
        <div className="flex justify-around w-full ">
          <div className="w-2/5">
              <h2 className="text-center text-2xl font-bold"> Furni<span className="text-[#1E99F5]">Flex</span> </h2>
          </div>
          <div className="w-1/5 ">
              <h3 className="font-semibold text-white mb-2">About us</h3>
              <ul className=" text-[#81859F] ">
                <li>Master plan</li>
                <li>Jobs</li>
                <li>Invest</li>
                <li>Pressroom</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
          </div>
          <div className="w-1/5 ">
              <h3 className="font-semibold text-white mb-2">Explore EEVE</h3>
              <ul className=" text-[#81859F] ">
                <li>Unlock my Robot Power</li>
                <li>Starlight</li>
                <li>Robot Platform</li>
                <li>EEVE Roadmap</li>
               
              </ul>
          </div>

          <div className="w-1/5 ">
              <h3 className="font-semibold text-white mb-2">Community & Support</h3>
              <ul className=" text-[#81859F] ">
                <li>Willox X Community</li>
                <li>Developer & Maker Access</li>
                <li>Special Cases</li>
              
              </ul>
          </div>
        </div>
        
        <div className=" w-full flex justify-center" >
          <p>Copyright © {new Date().getFullYear()} - All right reserved </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
