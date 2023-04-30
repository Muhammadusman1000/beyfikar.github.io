import React, { useState } from "react";
import FooterSquare from "../menu buttons/FooterSquare";
import { NavLink, Outlet } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { useFormik } from "formik";
import SignupEmployer from "../pics/signupemployer.svg";
import SignupEmployee from "../pics/signupemployee.svg";

const SignUp = () => {
  const [jobseeker, setjobseeker] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      Location: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg">
      <div className="w-full h-[100vh] ">
        <img src="bg.svg" alt="" className="w-full h-full" />
        <div className="w-full h-full absolute top-0">
          <div className="sm:w-[80%] h-2 bg-[#5e0aa0] mx-auto  "></div>
          <div className="sm:w-[80%] mx-auto h-auto bg-white shadow-lg mt-[22vh] relative">
            <div className="w-full text-center h-24 pt-5  ">
              <p
                className="text-3xl text-[#5e0aa0] font-bold relative mt-5"
                style={{ fontFamily: "Roboto Mono, monospace" }}
              >
                REGISTER YOURSELF
                <NavLink to="/">
                  <VscClose className="absolute right-2 top-2 text-gray-600" />
                </NavLink>
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* ----------job seeker or provider section ----------- */}

              <div className="w-full h-auto ">
                <div className="w-[300px] sm:w-[400px] mx-auto flex justify-between mt-5 ">
                  <NavLink to="/login">
                    <div className="w-auto p-3 flex justify-between items-center border-[1px] border-gray-400 rounded-lg ">
                      <img src={SignupEmployer} alt="" className="w-6" />

                      <p className="text-[12px] md:text-md md:px-5">
                        JOB SEEKER
                      </p>
                    </div>
                  </NavLink>
                  <NavLink to="jobprovider">
                    <div
                      className="w-auto p-3  flex justify-between items-center  border-[1px] border-gray-400"
                      onClick={() => setjobseeker(!jobseeker)}
                    >
                      <img src={SignupEmployee} alt="" className="w-6" />
                      <p className="text-[12px] md:text-md md:px-5">
                        JOB PROVIDER
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            {jobseeker ? <Outlet /> : ""}

            <div
              className={
                jobseeker ? "hidden" : "mt-32 md:mt-32 h-[50vh]  relative"
              }
            >
              <div className="w-full h-full mx-auto ">
                <form
                  onSubmit={formik.handleSubmit}
                  className="w-full sm:w-[80%] mx-auto md:w-[40%] lg:w-[50%] xl:w-[30%] p-2 md:p-0  md:top-12 mt-16 "
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-[10px] bg-white -mt-2 ml-3 absolute"
                    >
                      Full Name ?
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Type your full name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      className="w-full px-3 h-10 border-[1px] border-gray-400 mb-3"
                    />
                  </div>
                  <br />
                  <div className="flex justify-between items-center ">
                    <label
                      htmlFor="email"
                      className="text-[10px] bg-white -mt-10 ml-3 absolute"
                    >
                      Gender
                    </label>
                    <select className="outline-none w-[48%] border-[1px] border-gray-500 h-10 px-2">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <div className="w-[48%] relative ">
                      <label
                        htmlFor="email"
                        className="text-[10px] bg-white -mt-2 left-2 absolute"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Type your email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="px-5 w-full  h-10 border-[1px] border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <br />
                    <label
                      htmlFor="lastName "
                      className="text-[10px] bg-white -mt-2 ml-3 absolute"
                    >
                      Location
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Type your location"
                      onChange={formik.handleChange}
                      value={formik.values.location}
                      className="px-5 w-full h-10 border-[1px] border-gray-400"
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="w-full h-10 roudned-md bg-[#ffca18] text-md "
                    style={{ fontFamily: "Roboto Mono, monospace" }}
                  >
                    COMPLETE MY REGISTRATION
                  </button>
                  <p className="text-center my-2">
                    Already have an account!
                    <NavLink to="/login">
                      <span className="text-[#5e0aa0] font-semibold">
                        Login
                      </span>
                    </NavLink>
                  </p>
                </form>
              </div>
              <div className="w-full h-[5vh] absolute bottom-0 bg-[#e5e5e5] flex justify-center items-center">
                <div className="md:w-[32vw] flex justify-between">
                  <p className="mt-1 text-center">
                    (1) Enter your full name as it appears on CNIC
                  </p>

                  <p className="mt-1 text-center">
                    (2) Avoid the obvious like name or birthday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSquare />
    </div>
  );
};

export default SignUp;
