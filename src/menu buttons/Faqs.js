import React from "react";

import FooterSquare from "./FooterSquare";

const Setting = () => {
  return (
    <div
      className="w-full h-auto  "
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      <div className="w-full">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-[80%] mx-auto mb-10 flex justify-center items-center bg-white mt-[200px] py-10 shadow-lg">
        <section className="w-[78%] h-auto  bg-white mt-10  grid xl:grid-cols-3 md:grid-cols-2 gap-4 ">
          {/* --------------Account Setting------------- */}
          <div className=" border-[1px] border-b-gray-600">
            <img src="loginicon.jpg" alt="" className="w-16  mx-auto mt-10" />
            <div className="text-center">
              <h1 className="mt-5 text-3xl font-Lora text-[#5e0aa0]">
                My Account
              </h1>
              <p className="w-24 border-[1px] border-gray-300 mt-2 mx-auto"></p>
              <p className="mt-2 text-2xl md:px-10 py-5">
                Engage your contacts using the best mobile-friendly emial design
                tools
              </p>
            </div>
          </div>

          {/* -----------------Email Compaigns-------------- */}
          <div className="border-[1px] border-b-gray-600">
            <img src="loginicon.jpg" alt="" className="w-16  mx-auto mt-10" />
            <div className="text-center">
              <h1 className="mt-5 text-3xl font-Lora text-[#5e0aa0] ">
                Email Compaigns
              </h1>
              <p className="w-24 border-[1px] border-gray-300 mt-2 mx-auto"></p>
              <p className="mt-2 text-2xl md:px-10">
                Engage your contacts using the best mobile-friendly emial design
                tools
              </p>
            </div>
          </div>
          {/* ---------------------SMS Compaigns------------ */}
          <div className="border-[1px] border-b-gray-600">
            <img src="loginicon.jpg" alt="" className="w-16  mx-auto mt-10" />
            <div className="text-center">
              <h1 className="mt-5 text-3xl font-Lora text-[#5e0aa0]">
                Email Compaigns
              </h1>
              <p className="w-24 border-[1px] border-gray-300 mt-2 mx-auto"></p>
              <p className="mt-2 text-2xl md:px-10">
                Engage your contacts using the best mobile-friendly emial design
                tools
              </p>
            </div>
          </div>
          {/* -------------------Trnasactional Emails----------------- */}
          <div className="border-[1px] border-b-gray-600">
            <img src="loginicon.jpg" alt="" className="w-16  mx-auto mt-10" />
            <div className="text-center">
              <h1 className="mt-5 text-3xl font-Lora text-[#5e0aa0]">
                Email Compaigns
              </h1>
              <p className="w-24 border-[1px] border-gray-300 mt-2 mx-auto"></p>
              <p className="mt-2 text-2xl md:px-10 py-5">
                Engage your contacts using the best mobile-friendly emial design
                tools
              </p>
            </div>
          </div>
          {/* ---------------------Contacts-------------- */}
          <div className="border-[1px] border-b-gray-600">
            <img src="loginicon.jpg" alt="" className="w-16  mx-auto mt-10" />
            <div className="text-center">
              <h1 className="mt-5 text-3xl font-Lora text-[#5e0aa0]">
                Email Compaigns
              </h1>
              <p className="w-24 border-[1px] border-gray-300 mt-2 mx-auto"></p>
              <p className="mt-2 text-2xl md:px-10 py-5">
                Engage your contacts using the best mobile-friendly emial design
                tools
              </p>
            </div>
          </div>
          {/* -----------------------Auomation------------- */}
          <div className="border-[1px] border-b-gray-600">
            <img src="loginicon.jpg" alt="" className="w-16  mx-auto mt-10" />
            <div className="text-center">
              <h1 className="mt-5 text-3xl font-Lora text-[#5e0aa0]">
                Email Compaigns
              </h1>
              <p className="w-24 border-[1px] border-gray-300 mt-2 mx-auto"></p>
              <p className="mt-2 text-2xl md:px-10 py-5">
                Engage your contacts using the best mobile-friendly emial design
                tools
              </p>
            </div>
          </div>
        </section>
      </div>
      <FooterSquare />
    </div>
  );
};

export default Setting;
