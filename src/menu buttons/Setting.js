import React from "react";
import FooterSquare from "./FooterSquare";
import ToggleSwitch from "./ToggleSwitch";

const Setting = () => {
  return (
    <div
      className="w-full h-auto  "
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      <div className="w-full">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-[100%] mx-auto flex justify-center items-center mt-[200px] py-10">
        <section className="w-[80%]  h-[auto]  mt-10">
          <div className="w-[100%] md:w-[35%] p-3 md:p-5 bg-white flex justify-between shadow-md shadow-gray-300">
            <div className="font-Roboto ">
              <p className="text-[21px]">Notifications</p>
              <p className="text-[18px]">Notification alert is on</p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="w-full md:w-[35%] py-5 px-5  bg-white mt-8 shadow-md shadow-gray-300 ">
            <div className="font-Roboto">
              <p className="text-[21px]">Language</p>
              <p className="text-[18px]">Active language is English</p>
            </div>
          </div>
        </section>
      </div>
      <FooterSquare />
    </div>
  );
};

export default Setting;
