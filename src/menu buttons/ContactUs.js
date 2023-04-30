import React from "react";

import FooterSquare from "./FooterSquare";

const ContactUs = () => {
  return (
    <div className="w-full h-[180vh] bg-cover bg">
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>

      <div className="w-full h-[130vh] md:h-[100vh]  flex justify-center items-center ">
        <div className="w-[80%] shadow-lg h-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 absolute top-[25vh]  bg-white gap-20 py-20 ">
          {/* ----------grid 1----------- */}
          <div className=" w-full auto flex justify-center  md:justify-end mx-auto ">
            <div className="w-full h-auto md:w-[60%] md:h-full pt-5 md:pt-0 ">
              <p className="text-2xl font-thin ">CONTACT US</p>

              <form className=" w-full h-auto mt-12">
                <input
                  type="text"
                  placeholder="NAME"
                  className="placeholder-[#a6aab0] text-lg tracking-widest text-[#a6aab0] p-2 outline-none bg-transparent outline-[#a6aab0] w-full h-12 rounded-lg"
                />

                <input
                  type="email"
                  placeholder="EMAIL"
                  className="placeholder-[#a6aab0] text-lg tracking-widest text-[#a6aab0] p-2 outline-none bg-transparent outline-[#a6aab0] w-full h-12 rounded-lg mt-5"
                />

                <textarea
                  cols="12"
                  placeholder="MESSAGE"
                  className=" placeholder-[#a6aab0] text-lg text-[#a6aab0] tracking-widest p-2 outline-none bg-transparent outline-[#a6aab0] w-full h-44 rounded-lg mt-5"
                />
                <button className="placeholder-[#a6aab0] outline-none rounded-lg   bg-[#ffca18] w-full text-2xl mt-5 h-16 text-center">
                  SEND
                </button>
              </form>
            </div>
          </div>
          {/* ------grid 2-------- */}
          <div className=" w-[100%] h-auto">
            <div className="w-full md:w-[30vw] h-auto md:h-[45vh] px-5 md:px-0 md:mt-16">
              <p className="text-2xl md:ml-5">MORE INFORMATION</p>
              <p className=" text-lg mt-10 md:ml-5">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Proin non porttitor lacus. Nunc sit amet dolor pulvinar, mattis
                sem nec.
              </p>
              <div className="flex ml-5 mt-10">
                <img src="location.png" alt="" className="w-4 h-6" />
                <p className="ml-3 text-lg">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus
                </p>
              </div>
              <div className="flex text-lg ml-5 mt-5">
                <img src="phone.png" alt="" className="w-4 h-5" />
                <p className="ml-3">0000 - 0000000</p>
              </div>
              <div className="flex text-lg ml-5 mt-5">
                <img src="mail.png" alt="" className="w-4 h-5" />
                <p className="ml-3">info@beyfiker.com </p>
              </div>
            </div>
          </div>
        </div>
        {/*  -----------footer-section----------> */}
      </div>
      <FooterSquare />
    </div>
  );
};

export default ContactUs;
