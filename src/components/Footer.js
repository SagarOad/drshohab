import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "@/assets/logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div class="bg-teal-500 py-6 md:flex relative z-50 mb-[-80px] items-center px-6 md:px-32 justify-between rounded-lg max-w-[1500px] mx-auto">
        <div class="md:flex items-center space-x-4">
          <Image src={logo} alt="Logo" class=" w-28 h-28 rounded-full" />
          <p class="text-white font-bold ml-14 text-[1.6rem]">
            Your path to pain-free living begins with a call.
          </p>
        </div>
        <div class="bg-black text-white p-3 rounded-lg flex items-center space-x-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.09-.27 11.33 11.33 0 0 0 3.58.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.78a1 1 0 0 1 1 1 11.33 11.33 0 0 0 .59 3.58 1 1 0 0 1-.27 1.09z"></path>
          </svg>
          <span>+92 (332) 197-7111</span>
        </div>
      </div>

      <div className=" bg-[#021A42] pb-14 pt-52">
        <div className=" max-w-[1500px] px-6 mx-auto pb-4 border-b-2 border-[#ffffff5e]">
          <div className=" md:grid grid-cols-12">
            <div className=" col-span-3 flex flex-col items-start">
              <div>
                <h2 className=" text-[2rem] leading-10 text-white">
                  Discover excellence in orthopedic care at
                  <span className=" text-[#49A5F4] font-bold">
                    {" "}
                    Dr. Shohab Hyder Shaikh's{" "}
                  </span>{" "}
                  clinic.
                </h2>
              </div>
              <div className=" flex text-[28px] mb-14 md:mb-0 mt-3 text-white">
                <FaFacebook className=" mx-2" />
                <FaInstagram className=" mx-2" />
                <FaTwitterSquare className=" mx-2" />
                <FaLinkedin className=" mx-2" />
              </div>
            </div>
            <div className=" col-span-3 md:mx-12 mx-0">
              <div>
                <h2 className=" text-[22px] font-semibold mb-6 text-[#49A5F4]">
                  Quick Links
                </h2>
                <ul className=" text-white text-[17px]">
                  <li className=" mb-2">Home</li>
                  <li className=" mb-2">Meet Dr. Shohab</li>
                  <li className=" mb-2">Success Gallery</li>
                  <li className=" mb-2">Book an Appointment</li>
                  <li className=" mb-2">Refund policy</li>
                </ul>
              </div>
            </div>
            <div className=" col-span-3 md:mx-12 mx-0">
              <div>
                <h2 className=" text-[22px] font-semibold mb-6 text-[#49A5F4]">
                  Our Expertise
                </h2>
                <ul className=" text-white text-[17px]">
                  <li className=" mb-2">Hip and Knee Surgery</li>
                  <li className=" mb-2">Regenerative Therapies</li>
                  <li className=" mb-2">Arthroscopy (Keyhole Surgery)</li>
                  <li className=" mb-2">Sports Injuries Management</li>
                  <li className=" mb-2">Complex Bone Fractures (Trauma)</li>
                  <li className=" mb-2">Masculoskeleton Solutions</li>
                </ul>
              </div>
            </div>
            <div className=" col-span-3 md:mx-12 mx-0">
              <div>
                <h2 className=" text-[22px] font-semibold mb-6 text-[#49A5F4]">
                  Clinic & Hospital
                </h2>
                <ul className=" text-white text-[17px]">
                  <li className=" mb-2">Karachi Medicos & Radiology Centre.</li>
                  <li className=" mb-2">Bone Care Trauma Centre.</li>
                  <li className=" mb-2">Hill Park General Hospital.</li>
                  <li className=" mb-2">Hashim Medical City Hospital.</li>
                  <li className=" mb-2">RIMS Trauma Hospital.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:flex justify-between px-6 items-center max-w-[1500px] mx-auto mt-8">
          <div>
            <p className="text-white mb-3 md:mb-0 text-[17px]">
              Design and Developed by Fame Business Solutions .com
            </p>
          </div>
          <div>
            <p className="text-white text-[17px]">
              © 2023{" "}
              <span className="text-[#49A5F4]">Dr. Shohab Hyder Shaikh's </span>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
