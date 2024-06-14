import React from "react";
import AboutBanner from "@/components/AboutBanner";
import Qualifications from "@/components/Qualifications";
import OurMission from "@/components/OurMission";
import Experience from "@/components/Experience";
import PioneeringTherapy from "@/components/PioneeringTherapy";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import OurClinics from "@/components/OurClinics";


export const metadata = {
  title: "Meet Dr. Shohab",
  description:
    "Dr. Shohab Hyder stands out as an orthopedic doctor in Karachi, providing exceptional care and specialized treatments for a diverse range of orthropedics.",
};

const page = () => {
  return (
    <>
    
      <div>
        <div className=" main-bg pt-40">
          <div className=" max-w-[1700px] p-12 mx-auto">
            <div className=" md:grid grid-cols-12">
              <div className=" col-span-6 flex items-center">
                <div>
                  <h2 className=" text-[3rem] leading-[48px] text-white font-medium">
                    Welcome To{" "}
                    <span className=" font-extrabold">Dr. Shohab Shaikh's</span>{" "}
                    Orthopaedic World
                  </h2>
                  <p className=" text-white text-[16px] mt-5">
                    Dr. Shohab Hyder stands out as an orthopedic doctor in
                    Karachi, providing exceptional care and specialized
                    treatments for a diverse range of orthropedics.
                  </p>
                  <button className=" bg-[#2FB699] text-white px-4 py-4 mt-8">
                    Take Appointment Now
                  </button>
                </div>
              </div>
              <div className=" col-span-6 pt-12 md:pt-0 flex items-center">
                <img
                  className=" w-[90%] ml-auto "
                  src="https://www.drshohabhydershaikh.com/wp-content/uploads/2024/03/Group-142.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBanner />
      <Qualifications />
      <OurMission />
      <Experience />
      <PioneeringTherapy />
      <ServiceGrid />
      <Testimonials />
      <WhyChooseUs  />
      <ContactSection />
      <OurClinics />
    </>
  );
};

export default page;
