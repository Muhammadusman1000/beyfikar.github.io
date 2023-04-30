import React from "react";
import FooterSquare from "../menu buttons/FooterSquare";

const PageName2 = () => {
  return (
    <div className="w-full h-[100vh]">
      <img src="bg.svg" alt="" className="w-full h-full bg-cover" />
      <div className="w-full absolute top-0">
        <div className="w-[78%] h-2 bg-[#5e0aa0] mx-auto "></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[78%] absolute top-[20vh] h-56 mt-10">
          <p className="text-md font-semibold">Page Title</p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            risus vitae lectus ullamcorper dignissim gravida non nisi. Etiam
            molestie vel nibh dignissim fermentum. Nulla ultrices pellentesque
            mi.
          </p>
          <p className="mt-5">
            Nullam eget aliquam lectus. Sed maximus sagittis mauris, a dignissim
            sapien pharetra eget. Quisque convallis leo at nisl ultrices
            dignissim.
          </p>
        </div>
      </div>
      <FooterSquare />
    </div>
  );
};

export default PageName2;
