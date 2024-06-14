import React from "react";
import bone from "../assets/bone.webp";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";

const Techniques = () => {
  return (
    <div className=" techniques py-20">
      <div className=" max-w-[1500px] mx-auto">
        <div className=" md:grid grid-cols-12">
          <div className=" col-span-6 flex justify-center items-center">
            <div>
              <Image className=" relative z-[99]" src={bone} />
            </div>
          </div>
          <div className=" col-span-6 relative z-[99] flex items-center">
            <div className=" mx-6">
              <h2 className="text-[2.7rem] mb-2 font-bold relative text-white">
                Innovative <span className=" text-[#49A5F4]">MIS</span>{" "}
                Technique
              </h2>
              <p className="text-white text-[21px]">
                Experience a revolutionary approach to Orthopaedic interventions
                through our cutting-edge Minimally Invasive Surgery (MIS)
                technique. At our clinic, we prioritize your well-being by
                embracing the latest advancements in surgical methods, ensuring
                precision, minimal discomfort, and faster recovery.
              </p>
              <ul className="text-white text-[18px] mt-4">
                <li className=" my-2 flex items-center">
                  <FaDotCircle />
                  <p className=" ml-5">
                    Precision and Accuracy for Minimized Scarring
                  </p>
                </li>
                <li className=" my-2 flex items-center">
                  <FaDotCircle />
                  <p className=" ml-5">
                    Reduced Blood Loss, Less Pain, and Discomfort
                  </p>
                </li>
                <li className=" my-2 flex items-center">
                  <FaDotCircle />
                  <p className=" ml-5">Lowered Risk of Infections</p>
                </li>
                <li className=" my-2 flex items-center">
                  <FaDotCircle />
                  <p className=" ml-5">
                    Quicker Recovery with Early Mobilization
                  </p>
                </li>
                <li className=" my-2 flex items-center">
                  <FaDotCircle />
                  <p className=" ml-5">
                    Expedited Recovery and Quick Rehabilitation
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
