import React from "react";
import { TbChevronRight } from "react-icons/tb";

const Aboutus = () => {
  return (
    <section className="aboutusbg ">
      {/* ----------How it Works------------ */}
      <div className=" w-[350px] mt-[-100vh] md:mt-[10vh] mx-auto flex justify-between items-center xl:mt-10  lg:mt-[-98vh]">
        <p className="text-4xl w-[90%] md:mt-10 text-center h-auto text-white ">
          HOW IT WORKS
        </p>
        <span className="xs:w-2/6 w-[10%] md:mt-10 md:w-auto xs:hidden md:block flex justify-center items-center ">
          <TbChevronRight size={40} className="hidden md:block  text-white " />
        </span>
      </div>
      <div className="w-[95%] lg:w-full h-32 mt-6 md:mt-10 flex justify-between ">
        <div className="hidden lg:block w-[35%] h-full"></div>
        <div className=" w-full md:w-[800px] md:ml-auto lg:w-[1200px] xl:w-[1000px] lg:mr-10 md:mx-auto h-full md:flex md:justify-between md:items-center grid grid-cols-1 text-center 2xl:mr-36 ">
          <div className="w-full md:w-16 ">
            <img
              src="services.svg"
              alt=""
              className="mx-auto  py-2 md:py-0  "
            />
          </div>
          <div>
            <p className="text-white text-lg md:text-[20px] 2xl:text-2xl py-2 md:py-0 ">
              SELECT CATAGORY
            </p>
          </div>
          <div>
            <img src="quality-thumb.svg" alt="" className="mx-auto " />
          </div>
          <div>
            <p className="text-white text-2xl md:text-[20px] 2xl:text-2xl py-2 md:py-0 ">
              VERIFY YOUR WORK
            </p>
          </div>
          <div className="md:w-16 2xl:w-24">
            <img
              src="finance-icon.svg"
              alt=""
              className="mx-auto py-2 md:py-0 "
            />
          </div>
          <div>
            <p className="text-white text-2xl md:text-[20px 2xl:text-2xl py-2 md:py-0 ">
              PAY AMOUNT
            </p>
          </div>
        </div>
      </div>
      {/* -------- adding video -------- */}
      <div className="w-full mt-[35vh] md:mt-[15vh] md:h-[30vh] lg:h-[40vh] xl:w-[80%] mx-auto md:flex md:justify-evenly grid grid-col-1 ">
        <div className="md:w-3/6 md:mx-auto lg:w-3/6 xl:w-4/6">
          <video
            controls
            className="w-full h-[300px] md:w-full lg:w-[90%] lg:h-[400px] xl:w-[90%] 2xl:w-[70%] 2xl:h-[400px]"
            src="https://www.youtube.com/watch?v=5oH9Nr3bKfw"
            type="video"
          ></video>
        </div>
        <div className="w-full md:mt-0 md:w-[45%] h-auto lg:w-[30%] md:h-24 lg:mr-auto md:relative flex justify-center items-center xs:mt-13 xs:text-black 2xl:w-[25%]">
          <p className="text-2xl font-semibold py-5 md:text-3xl md:text-[#ffca18] md:absolute mx-auto text-black 2xl:text-left">
            DOWNLOAD APP
          </p>
          <div className="w-full  xs:flex xs:justify-between xs:items-center absolute mt-32 xs:w-5/6 md:w-5/6 h-[10vh] md:h-[10vh] md:mt-48 md:absolute lg:w-[95%] xs:mt-40 ">
            <img
              src="google.png"
              alt=""
              className="mx-auto w-3/6 xs:w-36 md:h-12 "
            />
            <img
              src="AppStore.png"
              alt=""
              className="w-3/6 mx-auto xs:w-36  md:w-36 mt-[-5vh] xs:mt-0"
            />
          </div>
        </div>
      </div>
      {/* ------about us------ */}
      <div className="w-full h-auto md:h-auto md:mt-20 mt-[20%] z-40 2xl:mt-[10vh]">
        <div className="w-full md:w-[80%] mx-auto lg:ml-0 h-auto xl:w-[80%] p-2 md:p-0 xl:mt-16   ">
          <h1 className="w-[250px] md:mt-8 mx-auto lg:text-left flex justify-between   ">
            <p className="text-[#832ab0] text-5xl 2xl:text-5xl">ABOUT</p>
            <p className="text-[#ffca18] text-5xl 2xl:text-5xl">US</p>
          </h1>
          <div className="w-full xs:w-[70%]  md:w-full xl:w-[80%] mx-auto xl:ml-32 2xl:text-xl py-5 ">
            <p className="md:px-20 lg:px-60 mt-5 xl:px-20 2xl:px-40">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="md:px-20 lg:px-60 mt-5 xl:px-20 2xl:px-40">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="w-full flex justify-center mt-10 items-center">
              <button className="w-32 text-white h-12 bg-purple-700 md:ml-60  mx-auto 2xl:px-16 2xl:py-5 2xl:rounded-xl  2xl:w-auto 2xl:mr-auto 2xl:h-auto">
                More...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
