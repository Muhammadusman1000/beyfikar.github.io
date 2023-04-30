import React from "react";
import FooterSquare from "./FooterSquare";

const Aboutus = () => {
  return (
    <div>
      <div
        className="w-full h-[175vh]  sm:h-[145vh] md:h-[130vh] bg-cover xl:h-[110vh]"
        style={{ backgroundImage: "url('bg.svg')" }}
      >
        <div className="w-full absolute top-0 ">
          <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
        </div>
        <div className="w-full h-auto flex justify-center ">
          <div className="w-[78%] h-auto absolute top-[25vh] auto mt-10  py-10 px-5  bg-white shadow-lg">
            <p className="text-md font-semibold">Who We Are?</p>
            <p className="mt-2">
              Founded in 2022, Beyfikar set out to be a leading app providing
              easy work opportunities to service providers and convenient homes.
            </p>
            <p className="mt-3">
              We are embarking on the journey to launch our operations in all
              major cities across Pakistan like Karachi, Lahore, Islamabad,
              Peshawar, Quetta and Hyderabad.
            </p>
            <p className="mt-5 text-md font-semibold">Mission Statement</p>

            <p className="text-[#8647b7] text-md font-semibold mt-2">
              At Beyfikar, our mission is to:
            </p>
            <p className="mt-3">
              Provide a daily-life platform that connects service provider and
              service seekers Create easy gigs and opportunities for peoples
              locking to earn in a flexible, non-conventional (i.e. 9 to 5)
              setting. Provided convenience of outsourcing of services to senior
              citizens and differently-abled people from the comfort of their
              homes. Ensure accountability and transparency of transactions,
              ethics and communication in order to achieve full customer
              satisfaction. Respond effectivity to customer feedback and improve
              user experience
            </p>
            <p className="mt-5 text-md font-semibold">Who We Are?</p>
            <p className="mt-3">
              We want to revolutionize the way daily tasking is carried out in
              the country. At Beyfikar, every person is a team player and
              strives to contribute their potential to achieve full customer
              trust and reliance. We believe in our research, ideas, innovation,
              and subsequently, excellent customer services.
            </p>
            <p className="mt-5 text-md font-semibold">A Community Initiative</p>
            <p className="mt-5">
              Our ideas to empower every member of the nation with independence
              of employment, to give their skills and knowledge skyrocketing
              inflation that generates hopelessness. However, with a platform
              such as this, they have endless possibilities. This is how we
              envision building the sprit of community. The vast group that
              benefit from our platform range from electricians, plumber,
              masons, painters, gardeners, carpenters, janitors, barbers,
              tailors, mechanics, gardeners, carpenters, janitors, barbers,
              tailors, mechanics and henna artists, to teach repairers, tutors,
              contractors, architects, programmers, web designers, engineers,
              lawyers, marketing consultants and interior designers.
            </p>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default Aboutus;
