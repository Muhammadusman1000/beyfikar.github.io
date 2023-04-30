import React, { useState } from "react";
import FooterSquare from "./FooterSquare";

const CommunityGuidline = () => {
  const [readmore, setreadmore] = useState(false);
  return (
    <div
      className="w-full h-auto "
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      <div className="w-full">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-[80%] mx-auto flex justify-center items-center bg-white mt-[200px] py-10 shadow-lg mb-20">
        <section className="w-[78%] h-auto  bg-white mt-10  grid grid-cols-1 lg:grid-cols-2  gap-10">
          {/* --------------Account Setting------------- */}
          <div className=" border-[1px] border-b-gray-600 flex">
            <img src="loginicon.jpg" alt="" className="w-20 h-20" />
            <div className="text-center">
              <h1 className="mt-2 text-2xl text-left px-2 md:px-5">
                Heading 1
              </h1>
              <p className="mt-2 text-xl text-left px-2 md:p-5">
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
                <span
                  onClick={() => setreadmore(!readmore)}
                  className="ml-2 text-indigo-500"
                >
                  {readmore ? "Read Less" : " Read More"}
                </span>
              </p>
              <p className={readmore ? "block duration-200" : "hidden"}>
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
              </p>
            </div>
          </div>

          {/* -----------------Email Compaigns-------------- */}
          <div className=" border-[1px] border-b-gray-600 flex">
            <img src="loginicon.jpg" alt="" className="w-20 h-20" />
            <div className="text-center">
              <h1 className="mt-2 text-2xl text-left px-2 md:px-5">
                Heading 1
              </h1>
              <p className="mt-2 text-xl px-2 md:p-5 text-left">
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
                <span
                  onClick={() => setreadmore(!readmore)}
                  className="ml-2 text-indigo-500"
                >
                  {readmore ? "Read Less" : " Read More"}
                </span>
              </p>
              <p className={readmore ? "block duration-200" : "hidden"}>
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
              </p>
            </div>
          </div>
          {/* ---------------------SMS Compaigns------------ */}
          <div className=" border-[1px] border-b-gray-600 flex">
            <img src="loginicon.jpg" alt="" className="w-20 h-20" />
            <div className="text-center">
              <h1 className="mt-2 text-2xl text-left px-2 md:px-5">
                Heading 1
              </h1>
              <p className="mt-2 text-xl px-5 py-5 text-left">
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
                <span
                  onClick={() => setreadmore(!readmore)}
                  className="ml-2 text-indigo-500"
                >
                  {readmore ? "Read Less" : " Read More"}
                </span>
              </p>
              <p className={readmore ? "block duration-200" : "hidden"}>
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
              </p>
            </div>
          </div>
          {/* -------------------Trnasactional Emails----------------- */}
          <div className=" border-[1px] border-b-gray-600 flex">
            <img src="loginicon.jpg" alt="" className="w-20 h-20" />
            <div className="text-center">
              <h1 className="mt-2 text-2xl text-left px-2 md:px-5">
                Heading 1
              </h1>
              <p className="mt-2 text-xl px-2 md:p-5 text-left">
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
                <span
                  onClick={() => setreadmore(!readmore)}
                  className="ml-2 text-indigo-500"
                >
                  {readmore ? "Read Less" : " Read More"}
                </span>
              </p>
              <p className={readmore ? "block duration-200" : "hidden"}>
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
              </p>
            </div>
          </div>
          {/* ---------------------Contacts-------------- */}
          <div className=" border-[1px] border-b-gray-600 flex">
            <img src="loginicon.jpg" alt="" className="w-20 h-20" />
            <div className="text-center">
              <h1 className="mt-2 text-2xl text-left px-2 md:px-5">
                Heading 1
              </h1>
              <p className="mt-2 text-xl px-2 md:p-5 text-left">
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
                <span
                  onClick={() => setreadmore(!readmore)}
                  className="ml-2 text-indigo-500"
                >
                  {readmore ? "Read Less" : " Read More"}
                </span>
              </p>
              <p className={readmore ? "block duration-200" : "hidden"}>
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
              </p>
            </div>
          </div>
          {/* -----------------------Auomation------------- */}
          <div className=" border-[1px] border-b-gray-600 flex">
            <img src="loginicon.jpg" alt="" className="w-20 h-20" />
            <div className="text-center">
              <h1 className="mt-2 text-2xl text-left px-2 md:px-5">
                Heading 1
              </h1>
              <p className="mt-2 text-xl px-2 md:p-5 text-left">
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
                <span
                  onClick={() => setreadmore(!readmore)}
                  className="ml-2 text-indigo-500"
                >
                  {readmore ? "Read Less" : " Read More"}
                </span>
              </p>
              <p className={readmore ? "block duration-200" : "hidden"}>
                Engage your contacts using the best mobile-friendly emial design
                tools Engage your contacts using the best mobile-friendly emial
                design tools
              </p>
            </div>
          </div>
        </section>
      </div>
      <FooterSquare />
    </div>
  );
};

export default CommunityGuidline;
