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
                    Experience Renewed Mobility Through Specialized{" "}
                    <span className=" font-extrabold">
                      Hip & knee joint replacement surgery
                    </span>{" "}
                  </h2>
                  <p className=" text-white text-[18px] mb-4">
                    Welcome to our advanced Hip & knee joint replacement surgery
                    services, where precision meets relief. Dr. Shohab Hyder
                    Shaikh and our dedicated team are committed to provide
                    tailored surgical solutions for Ideal joint Problems.
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
                    A Path to Renewed Mobility
                    <br />
                    <span className=" text-[#49A5F4] font-bold">
                      through advanced Hip joint replacement Surgery
                    </span>
                  </h2>
                  <p className=" text-[18px]">
                    Discover our comprehensive hip surgery procedures crafted to
                    address a range of conditions, including total hip
                    replacement (THR), hip arthritis, hip resurfacing, and hip
                    hemiarthroplasty. We utilize gender-specific implants along
                    with MIS (minimally invasive surgery) to achieve desired
                    results and enhance joint mobility and function.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-[1500px] px-6 py-24 mx-auto">
            <div className=" md:grid grid-cols-12">
              <div className=" col-span-6 flex items-center">
                <div>
                  <h2 className="text-black mb-6 leading-10 text-[2.1rem] font-semibold">
                    Innovative Solutions for
                    <br />
                    <span className=" text-[#49A5F4] font-bold">
                      Knee Problems
                    </span>
                  </h2>
                  <p className=" text-[18px]">
                    Delve into our innovative knee surgery options, covering
                    Total Knee Replacement, Knee Arthroscopy, Knee Ligament
                    Repair, and more. Dr. Shohab and our team are dedicated to
                    providing surgical excellence for enhanced knee function and
                    reduced discomfort.
                  </p>
                  <button className=" bg-[#49A5F4] text-white md:mb-0 mb-8 px-4 py-4 mt-8">
                    Get Appointment Now
                  </button>
                </div>
              </div>
              <div className=" col-span-6 flex items-center">
                <div className=" w-[100%] h-[420px] object-cover">
                  <Image
                    src={surgery2}
                    className=" w-[90%] h-[500px] object-cover ml-auto"
                  />
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
                  How long does the recovery take after Total Hip Replacement?
                </AccordionTrigger>
                <AccordionContent>
                  The recovery period after Total Hip Replacement varies, but
                  patients typically experience improved mobility within a few
                  weeks, with full recovery taking several months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Are there any non-surgical alternatives for knee conditions?
                </AccordionTrigger>
                <AccordionContent>
                  Non-surgical alternatives for knee conditions may include
                  physical therapy, medication, and lifestyle modifications.
                  Your doctor will recommend the most suitable option based on
                  your specific condition.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What are the common risks associated with Hip Arthroscopy?
                </AccordionTrigger>
                <AccordionContent>
                  Common risks associated with Hip Arthroscopy may include
                  infection, nerve damage, and bleeding. Your surgeon will
                  discuss potential risks and benefits before the procedure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I resume sports activities after Knee Arthroscopy?
                </AccordionTrigger>
                <AccordionContent>
                  Resuming sports activities after Knee Arthroscopy depends on
                  individual recovery progress. Your surgeon will provide
                  guidance on when it’s safe to return to sports.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do I prepare for hip or knee surgery?
                </AccordionTrigger>
                <AccordionContent>
                  Preparing for hip or knee surgery involves following
                  pre-operative instructions provided by your surgeon, includin
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How does rehabilitation contribute to the overall recovery
                  from complex fractures?
                </AccordionTrigger>
                <AccordionContent>
                  Rehabilitation plays a crucial role in the overall recovery
                  from complex fractures by promoting muscle strength, joint
                  mobility, and functional independence. It is tailored to each
                  patient’s specific needs.
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
