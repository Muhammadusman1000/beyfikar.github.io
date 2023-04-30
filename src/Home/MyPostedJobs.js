import FooterSquare from "../menu buttons/FooterSquare";
import { CiSearch } from "react-icons/ci";
import filterimg from "../pics/filter.png";
import { useState } from "react";

const MyPostedJobs = () => {
  const [filter, setfilter] = useState(false);
  var today = new Date(),
    time =
      today.getDay() +
      "-" +
      today.getMonth() +
      "-" +
      today.getFullYear().toLocaleString();
  return (
    <div
      className="w-full h-[185vh] md:h-[110vh] bg-cover"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full h-[185vh] md:h-[110vh]">
        <div className="w-full h-auto absolute top-[23vh]">
          <div className="w-[80%] md:flex md:justify-between grid grid-rows-2 gap-10 h-auto mx-auto border-2 border-black">
            {/* ---------------main first Grid */}
            <aside className="md:w-[27%] bg-white pb-5 shadow-lg flex justify-center items-center">
              <section className="relative w-[95%] h-[95%]">
                <div className="flex w-full h-auto">
                  <div className="w-[100%] flex justify-between border-2 border-rose-600 items-center h-20 bg-[#5E0AA0]">
                    <div className="h-full w-full">
                      <input
                        type="text"
                        placeholder="Search Keywords"
                        className=" bg-[#5E0AA0] cursor-text h-full w-full outline-none text-white tracking-widest text-[20px] px-5"
                      />
                    </div>
                    <div className="cursor-pointer">
                      <CiSearch
                        className="text-white cursor-pointer mr-3"
                        size={25}
                      />
                    </div>
                    <div
                      className="bg-yellow-400 w-[10%] h-full flex justify-center items-center cursor-pointer"
                      onClick={() => setfilter(!filter)}
                    >
                      <img src={filterimg} alt="" className="bg-yellow-400" />
                    </div>
                  </div>
                </div>
                {/* ========================toggle section========================= */}
                <div
                  className={
                    filter
                      ? "hidden"
                      : "absolute w-[200px]  shadow-xl right-0 h-auto bg-white "
                  }
                >
                  <p
                    className="py-2 px-3 border-[1px] border-b-gray-300 cursor-pointer"
                    onClick={() => setfilter(!filter)}
                  >
                    All
                  </p>
                  <p
                    className="py-2 px-3 border-[1px] border-b-gray-300 cursor-pointer"
                    onClick={() => setfilter(!filter)}
                  >
                    Completed Jobs
                  </p>
                  <p
                    className="py-2 px-3 border-[1px] border-b-gray-300 cursor-pointer"
                    onClick={() => setfilter(!filter)}
                  >
                    Current Jobs
                  </p>
                </div>
                {/* =========================toggle section close========================= */}

                <div className="grid h-[90%] grid-rows-[8]">
                  <div className="w-full my-1">
                    <p className=" bg-[#E5E5E5] text-[21px] my-1">
                      Need to Fix Shower
                    </p>
                  </div>
                  <div className="w-full my-1">
                    <div className="flex justify-between">
                      <p className="text-[16px] text-[#5E0AA0] font-Roboto_Regular font-semibold">
                        Home Maintenance
                      </p>
                      <p className="text-[18px]">
                        1000<span className="text-[16px] ml-1">PKR</span>
                      </p>
                    </div>
                    <p className="text-[16px]">Physical Job</p>
                    <div className="flex justify-between items-center">
                      <p>682, L Block Wapda Town, Lahore</p>
                      <p>{time}</p>
                    </div>
                  </div>
                  <div className="w-full my-1">
                    <div className="w-full">
                      <p className=" bg-[#E5E5E5] text-[21px]">
                        Need to Fix Shower
                      </p>
                    </div>
                  </div>
                  <div className="w-full my-1">
                    <div className="  w-full">
                      <div className="flex justify-between">
                        <p className="text-[16px] text-[#5E0AA0] font-Roboto_Regular font-semibold">
                          Home Maintenance
                        </p>
                        <p className="text-[18px]">
                          1000<span className="text-[16px] ml-1">PKR</span>
                        </p>
                      </div>
                      <p className="text-[16px]">Physical Job</p>
                      <div className="flex justify-between items-center">
                        <p>682, L Block Wapda Town, Lahore</p>
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full my-1">
                    <div className="w-full">
                      <p className=" bg-[#E5E5E5] text-[21px]">
                        Need to Fix Shower
                      </p>
                    </div>
                  </div>

                  <div className="w-full my-1">
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="text-[16px] text-[#5E0AA0] font-Roboto_Regular font-semibold">
                          Home Maintenance
                        </p>
                        <p className="text-[18px]">
                          1000<span className="text-[16px] ml-1">PKR</span>
                        </p>
                      </div>
                      <p className="text-[16px]">Physical Job</p>
                      <div className="flex justify-between items-center">
                        <p>682, L Block Wapda Town, Lahore</p>
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full my-1">
                    <div className="w-full">
                      <p className=" bg-[#E5E5E5] text-[21px]">
                        Need to Fix Shower
                      </p>
                    </div>
                  </div>

                  <div className="w-full my-1">
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="text-[16px] text-[#5E0AA0] font-Roboto_Regular font-semibold">
                          Home Maintenance
                        </p>
                        <p className="text-[18px]">
                          1000<span className="text-[16px] ml-1">PKR</span>
                        </p>
                      </div>
                      <p className="text-[16px]">Physical Job</p>
                      <div className="flex justify-between items-center">
                        <p className="w-[50%]">
                          682, L Block Wapda Town, Lahore
                        </p>
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </aside>
            {/* ---------------main second grid------------------- */}
            <aside className="md:w-[70%] bg-white shadow-lg">hi</aside>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default MyPostedJobs;
