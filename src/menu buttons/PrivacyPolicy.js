import React from "react";
import FooterSquare from "./FooterSquare";
import { RxDotFilled } from "react-icons/rx";

const PrivacyPolicy = () => {
  return (
    <div
      className="w-full h-[200vh] sm:h-[150vh] lg:h-[200vh] xl:[150vh] 2xl:h-[135vh]"
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full h-[200vh] sm:h-[150vh] lg:h-[200vh] xl:h-[150vh] 2xl:h-[135vh] flex justify-center">
        <div className="w-[95%] lg:w-[80%]  h-auto bg-white p-4 shadow-lg absolute top-[20vh] mt-10">
          <div className="lg:w-[55%] mx-auto py-10">
            <p className="text-[21px] font-Roboto_Regular font-semibold">
              Incorporating Key Elements for Success
            </p>
            <p className="mt-5 text-[16px] font-Roboto_Regular">
              Even though we highly recommend the use of a Privacy Policy
              template or tool useful to know some specific elements this page
              should include.
            </p>
            <p className="mt-5 text-[16px] font-Roboto_Regular">
              While we already touched on some of these, here's alist of key
              elements every website Privacy Policy page should have:
            </p>
            {/* ----------------------------------------------------------------------------------- */}
            <ul className="md:w-[90%] mx-auto">
              <li className="mt-5 text-[16px] font-Roboto_Regular flex justify-between ">
                <p className="w-[5%] hidden md:block">
                  <RxDotFilled />
                </p>
                <p className="w-[95%] font-Roboto_Regular font-semibold ">
                  What Information the Business Collects:
                  <span className="font-normal ml-2">
                    Customers wil need to know exactly what information of
                    theirs you plan to keep. Be thorough, and double-check the
                    specifics with your website builder and analytics service.
                    Information your website might collect can range from a
                    visitor's email address, age. gender, location, and credit
                    card number to other, more sensitive data
                  </span>
                </p>
              </li>
              {/* ---------------------------------------------------------------------------------------------------------- */}
              <li className="mt-5 text-[16px] font-Roboto_Regular flex justify-between ">
                <p className="w-[5%] hidden md:block">
                  <RxDotFilled />
                </p>
                <p className="font-Roboto_Regular font-semibold w-[95%]">
                  How the Business Uses That Information:
                  <span className="font-normal ml-2">
                    This document should state how you and Your website provider
                    will use the collected data. For example, do you plan to use
                    it for analytics to get a better understanding of your
                    target audience? Will you use it to simply collect emails
                    for a newsletter or to distribute specific coupons and
                    updates? Clearly stating how you'l use ths information can
                    help better prepare customers for what to expect when
                    interacting with your business website.
                  </span>
                </p>
              </li>

              {/* ------------------------------------------------------------------------- */}

              <li className="mt-5 text-[16px] font-Roboto_Regular flex justify-between ">
                <p className="w-[5%] hidden md:block">
                  <RxDotFilled />
                </p>
                <p className=" w-[95%] font-Roboto_Regular font-semibold ">
                  If the Business Shares That Information:
                  <span className="ml-2 font-normal">
                    If you use a third-party service for an app, will your
                    website send your customer data to that third party? If so,
                    you must disclose this in your Privacy Policy along with
                    that third party's policies.
                  </span>
                </p>
              </li>
              {/* ----------------------------------------------------------------------- */}
              <li className="mt-5 text-[16px] font-Roboto_Regular flex justify-between ">
                <p className="w-[5%] hidden md:block">
                  <RxDotFilled />
                </p>
                <p className=" w-[95%] font-Roboto_Regular font-semibold ">
                  How the Business Stores That Information:
                  <span className="ml-2 font-normal">
                    Clearly discuss how and where your business stores user data
                    — and how you'l protect that data over time. An information
                    hack isn't fun for anyone, sa help your customers rest easy
                    knowing how you'll safeguard their information.
                  </span>
                </p>
              </li>
              {/* --------------------------------------------------------------------------- */}
              <li className="mt-5 text-[16px] font-Roboto_Regular flex justify-between ">
                <p className="w-[5%] hidden md:block">
                  <RxDotFilled />
                </p>
                <p className="w-[95%] font-Roboto_Regular font-semibold ">
                  How the Business Will Notify Users of Privacy Policy Changes:
                  <span className="font-normal ml-2">
                    Explain how youl update customers and visitors about any
                    changes to this policy.
                  </span>
                </p>
              </li>
              {/* ------------------------------------------------------------------------------- */}
              <li className="mt-5 text-[16px] font-Roboto_Regular flex justify-between ">
                <p className="w-[5%] hidden md:block">
                  <RxDotFilled />
                </p>
                <p className="w-[95%] font-Roboto_Regular font-semibold">
                  How Users Can Update Their Information:
                  <span className="font-normal ml-2">
                    Let your customers know how to update their information with
                    you and any third-party provider that supports certain
                    functionality on your website.
                  </span>
                </p>
              </li>
            </ul>
            {/* ------------------------------------------------------------------------------- */}
            <p className="mt-5">
              While this s a fairy comprehensive lst, these might not be all the
              key elements you need. Different countries require businesses to
              include different clauses in their Privacy Policies. We strongly
              recommend you have a lawyer review your Privacy Policy template to
              ensure it's as accurate and as detailed as your business requires.
            </p>
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default PrivacyPolicy;
