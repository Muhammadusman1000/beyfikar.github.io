import { Formik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .max(15, "your password caractor not more than 15"),
});

function Login() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover"
        style={{ backgroundImage: "url('bg.png')" }}
      >
        <div className="w-full absolute top-0">
          <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
        </div>

        <div className="w-full h-[65vh] absolute top-[25vh] flex justify-center items-center ">
          <div className="w-[78%] h-full bg-white shadow-lg relative">
            {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
            <div className="w-full border-[1px] border-b-slate-200 mt-2 px-5">
              <p className="text-center text-4xl text-[#5e0aa0] font-bold uppercase pt-10">
                Login
              </p>
              <p className="text-center pt-2">
                Sign in with your email and password, or social media to
                continue
              </p>
              <div className="w-full md:w-[16vw] mx-auto mt-3 md:mb-5 h-16 flex justify-between items-center ">
                <button
                  type="button"
                  className=" rounded-md flex justify-between items-center px-2  w-[40%] h-10 shadow-lg border-2 border-gray-300 shadow-gray-300"
                >
                  <p>Login with</p>
                  <img src="googlelogo.png" className="w-4" alt="" />
                </button>
                <button
                  type="button"
                  className="rounded-md flex justify-between items-center p-2  w-[40%] h-10 shadow-lg border-2 border-gray-300 shadow-gray-300 bg-[#3a559f] text-white"
                >
                  <p>Login with</p>
                  <img src="facebooklogo.png" className="w-4" alt="" />
                </button>
              </div>
            </div>

            <Formik
              validationSchema={schema}
              initialValues={{
                email: "usmanidrees100@gmail.com",
                password: "123456789",
              }}
              onSubmit={(values) => {
                // Alert the input values of the form that we filled
                alert(JSON.stringify(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <div className="login w-full mb-5 h-[30vh] flex justify-center items-center   ">
                  <div className="form ">
                    {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                    <form
                      noValidate
                      onSubmit={handleSubmit}
                      className="flex justify-center items-center flex-col"
                    >
                      {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                      <div className="flex mt-10 justify-between items-center border-[1] border-gray-400 h-10 mb-5 rounded-sm">
                        <img
                          src="emailicon.svg"
                          alt=""
                          className="border-2 border-gray-300 border-r-0 p-[10px] "
                        />
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Enter email "
                          className="form-control inp_text h-10 border-2 border-gray-300 w-full md:w-[20vw] px-5 tracking-widest text-xl"
                          id="email"
                        />
                      </div>
                      {/* If validation is not passed show errors */}
                      <p className="error">
                        {errors.email && touched.email && errors.email}
                      </p>
                      {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                      <div className="flex justify-between items-center border-[1] border-gray-400 h-10 mb-5 rounded-sm">
                        <img
                          src="lockicon.svg"
                          alt=""
                          className="border-2 border-gray-300 border-r-0 p-[10px] "
                        />
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="Enter password"
                          className="form-control inp_text h-10 border-2 border-gray-300 w-full md:w-[20vw] tracking-widest px-5 text-xl"
                        />
                      </div>
                      {/* If validation is not passed show errors */}
                      <p className="error">
                        {errors.password && touched.password && errors.password}
                      </p>
                      {/* Click on submit button to submit the form */}
                      <div className="w-full md:w-[22vw] h-8  px-1 flex justify-between items-center text-[18px]">
                        <div>
                          <p className="text-xs">
                            Don't have an account!
                            <NavLink to="/signup">
                              <span className="text-[#5e0aa0] font-semibold ml-1 font-Roboto_Bold ">
                                Register
                              </span>
                            </NavLink>
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="hover:underline text-right text-xs cursor-pointer"
                        >
                          Forgot Password ?
                        </button>
                      </div>
                      <button
                        type="submit"
                        className=" w-full md:w-[22vw] h-10 uppercase rounded-sm bg-[#ffca18] m-2"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Formik>
            <div className="w-full h-20 absolute bg-[#e5e5e5] mt-24 flex justify-center items-center bottom-0">
              <div>
                <p className="mt-1 text-center">
                  By continuing your confirm that you agree with our
                </p>
                <NavLink to="/termsandCondistions">
                  <p className="mt-1 text-center text-[#5e0aa0]">
                    Term and Conditions
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
