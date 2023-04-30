import React from "react";

const Main = () => {
  return (
    <div className="md:w-[88%] lg:w-full h-[100%] md:h-[100%] xl:h-[155vh] flex justify-center items-center mx-auto  relative 2xl:h-[100%] ">
      <div className="w-full h-[60vh] md:h-[75vh] lf:h-auti mt-32 md:mt-64 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 xl:mt-[-18vh] xl:gap-0 2xl:w-[80%] ">
        {/* --------------first grid----------------- */}

        <div className="w-full md:w-[100%] lg:h-3/6 md:mx-auto md:p-4 h-full lg:mt-20 xl:w-[90%] 2xl:w-[100%] 2xl:ml-auto  2xl:mt-[15%]">
          <p className="w-full h-auto md:h-auto xl:text-7xl lg:text-6xl lg:text-center lg:h-auto md:text-5xl text-4xl md:text-[70px] text-[#ffca18] text-center 2xl:text-8xl font-Roboto_Regular">
            KAAM BAN JAY
          </p>
          <p className="w-full md:text-center text-5xl lg:h-auto  lg:text-8xl lg:text-center h-auto  md:h-auto mt-5 text-white  md:text-[100px] text-center 2xl:text-8xl ">
            کام بن جائے
          </p>
        </div>

        {/*------------- Second grid ---------------*/}

        <div className="w-full h-full  md:-mt-8 lg-mt-0 lg:mt-0 relative ">
          <img
            src="computer.png"
            alt=""
            className="w-full md:w-[80%] xs:w-[70%] md:ml-28 lg:ml-0 lg:w-full lg:h-[45vh] mx-auto lg:mt-28 2xl:w-[70%] xl:mx-auto 2xl:mx-auto xl:w-[80%]"
          />
          <img
            src="mobile.png"
            alt=""
            className="absolute top-28 w-[35%] lg:w-[40%] xs:bottom-[-10vh] lg:bottom-10 xs:ml-5  left-[-8vw] md:bottom-[-10vh] md:left-[-7vw] lg:left-[-12vw] lg:top-[38vh] 2xl:top-[30vh] 2xl:left-[-11%] xl:left-[-16%]"
          />
          <img
            src="maleicon.jpg"
            alt=""
            className=" right-[20%] md:bottom-[-10vh] md:w-32 md:right-20 xs:bottom-[10%] xs:w-20 absolute w-16 lg:w-28 lg:h-28 lg:right-12 lg:bottom-[14%] 2xl:right-[20%] 2xl:bottom-[2%] 2xl:w-48 2xl:h-48 xl:right-[16%] xl:bottom-[14%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
