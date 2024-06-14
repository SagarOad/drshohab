import React from "react";
import drspeech from "@/assets/drspeech.webp";
import Image from "next/image";

const PioneeringTherapy = () => {
  return (
    <div>
      <div className=" max-w-[1500px] px-6 py-24 mx-auto">
        <div className=" md:grid grid-cols-12">
          <div className=" col-span-6 flex justify-center items-center">
            <div>
              <Image src={drspeech} className="w-[100%]" />
            </div>
          </div>
          <div className=" col-span-6 flex items-center">
            <div>
              <h2 className="text-black mb-8 leading-10 text-[2.1rem] font-semibold">
                Pioneering <br />
                <span className=" text-[#49A5F4] font-bold">
                  Regenerative Therapies
                </span>
              </h2>
              <p>
                Dr. Shohab is a trailblazer in regenerative therapies,
                introducing advanced treatments such as PRP (Platelet-Rich
                Plasma), Lipogems (Stem Cell Therapy), and a combination of High
                Molecular Weight Hyaluronic Acid (HMWHA) injections. These
                therapies offer minimally invasive solutions for arthritis,
                sports injuries, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PioneeringTherapy;
