import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us pt-20 pb-24">
      <div className=" max-w-[1500px] mx-auto">
        <h2 className="text-[2.7rem] px-6 text-center mb-8 font-bold relative text-white">
          Why <span className=" text-[#49A5F4]">Choose</span> Us
        </h2>
        <div className="md:grid grid-cols-12">
          <div className=" col-span-3 my-2">
            <div className=" bg-white px-4 py-16 mx-2 h-[250px] rounded-2xl">
              <h2 className=" text-[22px] text-black font-bold mb-3 text-center">
                Expertise
              </h2>
              <p className="text-black text-[18px] font-medium text-center">
                Dr. Shohab’s unmatched orthopedic proficiency.
              </p>
            </div>
          </div>
          <div className=" col-span-3 my-2">
            <div className=" bg-white px-4 py-16 mx-2 h-[250px] rounded-2xl">
              <h2 className=" text-[22px] text-black font-bold mb-3 text-center">
                Holistic Solutions
              </h2>
              <p className="text-black text-[18px] font-medium text-center">
                Comprehensive musculoskeletal care tailored for you.
              </p>
            </div>
          </div>
          <div className=" col-span-3 my-2">
            <div className=" bg-white px-4 py-16 mx-2 h-[250px] rounded-2xl">
              <h2 className=" text-[22px] text-black font-bold mb-3 text-center">
                Personalized Attention
              </h2>
              <p className="text-black text-[18px]  font-medium text-center">
                Your unique needs are our priority.
              </p>
            </div>
          </div>
          <div className=" col-span-3 my-2">
            <div className=" bg-white px-4 py-16 mx-2 h-[250px] rounded-2xl">
              <h2 className=" text-[22px] text-black font-bold mb-3 text-center">
                Innovation
              </h2>
              <p className="text-black text-[18px] font-medium text-center">
                Embrace cutting-edge techniques for advanced care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
