import React from "react";
import AppStore from "../pics/AppStore.jpg";
import google from "../pics/GooglePlay.jpg";

const JobProvider = () => {
  return (
    <div className="w-full h-[42vh] md:h-[46vh] mx-auto mt-44 md:mt-20 flex justify-center items-center ">
      <div className="text-center font-Roboto_Regular text-md  w-full   p-5 md:p-0">
        <p className="text-[20px]">
          This Service is not available for web users.
        </p>
        <p className="text-[20px]">
          You can visit our mobile app to register yourself as a "Job Provider"
        </p>
        <img src="bg.svg" alt="" className="" />

        <div className="sm:w-4/6 md:w-4/6 xl:w-[50%] 2xl:w-[30%] mx-auto  md:flex justify-center items-center mt-5 md:mt-16">
          <div className="w-[100%] font-Roboto_Regular text-[#5E0AA0] text-lg md:text-[26.6px]">
            <h2 className="text-center">DOWNLOAD APP</h2>
            <div className="w-[50%] md:w-[400px] mx-auto flex justify-between h-auto mt-5 ">
              <img src={AppStore} alt="" className="w-28 md:w-44 " />
              <img src={google} alt="" cl assName="w-28 md:w-44" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobProvider;
