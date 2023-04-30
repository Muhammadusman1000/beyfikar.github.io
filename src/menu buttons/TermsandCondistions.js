import React from "react";
import FooterSquare from "./FooterSquare";

const TermsandCondistions = () => {
  return (
    <div
      className="w-full h-[275vh] sm:h-[205vh] md:h-[170vh] xl:h-[190vh] 2xl:h-[160vh]"
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      <div className="w-full  absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full h-[275vh] sm:h-[205vh] md:h-[170vh] xl:h-[190vh] 2xl:h-[160vh] flex justify-center ">
        <div className="w-[80%] h-auto py-10 absolute top-[20vh] mt-10 bg-white shadow-lg px-3 md:px-5 md:py-10">
          <div className="xl:w-[50%] mx-auto ">
            <p className="text-[24px] font-Roboto_Bold font-semibold text-center">
              Free website terms and conditions: cover 1
            </p>
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">1.</p>
              <p className="text-lg">
                This template legal document was produced and pubished by SEQ
                Legal LLP.
              </p>
            </div>
            {/* ------------------------------------------------------- */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">2.</p>
              <p className="text-lg w-[95%]">
                We control the copyright in this template, and you may only use
                ths template In accordance with the llcensing provisions in our
                terms and conditions. Those: Iicensing provisions include an
                obligation to retain the SEQ Legal credit incorporated into the
                template.
              </p>
            </div>
            {/* ---------------------------------------- */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">3.</p>
              <p className="text-lg w-[95%]">
                The current version of our terms and conditions is available at:
                <a
                  href="http://www.seqlegal.com/our-terms-and-condions."
                  className="text-indigo-500 underline"
                >
                  http://www.seqlegal.com/our-terms-and-condions.
                </a>
              </p>
            </div>
            {/* -------------------------------------- */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">3.</p>
              <p className="text-lg w-[95%]">
                If you would like t se this template without the SEQ Legal
                credit, you can purchase 3 licence to do 50 at:
                <a
                  href="http://www.website-contracts.co.uk/seqlegallicenses.html"
                  className="text-indigo-500 underline"
                >
                  http://www.website-contracts.co.uk/seglegallicenses.html
                </a>
              </p>
            </div>
            {/* ------------------------------------- */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">5.</p>
              <p className="text-lg w-[95%]">
                You will need to edit this template before use. Guidance notes
                to help you do so are set out at the end of the template. During
                the editing process, you Should delete those guidance notes and
                ths cover sheet. Square brackets In the body of the document
                indicate areas that require editorial attention. "ORs" in the
                body of the document indicate alternatve provisions. By the end
                of the editing process, there shoud be no square bracket left in
                the bady of the document, and only one alternative from each set
                of alteratives should remain. Elements may be specified as
                optional in the accompanying notes, but that does not mean that
                they are i al cases remavabie. Depending upon the circumstances,
                an optonal element may be: (1) required by law; or (i) necessary
                to ensure that tne document is internally consistent.
              </p>
            </div>
            {/* ------------------------------------- */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">6.</p>
              <p className="text-lg w-[95%]">
                You will need to edit this template before use. Guidance notes
                to help you do so are set out at the end of the template. During
                the editing process, you Should delete those guidance notes and
                ths cover sheet. Square brackets In the body of the document If
                you have any doubts about the editing or use of this template,
                you should Seek professional legal advice.
              </p>
            </div>
            {/* ------------------------------------ */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">7.</p>
              <p className="text-lg w-[95%]">
                You may be abl to get free legal guidance using our public QBA
                system, avaiable at:
                <a
                  href="http://www.seqlegal.com/questions"
                  className="text-indigo-500 underline"
                >
                  http://www.seqlegal.com/questions
                </a>
              </p>
            </div>
            {/* --------------------------------------- */}
            <div className="flex mt-5">
              <p className="w-[7%] text-xl">8.</p>
              <p className="text-lg w-[95%]">
                8. You can request a quote for legal services (including the
                adaptation of review of legal document produced from this
                template) using this form:
                <a
                  href="http://www.seqlegal.com/request-quote."
                  className="text-indigo-500 underline"
                >
                  http://www.seqlegal.com/request-quote.
                </a>
              </p>
            </div>
            {/* --------------------------------------- */}
          </div>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default TermsandCondistions;
