import React from "react";

const FooterSquare = () => {
  return (
    <div className="w-full h-auto bg-cover z-10 pt-10 footerbg ">
      {/* ----creating grid---------*/}
      <div className="w-full h-auto grid md:grid-cols-2 top-10 right-0 text-white  py-10">
        {/* ----------grid 1----------- */}
        <div className=" w-full h-full flex justify-end items-center">
          <div className="w-[90%] md:w-[80%] lg:w-[50%] h-auto ml-auto mr-10 p-5">
            <p className="text-2xl font-thin text-[#FFD219]">CONTACT US</p>
            <p className="text-4xl mt-5">
              GET IN TOUCH WITH US, WE WILL REPLY AS SOON AS
              <span className="ml-3 text-[#FFD219]">POSSIBLE</span>
            </p>
            <form className=" w-full h-auto mt-12">
              <input
                type="text"
                placeholder="NAME"
                className="placeholder-[#a6aab0] h-8 text-lg tracking-widest text-[#a6aab0] p-2 outline-none bg-transparent outline-[#a6aab0] w-full rounded-lg"
              />

              <input
                type="email"
                placeholder="EMAIL"
                className="placeholder-[#a6aab0] text-lg tracking-widest  h-8 text-[#a6aab0] p-2 outline-none bg-transparent outline-[#a6aab0] w-full rounded-lg mt-5"
              />

              <textarea
                cols="12"
                placeholder="MESSAGE"
                className=" placeholder-[#a6aab0] text-lg text-[#a6aab0] tracking-widest p-2 outline-none bg-transparent outline-[#a6aab0] w-full h-36 rounded-lg mt-5"
              />
              <button className="placeholder-[#a6aab0] outline-none rounded-lg  hover:bg-[#FFD219] hover:text-black bg-transparent outline-[#FFD219] w-full text-2xl text-[#FFD219] mt-5 h-8 text-center">
                SEND
              </button>
            </form>
          </div>
        </div>
        {/* ------grid 2-------- */}
        <div className=" w-[60%] h-full  flex justify-start items-end py-10">
          <div className="w-auto h-auto ">
            <p className="text-2xl ml-5">MORE INFORMATION</p>
            <p className=" text-lg mt-5 ml-5">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Proin non porttitor lacus. Nunc sit amet dolor pulvinar, mattis
              sem nec.
            </p>
            <div className="flex ml-5 mt-5">
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
      <div className="w-full h-28 bg-[#282f3e] flex justify-center items-center ">
        <p className="text-white text-lg md:text-2xl ">
          © 2022 Beyfikar - All Rights Reserved
        </p>
      </div>
      {/* <div className="absolute bottom-16 cursor-pointer  md:right-8 w-24 h-24 ms:w-[6vw] md:h-[12vh] bg-white rounded-full flex justify-center items-center 2xl:w-28 ">
        <div>
          <img src="chat.png" alt="" className="" />
          <p className="font-semibold text-center">Chat</p>
        </div>
      </div> */}
    </div>
  );
};

export default FooterSquare;
