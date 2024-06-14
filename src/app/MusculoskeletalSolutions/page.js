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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactSection from "@/components/ContactSection";
import ServiceGridWhite from "@/components/ServiceGridWhite";

const page = () => {
  return (
    <>
      
      <div>
        <div className=" hip-joint-bg pt-60 pb-32">
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
          <div>
            <div className=" md:w-[85%] py-16 mx-auto px-6">
              <h2 className="text-[2.2rem] text-center leading-[50px] mb-2 font-medium ">
                Diagnostic Precision, <br />
                <span className=" text-[#49A5F4] font-extrabold">
                  Tailored Treatments, and Ideal Recovery
                </span>
              </h2>
              <p className=" text-[18px] text-center">
                Embark on a seamless musculoskeletal care journey at our clinic.
                Our process involves precise diagnosis and tailored treatment
                plans, incorporating regenerative therapies, minimally invasive
                procedures, and surgical interventions to address individual
                musculoskeletal issues. Dr. Shohab’s comprehensive approach
                extends to post-treatment rehabilitation, promoting optimal
                recovery, restored function, and improved mobility for each
                patient. Experience the advanced application of PRP, surgical
                performance using MIS techniques, keyhole surgery, and Lipogems
                intervention.
              </p>
            </div>
          </div>
          <div className="max-w-[1500px] pb-24 pt-16 mx-auto">
            <div className=" md:w-[85%] mx-auto px-6">
              <h2 className="text-[2.7rem] mb-2 text-center font-medium ">
                Key{" "}
                <span className=" text-[#49A5F4] font-extrabold">Features</span>
              </h2>
            </div>

            <div className=" md:grid grid-cols-12 mt-12">
              <div className=" col-span-4 p-10">
                <h2 className=" text-[20px] text-center font-bold mb-4">
                  Tailored Treatment Plans
                </h2>
                <p className=" text-[18px] text-center">
                  Benefit from Customized treatment plans addressing a spectrum
                  of musculoskeletal issues.
                </p>
              </div>
              <div className=" col-span-4 p-10 text-center">
                <h2 className="  text-[20px] text-center font-bold mb-4">
                  Integrated Care Approach
                </h2>
                <p className="text-[18px] text-center">
                  Experience a holistic approach integrating Orthopaedic,
                  regenerative, and rehabilitative solutions.
                </p>
              </div>
              <div className=" col-span-4 p-10 text-center">
                <h2 className=" text-[20px] text-center font-bold mb-4">
                  Cutting-Edge Technology
                </h2>
                <p className="text-[18px] text-center">
                  Explore innovative technologies ensuring precise and effective
                  musculoskeletal interventions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" bg-[#082259] mx-auto pt-16">
            <div className="">
              <div className=" w-[80%] mx-auto">
                <h2 className=" text-[#6ec1e4] mb-6 font-medium text-[2.4rem] text-center">
                  Before And After Gallery
                </h2>
                <p className=" text-center text-[#BABABA] text-[18px]">
                  Witness the success stories through our Before and After
                  Gallery. These images showcase the transformative impact of
                  our surgical interventions on hip and knee conditions,
                  providing a visual testament to the efficacy of our services.
                </p>
              </div>
              <div className="bg-white mt-28">
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

        <div className=" max-w-[1500px] my-12 mx-auto px-6">
          <h2 className="text-[2.7rem] px-6 text-center mb-2 font-medium relative text-black">
            FAQ'S{" "}
            <span className=" text-[#49A5F4]">
              (Frequently Asked Questions)
            </span>
          </h2>
          <div className=" border-2 m-4 p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How are musculoskeletal conditions diagnosed?
                </AccordionTrigger>
                <AccordionContent>
                  Musculoskeletal conditions are diagnosed through a combination
                  of medical history, physical examination, and imaging studies
                  such as X-rays or MRI scans
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What treatment options are available for musculoskeletal
                  issues?
                </AccordionTrigger>
                <AccordionContent>
                  Treatment options for musculoskeletal issues encompass a range
                  of interventions, including medication, physical therapy,
                  regenerative therapies, minimally invasive procedures, and, if
                  necessary, surgical interventions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is surgery always necessary for musculoskeletal concerns?
                </AccordionTrigger>
                <AccordionContent>
                  Surgery is not always necessary for musculoskeletal concerns.
                  Non-surgical options, such as conservative treatments and
                  rehabilitation, are often effective in managing various
                  conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How long does it take to recover from musculoskeletal
                  treatments?
                </AccordionTrigger>
                <AccordionContent>
                  The recovery time from musculoskeletal treatments varies based
                  on the specific condition and the chosen treatment modality.
                  Your healthcare provider will provide guidance on expected
                  recovery timelines.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can musculoskeletal solutions address chronic conditions?
                </AccordionTrigger>
                <AccordionContent>
                  Musculoskeletal solutions, including regenerative therapies
                  and surgical interventions, can be effective in addressing
                  chronic conditions by promoting healing, reducing symptoms,
                  and improving overall function.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div>
          <ContactSection />
        </div>

        <div>
          <ServiceGridWhite />
        </div>
      </div>
    </>
  );
};

export default page;
