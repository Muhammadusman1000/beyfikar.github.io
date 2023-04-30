import { AiTwotoneStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import PostAjobIcon from "../pics/postajobicon.png";
import Chaticon from "../pics/Chat-icon.png";
import FooterSquare from "../menu buttons/FooterSquare";
import Editicon from "../pics/edit-icon.jpg";
import { Link } from "react-router-dom";

const MyProfile = () => {
  var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes() + "AM";

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
          <div className="w-[80%] md:flex md:justify-between grid grid-rows-2 gap-10 h-auto mx-auto">
            <aside className="w-full md:w-3/6 lg:w-[40%] xl:w-[27%] border-2  p-5 md:p-5 bg-white shadow-lg">
              <div className="w-full flex relative  ">
                <Link to="/editprofile">
                  <div className="absolute right-0 bg-[#ffca18] p-2 cursor-pointer">
                    <img src={Editicon} alt="" className="text-[#ffca18]" />
                  </div>
                </Link>
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
              <section className="">
                <div className="flex justify-between border-[1px] border-y-gray-400 py-1">
                  <p className="font-semibold text-[21px] font-Roboto_Regular">
                    My Posted Jobs
                  </p>
                  <p className="text-[#65666A] text-[21px] font-Roboto_Regular">
                    125
                  </p>
                </div>
                <p className="text-[21px] font-Roboto_Regular mt-10 font-semibold">
                  Review
                </p>
                <div className="h- auto py-2 grid grid-cols-2 gap-14 ">
                  {/* ------------------Review section---------------- */}
                  <div>
                    <p className="flex">
                      <AiTwotoneStar size={30} className="text-[#FFCA18]" />
                      <AiTwotoneStar size={30} className="text-[#FFCA18]" />
                      <AiTwotoneStar size={30} className="text-[#FFCA18]" />
                      <AiTwotoneStar size={30} className="text-[#FFCA18]" />
                      <CiStar size={30} />
                    </p>
                    <p className="text-[18px] mt-2">
                      4.5<span>(24 Reviews)</span>
                    </p>
                  </div>
                  {/* -------------------review section 2------------------- */}
                  <div className=" flex">
                    <div>
                      <p>20</p>
                      <p>02</p>
                      <p>02</p>
                      <p>00</p>
                      <p>00</p>
                    </div>
                    <div className="ml-2">
                      <p className="flex">
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                      </p>
                      <p className="flex">
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                      </p>
                      <p className="flex">
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                      </p>
                      <p className="flex">
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                      </p>
                      <p className="flex">
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-5 ">
                <div className="flex  ">
                  <img
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-5 w-full flex justify-between items-center ">
                    <div>
                      <p className="text-[21px] font-Roboto_Regular font-semibold">
                        Kashif
                      </p>
                      <p className="flex -ml-1">
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                        <AiTwotoneStar size={20} className="text-[#FFCA18]" />
                      </p>
                    </div>

                    <div>
                      <p>{time}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className=" font-Roboto_Regular text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin cursus tempor consectetur.
                  </p>
                </div>
                {/* --------------------Post job and Chat section------------------- */}
                <div className="w-4/6 mx-auto flex justify-between items-center mt-5 h-auto">
                  <Link to="/mypostedjobs">
                    <div className="w-24 h-20 flex justify-center items-center bg-[#ececec]">
                      <img src={PostAjobIcon} alt="" className="" />
                    </div>
                  </Link>
                  <Link to="/chat">
                    <div className="w-24 h-20 bg-[#ececec] flex justify-center items-center">
                      <img src={Chaticon} alt="" className="" />
                    </div>
                  </Link>
                </div>
              </section>
            </aside>

            {/* ---------------main second grid------------------- */}

            <section className="md:w-3/6 lg:w-[70%] bg-white shadow-lg"></section>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default MyProfile;
