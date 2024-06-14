import React from "react";

const AboutBanner = () => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto py-24 px-6 md:px-28">
        <div>
          <h2 className=" text-[3rem] mb-4 text-center text-black font-medium">
            About{" "}
            <span className=" font-extrabold text-[#49A5F4]">
              Dr. Shohab Hyder Shaikh
            </span>
          </h2>
          <p className=" text-center">
            Dr. Shohab has vast experience in this field of Orthopaedic Surgery.
            He is a specialist in lower limb (lower back, hip joints, knee
            joints, and foot & ankle). His clinic provides comprehensive
            solutions, ranging from injections to joint replacement, as well as
            stem cell therapy and PRP treatment for arthritis, muscles, tendons,
            and ligament injuries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
