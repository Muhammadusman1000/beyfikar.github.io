import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const Testimonial = () => {
  return (
    <div className="w-full h-[200vh] md:h-[180vh] lg:h-[200vh] 2xl:h-[220vh] relative">
      <img src="bgyellow.png" alt="" className="w-full h-full absolute z-10" />
      <img
        src="male.png"
        alt=""
        className="absolute top-0 right-0 2xl:top-52 2xl:w-[25vw] "
      />
      <div className="w-full h-auto absolute z-10 lg:top-[60vh] top-[20%] 2xl:top-[30%] ">
        <div className=" w-full mt-32 md:mt-0 md:w-3/6 lg:w-[80%] md:ml-5 xs:w-[70%] xs:ml-10 mx-auto lg:pl-52 2xl:pl-[18vw] ">
          <p className="uppercase text-4xl md:text-5xl lg:text-4xl font-medium px-4 md:p-0 leading-tight 2xl:text-5xl">
            what our customer
          </p>
          <p className="uppercase px-4 md:p-0 text-4xl md:text-5xl lg:text-4xl font-medium leading-tight 2xl:text-5xl">
            syas abour us
          </p>
          <p className="text-3xl lg:text-2xl px-4 mt-10 md:p-0 md:mt-0 2xl:text-2xl">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
        </div>
        {/* ---------slider---------- */}
        <div className="w-full h-[30vh]  mt-16 md:mt-10 md:h-[35vh] absolute z-10  flex justify-center items-center 2xl:mt-28">
          <div className="w-full md:w-[55%] h-full flex justify-between">
            <div className="w-[15%] h-full">
              <img
                src="sonyellow.jpg"
                alt=""
                className="w-full h-full pb-10 2xl:right-20 "
              />
            </div>
            <div className="w-full md:w-[67%] h-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <div className="w-full h-full flex">
                    <div className="w-[35%] h-full ">
                      <img
                        src="girldsmile.png"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="w-[65%]">
                      <div className="w-8 h-8 mt-5 ml-5 2xl:w-10 2xl:h-10">
                        <img
                          src="quote.png"
                          alt=""
                          className="w-10 h-10 2xl:w-10"
                        />
                      </div>
                      <p className="text-left  text-[13px] ml-5 py-3 2xl:text-lg 2xl:p-2">
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Proin non porttitor lacus. Nunc sit amet dolor
                        pulvinar, mattis sem nec, pharetra neque. Pellentesque
                        finibus vitae nisi sit amet varius. Donec iaculis
                        feugiat dui, ut laoreet libero malesuada eu. Etiam velit
                        nibh, pulvinar vel ante at,
                      </p>
                      <p className="ml-5 mt-2 text-[#5e0aa0] font-medium text-left 2xl:text-3xl 2xl:font-semibold">
                        HARRIENT MICHELED
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full flex">
                    <div className="w-[35%] h-full ">
                      <img
                        src="girldsmile.png"
                        alt=""
                        className="w-full h-full 2xl:w-20"
                      />
                    </div>
                    <div className="w-[65%]">
                      <div className="w-8 h-8 mt-5 ml-5 2xl:w-10 2xl:h-10">
                        <img src="quote.png" alt="" className="w-10 h-10" />
                      </div>
                      <p className="text-left  text-[13px] ml-5 py-3 2xl:text-lg 2xl:p-2">
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Proin non porttitor lacus. Nunc sit amet dolor
                        pulvinar, mattis sem nec, pharetra neque. Pellentesque
                        finibus vitae nisi sit amet varius. Donec iaculis
                        feugiat dui, ut laoreet libero malesuada eu. Etiam velit
                        nibh, pulvinar vel ante at,
                      </p>
                      <p className="ml-5 mt-2 text-[#5e0aa0] font-medium text-left 2xl:text-3xl 2xl:font-semibold">
                        HARRIENT MICHELED
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[15%] h-full">
              <img src="sonyellow.jpg" alt="" className="w-full h-full pb-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
