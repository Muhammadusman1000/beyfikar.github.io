import FooterSquare from "../menu buttons/FooterSquare";
import { CiSearch } from "react-icons/ci";
import Togglebtn from "../pics/togglechat.png";
import Toggleclose from "../pics/toggleclose.png";
import Arrow from "../pics/arrow.png";
import { useState } from "react";
import star from "../pics/star.png";

const Chat = () => {
  var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes() + "AM";

  const [toggleaside, settoggleasid] = useState(false);

  return (
    <div
      className="w-full h-[210vh] bg-cover"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full h-[210vh] lg:h-[140vh] xl:h-[120vh] md:h-[120vh]">
        <div className="w-full h-auto absolute top-[23vh]">
          <div className="w-[80%] md:flex md:justify-between grid grid-rows-2 gap-10 h-auto py-5 mx-auto">
            <aside className="w-full md:w-3/6 lg:w-[40%] xl:w-[27%] p-5 md:p-2 bg-white shadow-lg">
              <section className="relative w-full h-[95%] mx-auto">
                {/* ------toggel side---- */}
                <div
                  className={
                    toggleaside
                      ? "w-full h-[105%] z-[1] absolute bg-white"
                      : "hidden"
                  }
                >
                  <div className="w-full flex relative  ">
                    <div className="w-[40%] flex h-full p-3">
                      <img
                        src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-28 h-28 rounded-full"
                      />
                    </div>
                    <div className="w-[60%] p-2">
                      <p className="text-[18px] mb-1 font-semibold font-Roboto_Regular md:text-[24px]">
                        Zaman Ali
                      </p>
                      <p className="text-[18px] mb-1">03331234589</p>
                      <p className="text-[18px] mb-1">myemail@gmail.com</p>
                      <p className="text-[18px] mb-1">
                        232, A-Block, Johar Town, Lahore
                      </p>
                      <p className="text-[16px] text-[#5E0AA0] font-semibold mb-1 cursor-pointer">
                        View on Map
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-10 mt-12 ">
                    <div className="w-[80%] h-full border-2 border-[#049E0F] mx-auto rounded-md flex items-center px-3">
                      <p className="w-3 h-3 rounded-full bg-[#049E0F]"></p>
                      <p className="ml-2 font-Roboto_Regular text-[16px]">
                        Available
                      </p>
                    </div>
                  </div>

                  <div className="w-[80%] h-10 bg-[#00000033] mt-24 mx-auto flex justify-center items-center">
                    <img src={star} alt="" className="" />
                  </div>

                  <div className="w-full mx-auto h-32 absolute bottom-3 ">
                    <div className="w-[95%] mx-auto h-full bg-[#5E0AA0] text-white flex justify-center items-center">
                      <div className=" text-center">
                        <p className="text-[20px] font-Roboto_Regular">
                          Task Budget Estimation
                        </p>
                        <p className="text-[24px] font-Roboto_Bold">Rs. 500</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------------------------toggel side ending--------------- */}

                <div className="flex w-full h-auto">
                  <div className="w-[100%] flex justify-between  items-center h-20 bg-[#5E0AA0]">
                    <div className="h-full w-full flex justify-between items-center">
                      <input
                        type="text"
                        placeholder="Search Keywords"
                        className=" bg-[#5E0AA0] cursor-text h-full w-full outline-none text-white tracking-widest text-[20px] px-5"
                      />
                      <div className="cursor-pointer">
                        <CiSearch
                          className="text-white cursor-pointer mr-3"
                          size={25}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* =================== left side of chate box================= */}
                <div className="w-full h-auto relative grid grid-rows-[7] md:px-3 py-3 gap-5">
                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-[82%]">
                      <div className="w-full  flex justify-between">
                        <p className="font-Roboto_Regular text-[18px] font-semibold">
                          Zaman Ali
                        </p>
                        <p>{time}</p>
                      </div>
                      <p className="text-[16px] font-Roboto_Regular ">
                        Share me details of my work...
                      </p>
                    </div>
                  </div>
                </div>
                {/* ===============  ending chatebox =============== */}
              </section>
            </aside>

            {/* ---------------main second right side  grid------------------- */}

            <section className="md:w-3/6 lg:w-[70%] bg-white shadows-lg relative shadow-lg">
              {/* --------------textarea header------------------ */}
              <div className="w-full h-20 bg-[#ececec] p-3 flex justify-between items-center">
                <div className="w-[170px] flex justify-between items-center">
                  <img
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <p className=" font-Roboto_Regular text-[21px] font-semibold">
                    Zaman Ali
                  </p>
                </div>
                <div onClick={() => settoggleasid(!toggleaside)}>
                  {toggleaside ? (
                    <img src={Toggleclose} alt="" className=" cursor-pointer" />
                  ) : (
                    <img src={Togglebtn} alt="" className=" cursor-pointer" />
                  )}
                </div>
              </div>

              {/* ------------text area body---------------- */}
              <div className="w-full h-[75%]  px-5">
                <div className="w-full h-[25%]  relative">
                  <p className="w-[70%] absolute bottom-7   ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="absolute bottom-0">{time}</p>
                </div>

                <div className="w-full h-[25%]  relative ">
                  <div className="h-2/6"></div>
                  <div className="w-[70%] ml-auto right-0 h-3/6  relative mt-auto  rounded-lg bg-[#EEE5F4] flex items-center ">
                    <p className="absolute px-5 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <p className="absolute bottom-0 right-0">{time}</p>
                </div>

                <div className="w-full h-[25%] relative">
                  <p className="w-[70%] absolute bottom-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="absolute bottom-0">{time}</p>
                </div>

                <div className="w-full h-[25%] relative">
                  <div className="h-2/6"></div>
                  <div className="w-[70%] ml-auto right-0 h-3/6  relative mt-auto  rounded-lg bg-[#EEE5F4] flex items-center">
                    <p className="absolute  px-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <p className="absolute bottom-0 right-0">{time}</p>
                </div>
              </div>

              {/* ------------------text area input -------------- */}
              <div className="absolute bottom-0 bg-[#FFCA18] w-full h-16 flex justify-between items-center px-2">
                <div className="w-full flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Message"
                    className="w-[95%] h-12 px-3 text-black outline-none tracking-wider text-[18px]"
                  />
                  <div className="w-10 h-10 bg-black rounded-lg flex justify-center items-center cursor-pointer">
                    <img src={Arrow} alt="" className="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default Chat;
