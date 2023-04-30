import FooterSquare from "../menu buttons/FooterSquare";
import { CiSearch } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { BsFillChatTextFill } from "react-icons/bs";

const Catagory = () => {
  const profile = [
    {
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Zaman Ali",
      catagory: "Plumber",
      star1: <RiStarSFill />,
      star2: <RiStarSFill />,
      star3: <RiStarSFill />,
      star4: <RiStarSFill />,
      star5: <RiStarSLine />,
      location: <ImLocation />,
      address: "232, A-Block, Johar Town, Lahore",
      map: "View on Map",
      available: "Available",
      chat: <BsFillChatTextFill />,
    },
    {
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Zaman Ali",
      catagory: "Plumber",
      star1: <RiStarSFill />,
      star2: <RiStarSFill />,
      star3: <RiStarSFill />,
      star4: <RiStarSFill />,
      star5: <RiStarSLine />,
      location: <ImLocation />,
      address: "232, A-Block, Johar Town, Lahore",
      map: "View on Map",
      available: "Available",
      chat: <BsFillChatTextFill />,
    },
    {
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Zaman Ali",
      catagory: "Plumber",
      star1: <RiStarSFill />,
      star2: <RiStarSFill />,
      star3: <RiStarSFill />,
      star4: <RiStarSFill />,
      star5: <RiStarSLine />,
      location: <ImLocation />,
      address: "232, A-Block, Johar Town, Lahore",
      map: "View on Map",
      available: "Available",
      chat: <BsFillChatTextFill />,
    },
    {
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Zaman Ali",
      catagory: "Plumber",
      star1: <RiStarSFill />,
      star2: <RiStarSFill />,
      star3: <RiStarSFill />,
      star4: <RiStarSFill />,
      star5: <RiStarSLine />,
      location: <ImLocation />,
      address: "232, A-Block, Johar Town, Lahore",
      map: "View on Map",
      available: "Available",
      chat: <BsFillChatTextFill />,
    },
    {
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Zaman Ali",
      catagory: "Plumber",
      star1: <RiStarSFill />,
      star2: <RiStarSFill />,
      star3: <RiStarSFill />,
      star4: <RiStarSFill />,
      star5: <RiStarSLine />,
      location: <ImLocation />,
      address: "232, A-Block, Johar Town, Lahore",
      map: "View on Map",
      available: "Available",
      chat: <BsFillChatTextFill />,
    },
  ];
  return (
    <div
      className="w-full h-[390vh] md:h-[130vh] bg-cover"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full h-[390vh] lg:h-[140vh] xl:h-[120vh] md:h-[130vh]">
        <div className="w-full h-auto absolute top-[23vh]">
          <div className="w-[95%] md:w-[80%] md:flex sm:justify-between flex-row  gap-10 h-auto mx-auto">
            {/* --------------------left side ------------------ */}
            <aside className="w-full md:w-[30%] lg:w-[40%] xl:w-[25%]  h-[70vh] border-blac p-5 md:p-5 bg-white shadow-lg">
              <section className="w-[95%] h-[98%]  mx-auto  relative">
                <div className="mt-5">
                  <p className="text-[#5E0AA0] font-Roboto_Medium text-[32px]">
                    FILTER
                  </p>
                  <div className="flex justify-between">
                    <label className="text-[#65666A] text-[18px] font-semibold font-Roboto_Medium">
                      Keyword
                    </label>
                    <CiSearch size={20} className="text-[#65666A] mr-2" />
                  </div>
                  <input
                    type="text"
                    placeholder="Plumber"
                    className="px-2 flex items-center placeholder:text-[16px] placeholder:text-[#65666A] border-[1px] border-[#65666A] w-full h-10 rounded-md mt-2 outline-none"
                  />
                </div>

                <div className="mt-7">
                  <div className="flex justify-between">
                    <label className="text-[#65666A] text-[18px] font-Roboto_Medium font-semibold">
                      Catagory
                    </label>
                    <TfiMenuAlt size={20} className="text-[#65666A] mr-2" />
                  </div>
                  <select
                    className="px-2 flex
                    items-center text-[16px]
                    text-[#65666A] border-[1px] border-[#65666A]
                    w-full h-10 rounded-md mt-2 outline-none bg-white"
                  >
                    <option className="bg-transparent">Home Maintenance</option>
                  </select>
                </div>

                <div className="mt-7">
                  <div className="flex justify-between">
                    <label className="text-[#65666A] text-[18px] font-Roboto_Medium font-semibold">
                      Location Radius
                    </label>
                    <TfiMenuAlt size={20} className="text-[#65666A] mr-2" />
                  </div>
                  <div className="w-full h-12 flex justify-center items-center">
                    <div className="h-4 w-full">
                      <div className="bg-[#FFCA18] h-2 w-full flex items-center">
                        <p className="w-3 h-3 rounded-full bg-[#5E0AA0] ml-4"></p>
                      </div>
                      <div className="w-full h-4 border-[1px] border-x-gray-400 flex justify-evenly mt-1">
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                        <div className="w-1 h-4 border-[1px] border-l-gray-400"></div>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <p className="text-[#65666A] text-[16px]">0 km</p>
                        <p className="text-[#65666A] text-[16px]">50 km</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-12 rounded-md  absolute bottom-4 flex justify-center items-center">
                  <button
                    type="search"
                    className="bg-[#5E0AA0] font-Roboto_Medium text-white w-full h-full mx-auto"
                  >
                    Search
                  </button>
                </div>
              </section>
            </aside>
            {/* ------------------left side---------------------- */}

            {/* ---------------main second grid------------------- */}

            <section className=" md:w-[65%] lg:w-[75%]  shadow-lg ">
              {profile.map(
                (
                  {
                    img,
                    name,
                    catagory,
                    star1,
                    star2,
                    star3,
                    star4,
                    star5,
                    location,
                    address,
                    map,
                    available,
                    chat,
                  },
                  i
                ) => {
                  return (
                    <div key={i}>
                      <div className="w-[100%] mx-auto h-auto bg-white px-3 mt-5 py-4 shadow-lg md:flex md:justify-between md:items-center grid grid-rows-5">
                        <div className="w-full md:w-[10%] h-full flex justify-center items-center">
                          <img
                            src={img}
                            alt=""
                            className="w-16 h-16 rounded-full"
                          />
                        </div>

                        <div className="w-full text-center md:text-left h-20 md:w-[28%] ">
                          <p className=" font-Roboto_Regular text-[21px] text-[#65666A] font-semibold">
                            {name}
                          </p>
                          <p className="w-full  text-center md:text-left  text-[#65666A] text-md text-[16px]">
                            {catagory}
                          </p>
                          <div className="flex justify-center md:justify-start items-center  mx-auto ">
                            <p className="text-[#5E0AA0]">{star1}</p>
                            <p className="text-[#5E0AA0]">{star2}</p>
                            <p className="text-[#5E0AA0]">{star3}</p>
                            <p className="text-[#5E0AA0]">{star4}</p>
                            <p className="text-[#65666A]">{star5}</p>
                          </div>
                        </div>

                        <div className="text-center md:text-left md:w-[32%]  mt-2 md:mt-0">
                          <p className="text-[#65666A] text-[21px] mx-auto flex justify-center md:justify-start items-center">
                            {location}
                          </p>
                          <p className="md:mt-1 text-[#65666A] text-[16px] mt-2 ">
                            {address}
                          </p>
                          <p className="mt-2 md:mt-0 text-[#5E0AA0] text-[14px] font-Roboto_Regular font-semibold">
                            {map}
                          </p>
                        </div>

                        <div className="w-[80%] md:w-[10%] h-7 mx-auto mt-5 md:mt-0 ">
                          <p className="w-full rounded-md text-white h-full py-1 bg-[#77C04B] text-center flex justify-center items-center">
                            {available}
                          </p>
                        </div>
                        <div className="md:w-[5%] -mt-5 md:mt-0 mx-auto">
                          <p className="w-12 h-12 md:w-8 md:h-8  rounded-md bg-[#00000029] text-[#65666A] text-[22px] flex justify-center items-center">
                            {chat}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </section>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default Catagory;
