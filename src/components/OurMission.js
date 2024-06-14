import React from "react";
import specialization from "@/assets/specializations.webp"
import Image from "next/image";

const OurMission = () => {
  return (
    <div>
      <div className=" max-w-[1500px] px-6 py-12 mx-auto">
        <div className=" md:grid grid-cols-12">
          <div className=" col-span-6 flex items-center">
            <div>
              <h2 className="text-black text-[2.1rem] mb-3 font-semibold">
                Our <span className=" text-[#49A5F4] font-bold">Mission</span>
              </h2>
              <p>
                At Dr. Shohab’s Orthopedic Clinic, our mission is to provide
                patient-centric, cutting-edge orthopaedic care with a focus on
                individualized treatment plans. We are dedicated to enhancing
                the quality of life for our patients through advanced surgical
                techniques, regenerative therapies, and holistic wellness
                approaches.
              </p>
            </div>
          </div>
          <div className=" col-span-6">
            <div>
              <Image src={specialization} className=" w-[100%]" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
