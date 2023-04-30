import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[250%] mt-[-1600px] md:h-[200vh] relative md:mt-[-160vh] md:bg-transparent 2xl:h-[200%] 2xl:mt-[-105%]">
      <img src="footerimg.png" alt="" className="w-full h-full md:h-full" />
      {/* ----creating grid--------- */}
      <div className="absolute bottom-24 w-full h-[900px] md:h-[70vh] grid grid-cols-1 md:grid md:grid-cols-2 md:bottom-32  right-0  text-white z-20 gap-20 2xl:flex 2xl:justify-around 2xl:h-[32%] 2xl:w-[60%] 2xl:right-[20%] 2xl:bottom-40">
        {/* ----------grid 1----------- */}
        <div className="w-full md:ml-16 flex justify-end h-[60%] md:mt-0  mx-auto 2xl:w-[48%] 2xl:relative">
          <div className="w-[98%] md:w-[50%] h-full absolute 2xl:w-[100%] px-5">
            <p className="text-2xl font-thin text-[#FFD219]">CONTACT US</p>
            <p className="text-3xl md:text-4xl lg:text-5xl mt-5">
              GET IN TOUCH WITH US, WE WILL REPLY AS SOON AS
              <span className="ml-3 text-[#FFD219]">POSSIBLE</span>
            </p>
            <form className=" w-[90%] mx-auto md:w-full h-auto mt-12">
              <input
                type="text"
                placeholder="NAME"
                className="placeholder-[#a6aab0] h-8 text-lg tracking-widest text-[#a6aab0] p-2 outline-none bg-transparent outline-[#a6aab0] w-full md:h-10 rounded-lg 2xl:h-14 2xl:px-10"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="placeholder-[#a6aab0] h-8 text-lg tracking-widest text-[#a6aab0] p-2 outline-none bg-transparent outline-[#a6aab0] w-full md:h-10 rounded-lg mt-5 2xl:h-14 2xl:px-10"
              />

              <textarea
                cols="12"
                placeholder="MESSAGE"
                className=" placeholder-[#a6aab0] h-24 text-lg text-[#a6aab0] tracking-widest p-2 outline-none bg-transparent outline-[#a6aab0] w-full md:h-36 rounded-lg mt-5 2xl:h-44 2xl:px-10"
              />
              <button className="placeholder-[#a6aab0] h-8 outline-none rounded-lg hover:bg-[#FFD219] hover:text-black  bg-transparent outline-[#FFD219] w-full text-2xl text-[#FFD219] mt-5 md:h-10 text-center 2xl:h-14 2xl:px-10">
                SEND
              </button>
            </form>
          </div>
        </div>
        {/* ------grid 2-------- */}
        <div className="w-[100%] h-auto relative px-4 md:p-0 md:mt-0 mt-0 2xl:w-[48%] 2xl:h-full ">
          <div className="md:w-[30vw] h-auto md:h-[65vh] lg:h-[45vh] absolute md:bottom-0 2xl:h-[50%] px-5 ">
            <p className="text-2xl md:ml-5">MORE INFORMATION</p>
            <p className=" text-lg mt-5 md:ml-5">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Proin non porttitor lacus. Nunc sit amet dolor pulvinar, mattis
              sem nec.
            </p>
            <div className="flex md:ml-5 mt-10">
              <img src="location.png" alt="" className="w-4 h-6" />
              <p className="ml-3 text-lg">
                Interdum et malesuada fames ac ante ipsum primis in faucibus
              </p>
            </div>
            <div className="flex text-lg md:ml-5 mt-5">
              <img src="phone.png" alt="" className="w-4 h-5" />
              <p className="ml-3">0000 - 0000000</p>
            </div>
            <div className="flex text-lg md:ml-5 mt-5">
              <img src="mail.png" alt="" className="w-4 h-5" />
              <p className="ml-3">info@beyfiker.com </p>
            </div>
          </div>
        </div>
      </div>
      {/*  -----------footer-section----------> */}
      <div className="w-full h-28 bg-[#282f3e] flex justify-center items-center absolute bottom-0">
        <p className="text-white text-[15px] md:text-2xl ">
          © 2022 Beyfikar - All Rights Reserved
        </p>
      </div>
      <div className="absolute bottom-16 cursor-pointer right-5 md:right-8 w-24 h-24 ms:w-[6vw] md:h-[12vh]  bg-white rounded-full flex justify-center items-center 2xl:w-28 ">
        <div>
          <img src="chat.png" alt="" className="" />
          <p className="font-semibold text-center">Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
