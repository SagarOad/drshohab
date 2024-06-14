import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import knee from "@/assets/knee.webp";
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
                    Unlock Healing Potentials with Innovative{" "}
                    <span className=" font-extrabold">
                      Future of Keyhole Surgery
                    </span>{" "}
                  </h2>
                  <p className=" text-white text-[18px] mb-4">
                    Welcome to our Regenerative Therapies services, where
                    cutting-edge techniques meet the body’s natural healing
                    abilities. Dr. Shohab Hyder Shaikh and our dedicated team
                    are committed to offering personalized solutions for
                    musculoskeletal well-being.
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
                  <Image src={knee} className=" w-[90%]" />
                </div>
              </div>
              <div className=" col-span-6 flex items-center">
                <div>
                  <h2 className="text-black mb-6 leading-10 text-[2.1rem] font-semibold">
                    Revolutionizing Healthcare through
                    <br />
                    <span className=" text-[#49A5F4] font-bold">
                      Regenerative Therapies
                    </span>
                  </h2>
                  <p className=" text-[18px]">
                    Revolutionizing healthcare through regenerative therapies,
                    discover the transformative potential at our clinic. From
                    Platelet-Rich Plasma (PRP) to innovative Stem Cell
                    treatments using Lipogems, each procedure is meticulously
                    designed to stimulate healing and enhance musculoskeletal
                    function. Utilizing body fat (Lipogems) provides an added
                    advantage, shaping and toning the body while high-quality
                    fat is expertly used to prepare potential stem cells with
                    healing and reparative impact for multiple musculoskeletal
                    diseases.
                  </p>
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
                  Advanced Techniques
                </h2>
                <p className=" text-[18px] text-center">
                  Experience surgery with minimal disruption, promoting faster
                  recovery and reduced scarring.
                </p>
              </div>
              <div className=" col-span-4 p-10 text-center">
                <h2 className="  text-[20px] text-center font-bold mb-4">
                  Tailored Treatment Plans
                </h2>
                <p className="text-[18px] text-center">
                  Experience personalized regenerative solutions designed to
                  address specific musculoskeletal concerns.
                </p>
              </div>
              <div className=" col-span-4 p-10 text-center">
                <h2 className=" text-[20px] text-center font-bold mb-4">
                  Holistic Approach
                </h2>
                <p className="text-[18px] text-center">
                  Embrace a holistic healing journey that considers the overall
                  well-being of the patient.
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
                  How do regenerative therapies work?
                </AccordionTrigger>
                <AccordionContent>
                  Regenerative therapies, such as PRP and Stem Cell Therapy,
                  work by harnessing the body’s natural healing mechanisms to
                  promote tissue repair and regeneration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Are there any side effects associated with PRP injections?
                </AccordionTrigger>
                <AccordionContent>
                  PRP injections are generally safe, with minimal side effects
                  such as mild pain or swelling at the injection site. Serious
                  side effects are rare.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What conditions can be treated with Stem Cell Therapy using
                  Lipogems?
                </AccordionTrigger>
                <AccordionContent>
                  Stem Cell Therapy using Lipogems is effective for various
                  musculoskeletal conditions, including joint arthritis, tendon
                  injuries, and ligament issues.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How long does it take to experience results from regenerative
                  treatments?
                </AccordionTrigger>
                <AccordionContent>
                  Results from regenerative treatments may vary, but patients
                  often experience improvement within a few weeks to months,
                  with continued enhancement over time.
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
                  Is there a maximum age limit for undergoing regenerative
                  therapies?
                </AccordionTrigger>
                <AccordionContent>
                  While there’s no strict age limit, the effectiveness of
                  regenerative therapies may vary with age. Consultation with a
                  healthcare provider will help determine suitability based on
                  individual health status
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
