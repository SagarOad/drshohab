import React from "react";
import ot from "@/assets/ot.webp";
import Image from "next/image";

const Experience = () => {
  return (
    <div className=" experience">
      <div className=" max-w-[1700px] px-6 py-24 md:grid grid-cols-12 mx-auto">
        <div className=" col-span-6">
          <div>
            <Image src={ot} className=" w-[100%]" />
          </div>
        </div>
        <div className=" col-span-6 flex items-center md:pl-12 pl-0">
          <div>
            <h2 className=" text-[#49a5f4] mb-6 text-[2.6rem] font-semibold">
              Experience
            </h2>
            <p className=" text-white">
              Dr. Shohab has spent 14 years in England in this field of Trauma &
              Orthopaedic surgery, performing more than 5000 surgical
              procedures. He is an active member of the Royal College of
              Surgeons and frequently visits the United Kingdom to work as an
              orthopaedic surgeon, keeping himself updated with modern
              technology. He has been working in Pakistan for more than 6 years
              as a lower limb specialist in Karachi and Hyderabad. Dr. Shohab
              has established the Lower Limb Arthroplasty (Total Hip & Knee
              Joint Replacement) unit at Bone Care Trauma Center, Hyderabad. He
              has performed over 2000 joint replacement surgeries since his
              arrival in Pakistan. Additionally, he has conducted more than 1500
              successful regenerative procedures (stem cell therapies and PRP)
              for arthritis of joints, tendons, and ligament injuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
