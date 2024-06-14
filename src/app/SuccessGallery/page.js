import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import surgery1 from "@/assets/surgery1.webp";
import surgery2 from "@/assets/surgery2.webp";
import surgery3 from "@/assets/surgery3.webp";
import surgery4 from "@/assets/surgery4.webp";
import surgery5 from "@/assets/surgery5.webp";
import surgery6 from "@/assets/surgery6.webp";
import surgery7 from "@/assets/surgery7.webp";
import surgery8 from "@/assets/ot.webp";
import surgery9 from "@/assets/surgery9.webp";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import ServiceGridWhite from "@/components/ServiceGridWhite";

const page = () => {
  return (
    <>
      <div>
        <div className=" success-gallery-bg pt-60 pb-32">
          <div className=" max-w-[1700px] p-12 mx-auto">
            <div className=" md:grid grid-cols-12">
              <div className=" col-span-6 flex items-center">
                <div>
                  <h2 className=" text-[3rem] leading-[48px] mb-14 text-white font-medium">
                    Revitalize Your Movement, Comprehensive{" "}
                    <span className=" font-extrabold">
                      Musculoskeletal Solutions
                    </span>{" "}
                  </h2>
                  <p className=" text-white text-[18px] mb-4">
                    Discover a range of Customized musculoskeletal solutions
                    designed to restore functionality and enhance your overall
                    quality of life under the expert care of Dr. Shohab.
                  </p>
                  <button className=" bg-[#2FB699] text-white px-4 py-4 mt-8">
                    Take Appointment Now
                  </button>
                </div>
              </div>
              <div className=" col-span-6 pt-12 md:pt-0 flex items-center"></div>
            </div>
          </div>
        </div>
        <div>
          <div className=" md:w-[80%] py-24 mx-auto px-6">
            <h2 className="text-[2.7rem] mb-2 text-center font-semibold ">
              Success{" "}
              <span className=" text-[#49A5F4] font-extrabold">Gallery</span>
            </h2>
            <p className=" text-[18px] text-center">
              If you’ve undergone Orthopaedic treatment with us and witnessed
              positive changes, we invite you to share you rsuccess story.
              Contact us to contribute to our gallery and inspire others on
              their journey to recovery.
            </p>
          </div>

          <div>
            <div className="bg-white">
              <div className="md:grid grid-cols-12">
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery1}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery2}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery3}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery4}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:grid grid-cols-12">
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery5}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery6}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery7}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
                <div className=" col-span-3 m-3">
                  <div>
                    <Image
                      src={surgery8}
                      className=" w-[100%] h-[420px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <ContactSection />
      <ServiceGridWhite />
    </>
  );
};

export default page;
