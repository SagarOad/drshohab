import React from "react";
import Link from "next/link";

const ServiceGridWhite = () => {
  return (
    <div className=" bg-white mx-auto py-16">
      <div className="max-w-[1500px] mx-auto">
        <div className=" w-[80%] mx-auto">
          <h2 className=" text-[#6ec1e4] mb-6 font-medium text-[2.4rem] text-center">
            Our Expertise
          </h2>
          <p className=" text-center text-black text-[21px]">
            At our Orthopaedic clinic, we pride ourselves on delivering a
            comprehensive range of services tailored to meet your unique
            Orthopaedic needs.
            <span className=" font-bold text-black">
              {" "}
              Dr. Shohab Hyder Shaikh{" "}
            </span>
            and our dedicated team are committed to provide personalized and
            advanced care to enhance your Orthopaedic well-being.
          </p>
        </div>
        <div className="md:grid grid-cols-12">
          <div className=" col-span-4 hip-joint-surgery rounded-2xl flex justify-end items-end">
            <div className=" bg-white border-2 border-[#0000003b] w-[88%] relative rounded-[12px] mb-[-46px] ml-auto px-9 py-6">
              <button className=" text-white bg-[#28B6F6] font-medium absolute right-0 top-[-26px] text-[17px] p-3 rounded-lg">
                Get Appointment
              </button>
              <h2 className=" text-[1.5rem] font-medium leading-8">
                Hip & Knee Joint Replacement Surgery
              </h2>
              <p className=" text-[18px] my-8">
                Experience precision and expertise in hip & knee joint
                replacement surgeries, including total joint replacement and
                arthroplasty.
              </p>
              <Link
                href="/KneeHipSurgery"
                className="text-blue-600 font-medium text-[19px]"
              >
                Read more..
              </Link>
            </div>
          </div>
          <div className=" col-span-4 regenerative-therapies-bg rounded-2xl flex justify-end items-end">
            <div className=" bg-white border-2 border-[#0000003b] w-[88%] relative rounded-[12px] mb-[-46px] ml-auto px-9 py-6">
              <button className=" text-white bg-[#28B6F6] font-medium absolute right-0 top-[-26px] text-[17px] p-3 rounded-lg">
                Get Appointment
              </button>
              <h2 className=" text-[1.5rem] font-medium leading-8">
                Regenerative Therapies
              </h2>
              <p className=" text-[18px] my-8">
                Explore innovative regenerative treatments designed to stimulate
                healing and accelerate recovery.
              </p>
              <Link
                href="/RegenerativeTherapies"
                className="text-blue-600 font-medium text-[19px]"
              >
                Read more..
              </Link>
            </div>
          </div>
          <div className=" col-span-4 arthroscopy-bg rounded-2xl flex justify-end items-end">
            <div className=" bg-white border-2 border-[#0000003b] w-[88%] relative rounded-[12px] mb-[-46px] ml-auto px-9 py-6">
              <button className=" text-white bg-[#28B6F6] font-medium absolute right-0 top-[-26px] text-[17px] p-3 rounded-lg">
                Get Appointment
              </button>
              <h2 className=" text-[1.5rem] font-medium leading-8">
                Arthroscopy (Keyhole Surgery)
              </h2>
              <p className=" text-[18px] my-8">
                Benefit from minimally invasive arthroscopic procedures for the
                diagnosis and treatment of joint-related issues.
              </p>
              <Link
                href="/ArthroscopyKeyholeSurgery"
                className="text-blue-600 font-medium text-[19px]"
              >
                Read more..
              </Link>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-12">
          <div className=" col-span-4 sports-injury-bg rounded-2xl flex justify-end items-end">
            <div className=" bg-white border-2 border-[#0000003b] w-[88%] relative rounded-[12px] mb-[-46px] ml-auto px-9 py-6">
              <button className=" text-white bg-[#28B6F6] font-medium absolute right-0 top-[-26px] text-[17px] p-3 rounded-lg">
                Get Appointment
              </button>
              <h2 className=" text-[1.5rem] font-medium leading-8">
                Sports Injuries Management
              </h2>
              <p className=" text-[18px] my-8">
                Receive specialized care for sports-related injuries, ranging
                from fractures to ligament and tendon issues.
              </p>
              <Link
                href="/SportsInjuryManagement"
                className="text-blue-600 font-medium text-[19px]"
              >
                Read more..
              </Link>
            </div>
          </div>
          <div className=" col-span-4 complex-bone-fracture rounded-2xl flex justify-end items-end">
            <div className=" bg-white border-2 border-[#0000003b] w-[88%] relative rounded-[12px] mb-[-46px] ml-auto px-9 py-6">
              <button className=" text-white bg-[#28B6F6] font-medium absolute right-0 top-[-26px] text-[17px] p-3 rounded-lg">
                Get Appointment
              </button>
              <h2 className=" text-[1.5rem] font-medium leading-8">
                Complex Bone Fractures (Trauma)
              </h2>
              <p className=" text-[18px] my-8">
                Trust in our experience in managing complex bone fractures
                resulting from trauma. Dr. Shohab employs advanced techniques.
              </p>
              <Link
                href="/ComplexBoneFractures"
                className="text-blue-600 font-medium text-[19px]"
              >
                Read more..
              </Link>
            </div>
          </div>
          <div className=" col-span-4 musculoskeletal-bg rounded-2xl flex justify-end items-end">
            <div className=" bg-white border-2 border-[#0000003b] w-[88%] relative rounded-[12px] mb-[-46px] ml-auto px-9 py-6">
              <button className=" text-white bg-[#28B6F6] font-medium absolute right-0 top-[-26px] text-[17px] p-3 rounded-lg">
                Get Appointment
              </button>
              <h2 className=" text-[1.5rem] font-medium leading-8">
                Musculoskeletal Solutions
              </h2>
              <p className=" text-[18px] my-8">
                Holistic approach to Musculoskeletal health, a spectrum of
                conditions affecting muscles, bones, joints, ligaments, and
                tendons.
              </p>
              <Link
                href="/MusculoskeletalSolutions"
                className="text-blue-600 font-medium text-[19px]"
              >
                Read more..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridWhite;
