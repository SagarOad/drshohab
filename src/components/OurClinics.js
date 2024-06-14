import React from "react";
import Image from "next/image";
import southCity from "@/assets/southCity.webp";
import karachiMedicos from "@/assets/karachi-medicos.webp";
import boneCare from "@/assets/bone-care.webp";
import hillPark from "@/assets/hillpark.webp";
import hashimHospital from "@/assets/hashimMedical.webp";
import rmis from "@/assets/rmis.webp";

const OurClinics = () => {
  return (
    <div>
      <div class="max-w-[1500px] mx-auto px-6 my-12">
        <div className=" border-b-2 pb-6">
          <h2 className="text-[2.7rem] mb-4 leading-[46px] font-bold relative text-black">
            Clinic And <br />
            <span className=" text-[#49A5F4] font-bold">
              Hospitals Locations
            </span>
          </h2>
          <p className="text-gray-600 text-[18px] font-medium">
            Discover Convenient Access to Orthopedic Excellence
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 py-[36px] bg-white rounded-lg shadow-md">
            <div>
              <div class="md:flex items-start">
                <Image
                  src={southCity}
                  alt="Clinic Logo"
                  class=" w-24 h-24 mr-12"
                />
                <div>
                  <h3 class="text-[28px] font-medium">South City Hospital</h3>
                  <a
                    href="#"
                    className="text-[#49A5F4] font-medium text-[22px]"
                  >
                    Karachi, Pakistan
                  </a>
                </div>
              </div>
              <p class="text-gray-600 text-[18px] mt-2">
                Conveniently situated in the heart of Karachi, our South City
                Hospital location provides a central hub for expert Orthopaedic
                care.
              </p>
              <div class="flex items-center mb-2 mt-4 text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a9.67 9.67 0 0 0-.9-3.2l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6a9.67 9.67 0 0 0-3.2-.9l-.3-2a1 1 0 0 0-1-.9h-2a1 1 0 0 0-1 .9l-.3 2a9.67 9.67 0 0 0-3.2.9l-1.6-1.6a1 1 0 0 0-1.4 1.4l1.6 1.6a9.67 9.67 0 0 0-.9 3.2l-2 .3a1 1 0 0 0-.9 1v2a1 1 0 0 0 .9 1l2 .3a9.67 9.67 0 0 0 .9 3.2l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6a9.67 9.67 0 0 0 3.2.9l.3 2a1 1 0 0 0 1 .9h2a1 1 0 0 0 1-.9l.3-2a9.67 9.67 0 0 0 3.2-.9l1.6 1.6a1 1 0 0 0 1.4-1.4l-1.6-1.6a9.67 9.67 0 0 0 .9-3.2l2-.3a1 1 0 0 0 .9-1v-2a1 1 0 0 0-.9-1l-2-.3zm-8 4.5a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
                +92 (300) 000-0000
              </div>
              <div class="flex items-center text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15v-4h-2v4H8v-6h8v6zm-6.41-8H6.8l5-4.5L16.8 9h-1.79L12 6.25z"></path>
                </svg>
                St-1 Shahrah-e-Firdousi, Block 3 Clifton, Karachi.
              </div>
            </div>
          </div>
          <div class="p-6 py-[36px] bg-white rounded-lg shadow-md">
            <div>
              <div class="md:flex items-start">
                <Image
                  src={karachiMedicos}
                  alt="Clinic Logo"
                  class=" w-24 h-24 mr-12"
                />
                <div>
                  <h3 class="text-[28px] font-medium">
                    Karachi Medicos & Radiology Centre
                  </h3>
                  <a
                    href="#"
                    className="text-[#49A5F4] font-medium text-[22px]"
                  >
                    Karachi, Pakistan
                  </a>
                </div>
              </div>
              <p class="text-gray-600 text-[18px] mt-2">
                Journey to musculoskeletal health begins at Karachi Medicos &
                Radiology Centre, where state-of-the-art facilities meet
                personalized care.
              </p>
              <div class="flex items-center mb-2 mt-4 text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a9.67 9.67 0 0 0-.9-3.2l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6a9.67 9.67 0 0 0-3.2-.9l-.3-2a1 1 0 0 0-1-.9h-2a1 1 0 0 0-1 .9l-.3 2a9.67 9.67 0 0 0-3.2.9l-1.6-1.6a1 1 0 0 0-1.4 1.4l1.6 1.6a9.67 9.67 0 0 0-.9 3.2l-2 .3a1 1 0 0 0-.9 1v2a1 1 0 0 0 .9 1l2 .3a9.67 9.67 0 0 0 .9 3.2l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6a9.67 9.67 0 0 0 3.2.9l.3 2a1 1 0 0 0 1 .9h2a1 1 0 0 0 1-.9l.3-2a9.67 9.67 0 0 0 3.2-.9l1.6 1.6a1 1 0 0 0 1.4-1.4l-1.6-1.6a9.67 9.67 0 0 0 .9-3.2l2-.3a1 1 0 0 0 .9-1v-2a1 1 0 0 0-.9-1l-2-.3zm-8 4.5a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
                +92 (300) 000-0000
              </div>
              <div class="flex items-center text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15v-4h-2v4H8v-6h8v6zm-6.41-8H6.8l5-4.5L16.8 9h-1.79L12 6.25z"></path>
                </svg>
                C-19D Street 5, Badar Commercial Area Defence, Karachi.
              </div>
            </div>
          </div>
          <div class="p-6 py-[36px] bg-white rounded-lg shadow-md">
            <div>
              <div class="md:flex items-start">
                <Image
                  src={boneCare}
                  alt="Clinic Logo"
                  class=" w-24 h-24 mr-12"
                />
                <div>
                  <h3 class="text-[28px] font-medium">
                    Bone Care Trauma Centre
                  </h3>
                  <a
                    href="#"
                    className="text-[#49A5F4] font-medium text-[22px]"
                  >
                    Karachi, Pakistan
                  </a>
                </div>
              </div>
              <p class="text-gray-600 text-[18px] mt-2">
                Conveniently situated in the heart of Karachi, our South City
                Hospital location provides a central hub for expert Orthopaedic
                care.
              </p>
              <div class="flex items-center mb-2 mt-4 text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a9.67 9.67 0 0 0-.9-3.2l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6a9.67 9.67 0 0 0-3.2-.9l-.3-2a1 1 0 0 0-1-.9h-2a1 1 0 0 0-1 .9l-.3 2a9.67 9.67 0 0 0-3.2.9l-1.6-1.6a1 1 0 0 0-1.4 1.4l1.6 1.6a9.67 9.67 0 0 0-.9 3.2l-2 .3a1 1 0 0 0-.9 1v2a1 1 0 0 0 .9 1l2 .3a9.67 9.67 0 0 0 .9 3.2l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6a9.67 9.67 0 0 0 3.2.9l.3 2a1 1 0 0 0 1 .9h2a1 1 0 0 0 1-.9l.3-2a9.67 9.67 0 0 0 3.2-.9l1.6 1.6a1 1 0 0 0 1.4-1.4l-1.6-1.6a9.67 9.67 0 0 0 .9-3.2l2-.3a1 1 0 0 0 .9-1v-2a1 1 0 0 0-.9-1l-2-.3zm-8 4.5a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
                +92 (300) 000-0000
              </div>
              <div class="flex items-center text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15v-4h-2v4H8v-6h8v6zm-6.41-8H6.8l5-4.5L16.8 9h-1.79L12 6.25z"></path>
                </svg>
                St-1 Shahrah-e-Firdousi, Block 3 Clifton, Karachi.
              </div>
            </div>
          </div>
          <div class="p-6 py-[36px] bg-white rounded-lg shadow-md">
            <div>
              <div class="md:flex items-start">
                <Image
                  src={hillPark}
                  alt="Clinic Logo"
                  class=" w-24 h-24 mr-12"
                />
                <div>
                  <h3 class="text-[28px] font-medium">
                    Hill Park General Hospital
                  </h3>
                  <a
                    href="#"
                    className="text-[#49A5F4] font-medium text-[22px]"
                  >
                    Karachi, Pakistan
                  </a>
                </div>
              </div>
              <p class="text-gray-600 text-[18px] mt-2">
                Specialized Orthopaedic services at our Hill Park Hospital
                location, equipped to handle a range of Orthopaedic concerns.
              </p>
              <div class="flex items-center mb-2 mt-4 text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a9.67 9.67 0 0 0-.9-3.2l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6a9.67 9.67 0 0 0-3.2-.9l-.3-2a1 1 0 0 0-1-.9h-2a1 1 0 0 0-1 .9l-.3 2a9.67 9.67 0 0 0-3.2.9l-1.6-1.6a1 1 0 0 0-1.4 1.4l1.6 1.6a9.67 9.67 0 0 0-.9 3.2l-2 .3a1 1 0 0 0-.9 1v2a1 1 0 0 0 .9 1l2 .3a9.67 9.67 0 0 0 .9 3.2l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6a9.67 9.67 0 0 0 3.2.9l.3 2a1 1 0 0 0 1 .9h2a1 1 0 0 0 1-.9l.3-2a9.67 9.67 0 0 0 3.2-.9l1.6 1.6a1 1 0 0 0 1.4-1.4l-1.6-1.6a9.67 9.67 0 0 0 .9-3.2l2-.3a1 1 0 0 0 .9-1v-2a1 1 0 0 0-.9-1l-2-.3zm-8 4.5a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
                +92 (300) 000-0000
              </div>
              <div class="flex items-center text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15v-4h-2v4H8v-6h8v6zm-6.41-8H6.8l5-4.5L16.8 9h-1.79L12 6.25z"></path>
                </svg>
                St-1 Shahrah-e-Firdousi, Block 3 Clifton, Karachi.
              </div>
            </div>
          </div>
          <div class="p-6 py-[36px] bg-white rounded-lg shadow-md">
            <div>
              <div class="md:flex items-start">
                <Image
                  src={hashimHospital}
                  alt="Clinic Logo"
                  class=" w-24 h-24 mr-12"
                />
                <div>
                  <h3 class="text-[28px] font-medium">
                    Hashim Medical City Hospital
                  </h3>
                  <a
                    href="#"
                    className="text-[#49A5F4] font-medium text-[22px]"
                  >
                    Karachi, Pakistan
                  </a>
                </div>
              </div>
              <p class="text-gray-600 text-[18px] mt-2">
                Conveniently situated in the heart of Karachi, our South City
                Hospital location provides a central hub for expert Orthopaedic
                care.
              </p>
              <div class="flex items-center mb-2 mt-4 text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a9.67 9.67 0 0 0-.9-3.2l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6a9.67 9.67 0 0 0-3.2-.9l-.3-2a1 1 0 0 0-1-.9h-2a1 1 0 0 0-1 .9l-.3 2a9.67 9.67 0 0 0-3.2.9l-1.6-1.6a1 1 0 0 0-1.4 1.4l1.6 1.6a9.67 9.67 0 0 0-.9 3.2l-2 .3a1 1 0 0 0-.9 1v2a1 1 0 0 0 .9 1l2 .3a9.67 9.67 0 0 0 .9 3.2l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6a9.67 9.67 0 0 0 3.2.9l.3 2a1 1 0 0 0 1 .9h2a1 1 0 0 0 1-.9l.3-2a9.67 9.67 0 0 0 3.2-.9l1.6 1.6a1 1 0 0 0 1.4-1.4l-1.6-1.6a9.67 9.67 0 0 0 .9-3.2l2-.3a1 1 0 0 0 .9-1v-2a1 1 0 0 0-.9-1l-2-.3zm-8 4.5a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
                +92 (300) 000-0000
              </div>
              <div class="flex items-center text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15v-4h-2v4H8v-6h8v6zm-6.41-8H6.8l5-4.5L16.8 9h-1.79L12 6.25z"></path>
                </svg>
                St-1 Shahrah-e-Firdousi, Block 3 Clifton, Karachi.
              </div>
            </div>
          </div>
          <div class="p-6 py-[36px] bg-white rounded-lg shadow-md">
            <div>
              <div class="md:flex items-start">
                <Image src={rmis} alt="Clinic Logo" class=" w-24 h-24 mr-12" />
                <div>
                  <h3 class="text-[28px] font-medium">
                    RIMS Trauma Hospital
                  </h3>
                  <a
                    href="#"
                    className="text-[#49A5F4] font-medium text-[22px]"
                  >
                    Karachi, Pakistan
                  </a>
                </div>
              </div>
              <p class="text-gray-600 text-[18px] mt-2">
                Specialized Orthopaedic services at our Hill Park Hospital
                location, equipped to handle a range of Orthopaedic concerns.
              </p>
              <div class="flex items-center mb-2 mt-4 text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5a9.67 9.67 0 0 0-.9-3.2l1.6-1.6a1 1 0 0 0-1.4-1.4l-1.6 1.6a9.67 9.67 0 0 0-3.2-.9l-.3-2a1 1 0 0 0-1-.9h-2a1 1 0 0 0-1 .9l-.3 2a9.67 9.67 0 0 0-3.2.9l-1.6-1.6a1 1 0 0 0-1.4 1.4l1.6 1.6a9.67 9.67 0 0 0-.9 3.2l-2 .3a1 1 0 0 0-.9 1v2a1 1 0 0 0 .9 1l2 .3a9.67 9.67 0 0 0 .9 3.2l-1.6 1.6a1 1 0 0 0 1.4 1.4l1.6-1.6a9.67 9.67 0 0 0 3.2.9l.3 2a1 1 0 0 0 1 .9h2a1 1 0 0 0 1-.9l.3-2a9.67 9.67 0 0 0 3.2-.9l1.6 1.6a1 1 0 0 0 1.4-1.4l-1.6-1.6a9.67 9.67 0 0 0 .9-3.2l2-.3a1 1 0 0 0 .9-1v-2a1 1 0 0 0-.9-1l-2-.3zm-8 4.5a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
                +92 (300) 000-0000
              </div>
              <div class="flex items-center text-black font-semibold text-[18px]">
                <svg
                  class="w-8 h-8 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15v-4h-2v4H8v-6h8v6zm-6.41-8H6.8l5-4.5L16.8 9h-1.79L12 6.25z"></path>
                </svg>
                St-1 Shahrah-e-Firdousi, Block 3 Clifton, Karachi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClinics;
