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


export const metadata = {
  title: "Complex Bone Fractures (Trauma)",
  description:
    "Dr. Shohab Hyder is a bone fracture surgeon in Karachi, ensuring the best treatment and recovery for patients with bone fractures.",
};

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
                    Restoring Strength, Rebuilding Lives, Advanced Trauma Care{" "}
                    <span className=" font-extrabold">
                      For Complex Bone Fractures
                    </span>{" "}
                  </h2>
                  <p className=" text-white text-[18px] mb-4">
                    Experience unparalleled care for complex bone fractures
                    under the expertise of Dr. Shohab. Our trauma services are
                    designed to provide comprehensive solutions, ensuring a path
                    to recovery and renewed vitality.
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
          <div className=" max-w-[1500px] px-6 py-24 mx-auto">
            <div className=" md:grid grid-cols-12">
              <div className=" col-span-6 flex items-center">
                <div className=" w-[100%] h-[420px] object-cover">
                  <Image src={surgery1} className=" w-[90%]" />
                </div>
              </div>
              <div className=" col-span-6 flex items-center">
                <div>
                  <h2 className="text-black mb-6 leading-10 text-[2.1rem] font-semibold">
                    Advanced Care for
                    <br />
                    <span className=" text-[#49A5F4] font-bold">
                      Complex Bone Fractures
                    </span>
                  </h2>
                  <p className=" text-[18px] ">
                    Explore Dr. Shohab’s comprehensive approach to managing
                    complex bone fractures, utilizing cutting-edge techniques
                    and Customized strategies for Ideal recovery.
                  </p>

                  <h2 className=" text-[20px] mt-8 font-bold mb-3">
                    Diagnostic Precision
                  </h2>
                  <p className=" text-[20px]">
                    Meticulous assessment techniques to accurately diagnose the
                    severity of complex fractures.
                  </p>
                  <h2 className=" text-[20px] mt-8 font-bold mb-3">
                    Surgical Solutions
                  </h2>
                  <p className=" text-[20px]">
                    Tailored surgical interventions, ranging from internal
                    fixation to reconstructive procedures.
                  </p>
                  <h2 className=" text-[20px] mt-8 font-bold mb-3">
                    Rehabilitation Strategies
                  </h2>
                  <p className=" text-[20px]">
                    Personalized postoperative rehabilitation plans to restore
                    function, strength, and mobility.
                  </p>

                  <button className=" bg-[#49A5F4] text-white md:mb-0 mb-8 px-4 py-4 mt-8">
                    Get Appointment Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[1500px] py-24 mx-auto">
            <div className=" md:w-[85%] mx-auto px-6">
              <h2 className="text-[2.7rem] mb-2 text-center font-medium ">
                Key{" "}
                <span className=" text-[#49A5F4] font-extrabold">Features</span>
              </h2>
            </div>

            <div className=" md:grid grid-cols-12 mt-12">
              <div className=" col-span-4 p-10">
                <h2 className=" text-[20px] text-center font-bold mb-4">
                  Expert Surgical Procedures
                </h2>
                <p className=" text-[18px] text-center">
                  Our team specializes in detailed and skilled interventions for
                  a range of hip and knee Joint diseases and problems.
                </p>
              </div>
              <div className=" col-span-4 p-10 text-center">
                <h2 className="  text-[20px] text-center font-bold mb-4">
                  Personalized Treatment Plans
                </h2>
                <p className="text-[18px] text-center">
                  Experience care tailored to your unique needs, ensuring the
                  most effective and individualized approach.
                </p>
              </div>
              <div className=" col-span-4 p-10 text-center">
                <h2 className=" text-[20px] text-center font-bold mb-4">
                  Joint Functionality Optimization
                </h2>
                <p className="text-[18px] text-center">
                  We prioritize restoring and optimizing joint functionality
                  while alleviating pain to enhance your overall quality of
                  life.
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
                  How is the severity of a complex bone fracture assessed?
                </AccordionTrigger>
                <AccordionContent>
                  The severity of a complex bone fracture is assessed through
                  imaging studies like X-rays and CT scans, helping determine
                  the extent of the fracture and the most suitable treatment
                  approach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What surgical options are available for complex fractures?
                </AccordionTrigger>
                <AccordionContent>
                  Surgical options for complex fractures include internal
                  fixation methods, external fixation, and reconstructive
                  procedures, tailored to the specific nature of the fracture.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What is the typical recovery timeline for complex fracture
                  surgeries?
                </AccordionTrigger>
                <AccordionContent>
                  The recovery timeline for complex fracture surgeries varies,
                  but patients often experience gradual improvement in mobility
                  and function over several weeks to months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can non-surgical methods be considered for certain complex
                  fractures?
                </AccordionTrigger>
                <AccordionContent>
                  Non-surgical methods may be considered for certain complex
                  fractures, depending on factors such as the location and
                  stability of the fracture. Your surgeon will determine the
                  most suitable approach.
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
