import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper";

const Expert = () => {
  return (
    <div className="h-[230%] lg:h-[240%] w-full relative bg-transparent mt-[-100%] md:mt-[-600px] 2xl:h-[180%] 2xl:mt-[-35%] xl:h-[210%] xl:mt-[-50%] lg:mt-[-80%] md:h-[180%]">
      <img src="expert.png" alt="" className="w-full h-[70%]" />

      {/* -----Expert section----- */}
      <div className="w-full md:w-full xs:mt-[30vh]  md:h-[40vh] top-[27%] xs:top-80 lg:top-64 md:top-[2%] md:text-left md:px-[10%] bordor-2 text-center absolute mt-16 xl:mt-[20%] lg:p-0 2xl:top-[5%]">
        <p className=" text-[#ffca18]  lg:text-left lg:pl-24 text-4xl xs:text-6xl md:text-6xl font-extrabold 2xl:text-7xl">
          WE HAVE
        </p>
        <p className=" text-white text-5xl xs:text-7xl md:text-7xl font-thin lg:text-8xl lg:text-left lg:pl-24">
          EXPERTS
        </p>
        <p className=" text-[#ffca18] font-thin xs:text-4xl text-3xl md:text-3xl text-center md:text-left md:px-[10%] lg:text-left lg:pl-36 ">
          FOR YOUR WORK
        </p>
      </div>
      {/*-------------- hero-instance------ */}
      <img
        src="hero-instance.png"
        alt=""
        className="absolute right-0 md:right-0 bottom-[35%] md:bottom-[32%] w-full md:w-[70%] lg:bottom-[50%] lg:right-10 xl:bottom-[28%] xl:right-0 2xl:w-[50%] 2xl:bottom-[34%] 2xl:right-[5%]"
      />

      {/* -------POPULAR CATAGORY-------- */}
      <div className=" w-full md:w-full h-32 absolute md:left-0 bottom-[30%] lg:bottom-[25%]  lg:pl-[13%] 2xl:w-3/6 2xl:ml-[1%] xl:ml-0 xs:bottom-[22%] 2xl:bottom-[28%] xl:bottom-[20%] md:bottom-[25%]">
        <p className="text-[#6b16a6] text-3xl xs:text-4xl md:px-5 lg:px-5 text-center xs:text-left mt-5 md:text-4xl font-semibold 2xl:text-7xl">
          POPULAR CATAGORIES
        </p>
        <p className="md:px-5 mt-2 uppercase xs:text-left text-center lg:px-5 2xl:text-2xl ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="absolute bottom-0 w-full md:bottom-10 h-auto md:h-[40vh] lg:bottom-48 hidden xs:block xs:h-[30vh] xs:bottom-44 xl:bottom-10 2xl:w-full 2xl:bottom-20">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full md:w-full lg:w-[70%] h-full "
        >
          <SwiperSlide>
            <div
              className="bg-cover w-full h-full mt-"
              style={{ backgroundImage: "url('plumber.png')" }}
            >
              <div className="w-[90%] mx-auto mt-2 ">
                <p className="uppercase text-white md:text-2xl font-semibold xs:text-left xs:text-lg 2xl:text-3xl">
                  plumber
                </p>
                <p className="text-white text-[13px] mt-1 xs:text-left 2xl:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover w-full h-full "
              style={{ backgroundImage: "url('plumber.png')" }}
            >
              <div className="w-[90%] mx-auto mt-2">
                <p className="uppercase text-white text-2xl font-semibold xs:text-left xs:text-lg md:text-2xl 2xl:text-3xl">
                  electricians
                </p>
                <p className="text-white text-[13px] mt-1 xs:text-left 2xl:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover w-full h-full "
              style={{ backgroundImage: "url('painter.png')" }}
            >
              <div className="w-[90%] mx-auto mt-2">
                <p className="uppercase text-white text-2xl font-semibold xs:text-left xs:text-lg md:text-2xl 2xl:text-3xl">
                  painters
                </p>
                <p className="text-white text-[13px] mt-1 xs:text-left 2xl:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover w-full h-full "
              style={{ backgroundImage: "url('carwash.png')" }}
            >
              <div className="w-[90%] mx-auto mt-2">
                <p className="uppercase text-white text-2xl font-semibold xs:text-left xs:text-lg md:text-2xl 2xl:text-3xl">
                  carwash
                </p>
                <p className="text-white text-[13px] mt-1 xs:text-left 2xl:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover w-full h-full "
              style={{ backgroundImage: "url('carwash.png')" }}
            >
              <div className="w-[90%] mx-auto mt-2">
                <p className="uppercase text-white text-2xl font-semibold xs:text-left xs:text-lg md:text-2xl 2xl:text-3xl">
                  salons
                </p>
                <p className="text-white text-[13px] mt-1 xs:text-left 2xl:text-xl ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Expert;
