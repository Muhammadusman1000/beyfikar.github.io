import FooterSquare from "../menu buttons/FooterSquare";
import UploadImg from "../pics/uploadimg.jpg";
// import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik } from "formik";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(3).required("please enter your name"),
  skills: Yup.string().min(3).required("please enter you skills"),
  mobiler: Yup.string()
    .min(11)
    .max(13)
    .required("please enter your phone number"),
  email: Yup.string().required("please write valid email address"),
  cnic: Yup.string()
    .min(13)
    .max(13)
    .required("pleae enter your Cnic without dashes"),
  location: Yup.string().min(3).required("please enter your city name"),
  aboutme: Yup.string()
    .min(150)
    .required("please weite something about yourself"),
});

// const initialValues = [
//   {
//     name: "",
//     skills: "",
//     mobiler: "",
//     email: "",
//     cinc: "",
//     location: "",
//     aboutme: "",
//   },
// ];

const EditProfile = () => {
  //   const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
  //     useFormik({
  //       initialValues: initialValues,
  //       validationSchema: RegistrationSchema,
  //       onSubmit: (values) => {
  //         console.log(values);
  //       },
  //     });

  return (
    <div
      className="w-full h-full bg-cover"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full h-[195vh] md:h-[120vh]">
        <div className="w-full h-auto absolute top-[23vh]">
          <div className="w-[80%] xs:flex-row md:flex md:justify-between h-[75vh] mx-auto">
            <aside className="w-full mb-5 md:mb-0 md:w-[27%] p-5 bg-white shadow-lg">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-20 h-20 rounded-full mx-auto"
                />

                <div className="w-[90%] mx-auto relative mt-5 h-[400px] border-2 border-gray-500 border-dashed">
                  <p className="font-Roboto_Regular mt-2 text-center">
                    Drag and Drop Image Here
                  </p>
                  <div className="w-full h-[75%] flex justify-center items-center">
                    <img src={UploadImg} alt="" className="" />
                  </div>
                  <div className="absolute bottom-2 w-full flex justify-center items-center ">
                    <input
                      type="file"
                      className="file:bg-[#65666a] file:text-white w-24 h-12 p-2"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[90%] mt-5 mx-auto ">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#5E0AA0] text-white  mx-auto"
                >
                  Save Profile
                </button>
                <button
                  type="cancel"
                  className="w-full h-12 mt-5 text-[#5E0AA0] border-[1px] border-black "
                >
                  Cancel
                </button>
              </div>
            </aside>
            {/* ---------------main second grid */}
            <section className="w-full md:w-[70%] bg-white shadow-lg py-10">
              <div className="w-full  h-full flex justify-center items-center">
                <Formik
                  validationSchema={RegistrationSchema}
                  initialValues={{
                    name: "",
                    skills: "",
                    mobiler: "",
                    email: "",
                    cinc: "",
                    location: "",
                    aboutme: "",
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    handleBlur,
                    touched,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <form
                      className="w-full px-10 md:px-0 md:w-[50%] h-[115%] mt-20"
                      onSubmit={handleSubmit}
                    >
                      <div className="w-full relative">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          My Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-12 tracking-[3px] px-3 text-black text-opacity-50"
                        />

                        {errors.name && touched.name ? (
                          <p className="text-[10px] text-red-500">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full relative mt-5">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          My Skills
                        </label>
                        <input
                          type="text"
                          name="skills"
                          id="skills"
                          value={values.skills}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-12 tracking-[3px] px-3 text-black text-opacity-50"
                        />
                        {errors.skills && touched.skills ? (
                          <p className="text-[10px] text-red-500">
                            {errors.skills}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full relative mt-5">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          Mobiler
                        </label>
                        <input
                          type="text"
                          name="mobiler"
                          id="mobiler"
                          value={values.mobiler}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-12 tracking-[3px] px-3 text-black text-opacity-50"
                        />
                        {errors.mobiler && touched.mobiler ? (
                          <p className="text-[10px] text-red-500">
                            {errors.mobiler}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full relative mt-5">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-12 tracking-[3px] px-3 text-black text-opacity-50"
                        />
                        {errors.email && touched.email ? (
                          <p className="text-[10px] text-red-500">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full relative mt-5">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          CNIC
                        </label>
                        <input
                          type="text"
                          name="cnic"
                          id="cnic"
                          value={values.cnic}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-12 tracking-[3px] px-3 text-black text-opacity-50"
                        />
                        {errors.cnic && touched.cnic ? (
                          <p className="text-[10px] text-red-500">
                            {errors.cnic}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full relative mt-5">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          value={values.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-12 tracking-[3px] px-3 text-black text-opacity-50"
                        />
                        {errors.location && touched.location ? (
                          <p className="text-[10px] text-red-500">
                            {errors.location}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full relative mt-5">
                        <label className="absolute -mt-3 left-2 bg-white font-Roboto_Regular text-[16px] text-opacity-50 text-black">
                          About Me
                        </label>
                        <textarea
                          type="text"
                          name="aboutme"
                          id="aboutme"
                          value={values.aboutme}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-2 border-black border-opacity-40 w-full h-36 p-3 tracking-[3px] text-black text-opacity-50"
                        />
                        {errors.aboutme && touched.aboutme ? (
                          <p className="text-[10px] text-red-500">
                            {errors.aboutme}
                          </p>
                        ) : null}
                      </div>
                      <button type="submuit">submit</button>
                    </form>
                  )}
                </Formik>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default EditProfile;
