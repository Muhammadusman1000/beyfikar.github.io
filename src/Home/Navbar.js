import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "../Home/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../pics/logo.png";
import Login from "../pics/login.svg";
import Electricions from "../pics/icon-Electricians.png";
import Mesons from "../pics/icon-masons.png";
import Painters from "../pics/icon-painter.png";
import Cleaning from "../pics/icon-cleaning.png";
import Maid from "../pics/icon-maid.png";
import Fumigation from "../pics/fumigate.png";
import Tank from "../pics/icon-tankcleaning.png";
import Plumber from "../pics/plumbericon.png";

const Navbar = () => {
  const [hide, sethide] = useState(false);
  useEffect(() => {}, [hide]);
  function handlemenudiv() {
    sethide(!hide);
  }
  const [howitworks, sethowitworks] = useState(false);
  const Howitworkshandler = () => {
    sethowitworks(!howitworks);
  };

  const menuref = useRef();

  const [navhide, setnavhide] = useState(false);
  const [maintainence, setmaintainence] = useState(false);

  useEffect((e) => {
    document.addEventListener("click", (event) => {
      console.log("clicked", event.target);
    });
  }, []);

  return (
    <div className="w-full h-[80px] md:h-auto mx-auto absolute md:mt-10 z-10 ">
      <div className="md:w-[90%] lg:w-[80%] lg:mx-auto h-auto flex justify-center ">
        <div className="navbar">
          <div className=" w-3/6 h-full md:w-auto flex justify-between md:justify-center items-center">
            <div className="w-[80%] 2xl:w-[15%] 2xl:h-full md:mr-auto md:w-[18%] h-auto flex justify-center items-center ">
              <Link to="/">
                <img
                  src={Logo}
                  alt=""
                  className="w-[80%] h-auto md:mr-auto 2xl:w-[80%] 2xl mx-auto"
                />
              </Link>
            </div>
            <div className=" hidden w-full h-full md:flex justify-between z-20 2xl:w-[85%] px-1">
              <ul className="w-full flex md:justify-between lg:justify-between items-center font-bold md:text-[12px] lg:text-[15px] text-[15px] xl:text-[16px] text-center 2xl:text-[22px] font-Roboto">
                <Link to="/aboutus">
                  <li className="cursor-pointer">About Us</li>
                </Link>
                <li
                  className="cursor-pointer"
                  onClick={() => setmaintainence(!maintainence)}
                >
                  Home Maintenance
                </li>
                <li className="cursor-pointer">Personal Care</li>
                <li className="cursor-pointer">Vahical Maintenance</li>
                <li className="cursor-pointer">Social Services</li>
                <li className="cursor-pointer">Freelacning</li>
                <Link to="/myprofile">
                  <li className=" cursor-pointer">Post A Job</li>
                </Link>
              </ul>
            </div>
            <div className="w-auto 2x:w-[1%] flex justify-center items-center ">
              <BsThreeDotsVertical
                size={20}
                className="hidden md:block cursor-pointer h-full 2xl:w-10 "
                onClick={Howitworkshandler}
              />
            </div>

            {/* ---------second nav for mobile----------- */}
          </div>
        </div>
      </div>
      {/* ------------second navsection -------------- */}
      <div className="w-full flex justify-center z-[40] absolute  mt-[77px] md:mt-0 ">
        <div
          className="w-full md:w-[90%] md:mr-auto lg:mx-auto lg:w-[80%] mt-1 flex justify-between items-center px=1"
          ref={menuref}
        >
          <div
            className="bg-white w-12 h-11 flex justify-center items-center cursor-pointer shadow-lg"
            onClick={handlemenudiv}
          >
            <AiOutlineMenu size={30} />
          </div>

          {/* ----------hamburger menu--------- */}
          <div className={hide ? "hamburgermenu shadow-slate-400" : "hidden"}>
            <NavLink to="/setting">
              <p
                onClick={handlemenudiv}
                className="py-3 2xl:text-[23px] px-4 border-[1px] border-b-slate-300"
              >
                Setting
              </p>
            </NavLink>

            <NavLink to="/PaymentDetails">
              <p
                onClick={handlemenudiv}
                className="py-3 px-4 2xl:text-[23px] border-[1px] border-b-slate-300"
              >
                payment Details
              </p>
            </NavLink>
            <NavLink to="/aboutus">
              <p
                onClick={handlemenudiv}
                className="py-3 px-4 border-[1px] 2xl:text-[23px] border-b-slate-300"
              >
                About Us
              </p>
            </NavLink>
            <NavLink to="/communityGuidline">
              <p
                onClick={handlemenudiv}
                className="py-3 px-4 border-[1px] border-b-slate-300 2xl:text-[23px]"
              >
                Community Guilines
              </p>
            </NavLink>
            <NavLink to="/faqs">
              <p
                onClick={handlemenudiv}
                className="py-3 px-4 border-[1px] border-b-slate-300 2xl:text-[23px]"
              >
                FAQs
              </p>
            </NavLink>
            <NavLink to="/termsandCondistions">
              <p
                className="py-3 px-4 border-[1px] border-b-slate-300 2xl:text-[23px]"
                onClick={handlemenudiv}
              >
                Term & conditions
              </p>
            </NavLink>
            <NavLink to="/privacypolicy">
              <p
                onClick={handlemenudiv}
                className="py-[9px] px-4 border-[1px] border-b-slate-300 2xl:text-[23px]"
              >
                Privacy Policy
              </p>
            </NavLink>
            <NavLink to="/contactus">
              <p
                onClick={handlemenudiv}
                className="py-3 px-4 border-[1px] border-b-slate-300 2xl:text-[23px]"
              >
                Contact Us
              </p>
            </NavLink>
          </div>
          <div className="w-[80%] md:w-[50%] h-11 flex shadow-lg">
            <p className="pl-2 md:pl-3 w-[50%] text-[14px] md:w-[50%] h-full bg-white flex justify-between items-center cursor-pointer border-r-2 border-gray-400">
              <Link to="/catagory"> Select Catagory </Link>
              <MdOutlineArrowDropDown className="text-gray-500" size={30} />
            </p>

            <p className="pl-1 md:pl-3 w-[50%] text-[14px] h-full bg-white md:px-4 flex justify-between items-center cursor-pointer">
              Enter Service Keyword
              <FiSearch size={25} />
            </p>
          </div>
        </div>
        <NavLink to="/login">
          <div className="hidden md:block md:w-[75px] md:p-1 md:h-[88px] md:top-[-90px] lg:top-[-90px] lg:p-2 bg-[#ffca18] absolute right-0 2xl:w-[110px] 2xl:h-[105px] 2xl:top-[-110px] 2xl:p-3 xl:h-[90px] xl:w-24 xl:top-[-90px] lg:w-[90px] text-center">
            <div className="w-full h-full p-52xl:p-0">
              <img src={Login} alt="" className="mx-auto w-11  2xl:w-14 " />
              <p className="pl-2 font-bold  2xl:text-2xl xl:text-lg md:text-lg  text-center">
                Login
              </p>
            </div>
          </div>
        </NavLink>
      </div>
      {/* ------------------maintainence menu------------- */}
      <div
        className={
          maintainence
            ? "absolute left-[28%] w-[280px] h-auto  bg-white p-5 shadow-lg"
            : "hidden"
        }
      >
        <div
          className="flex justify-between items-cneter "
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Plumber} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px] ">Plumbers</p>
        </div>

        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Electricions} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">
            Electricians
          </p>
        </div>

        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Mesons} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">Mesons</p>
        </div>

        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Painters} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">Painters</p>
        </div>
        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Cleaning} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">Cleaning</p>
        </div>
        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Maid} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">
            Maid Service
          </p>
        </div>
        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Fumigation} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">
            Fumigation / pest Control
          </p>
        </div>
        <div
          className="flex justify-between items-cneter py-3 cursor-pointer"
          onClick={() => setmaintainence(!maintainence)}
        >
          <img src={Tank} alt="" className="w-8 h-8" />
          <p className="w-[78%] font-Roboto_Regular text-[16px]">
            Tank Cleaning
          </p>
        </div>
      </div>
      {/* ----------------------ending maintenance--------------- */}
      {/* ------how it works dropdown menu------------------ */}
      <div
        className={
          howitworks
            ? "md:w-[25%] md:right-20 lg:w-[20%] lg:right-[10vw] w-[14vw] h-auto 2xl:text-[20px] top-24 2xl:right-[9.9vw] absolute right-52 z-50 shadow-md shadow-slate-300 2xl:top-28"
            : "hidden"
        }
      >
        <NavLink to="/howitworks">
          <p className="bg-white 2xl:py-4 2xl:px-4 border-[1px] border-b-slate-300 leading-[40px] px-5 cursor-pointer">
            How it Works
          </p>
        </NavLink>
        <NavLink to="/pagename1">
          <p className="bg-white border-[1px] 2xl:py-4 2xl:px-4 border-b-slate-300 leading-[40px] px-5 cursor-pointer">
            Page Name 1
          </p>
        </NavLink>
        <NavLink to="/pagename2">
          <p className="bg-white border-[1px] 2xl:py-4 2xl:px-4 border-b-slate-300 leading-[40px] px-5 cursor-pointer">
            Page Name 2
          </p>
        </NavLink>
        <NavLink to="/pagename3">
          <p className="bg-white border-[1px] 2xl:py-4 2xl:px-4 border-b-slate-300 leading-[40px] px-5 cursor-pointer">
            Page Name 3
          </p>
        </NavLink>
        <NavLink to="/pagename4">
          <p className="bg-white border-[1px] 2xl:py-4 2xl:px-4 border-b-slate-300 leading-[40px] px-5 cursor-pointer">
            Page name 4
          </p>
        </NavLink>
      </div>
      <div className="w-full h-full absolute top-0 left-0 md:hidden bg-white z-[42] ">
        <Link to="/">
          <img src={Logo} alt="" className="w-52 p-2" />
        </Link>
      </div>

      {/* ---------second nav section for mobile */}
      <div>
        <GiHamburgerMenu
          size={40}
          className="absolute block md:hidden right-5 top-5 cursor-pointer z-[43]"
          onClick={() => setnavhide(!navhide)}
        />
      </div>

      <div
        // ref={refmenuclose}
        className={
          navhide
            ? "md:hidden absolute left-0 z-[41] w-full duration-300 translate-y-[18%] text-center"
            : "md:hidden absolute left-0 w-full h-auto duration-300 text-white flex-col z-[41] transform translate-y-[-90%] text-center"
        }
      >
        <ul className="w-full md:flex justify-between text-[18px] p-4 items-center font-bold flex-col md:flex-row lg:text-[18px] bg-[#f3c11a] translate-y-[-0%] md:text-[15px]">
          <li
            className="p-3 cursor-pointer"
            onClick={() => setnavhide(!navhide)}
          >
            About Us
          </li>
          <li
            className="p-3 cursor-pointer"
            onClick={() => setnavhide(!navhide)}
          >
            Home Maintenance
          </li>
          <li
            className="p-3 cursor-pointer"
            onClick={() => setnavhide(!navhide)}
          >
            Personal Care
          </li>
          <li
            className="p-3 cursor-pointer"
            onClick={() => setnavhide(!navhide)}
          >
            Vahical Maintenance
          </li>
          <li
            className="p-3 md:p-0 cursor-pointer"
            onClick={() => setnavhide(!navhide)}
          >
            Social Services
          </li>
          <li
            className="p-3 md:p-0 cursor-pointer"
            onClick={() => setnavhide(!navhide)}
          >
            Freelacning
          </li>
          <Link to="/postajob">
            <li
              className="p-3 md:p-0 cursor-pointer"
              onClick={() => setnavhide(!navhide)}
            >
              Post A Job
            </li>
          </Link>

          <Link to="/login">
            <li
              className="p-3 cursor-pointer"
              onClick={() => setnavhide(!navhide)}
            >
              Login
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
