import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className=" max-w-[1500px] mx-auto">
      <h2 className="text-[2.7rem] px-6 text-center mb-2 font-medium relative text-black">
        FAQ'S{" "}
        <span className=" text-[#49A5F4]">(Frequently Asked Questions)</span>
      </h2>
      <div className=" md:grid grid-cols-12">
        <div className=" col-span-6">
          <div className=" border-2 m-4 p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is PRP (Platelet-Rich Plasma)?
                </AccordionTrigger>
                <AccordionContent>
                  Total Knee Replacement is a surgical procedure in which a
                  damaged knee joint is replaced with artificial materials,
                  typically metal and plastic components
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is Total Knee Replacement
                </AccordionTrigger>
                <AccordionContent>
                  Total Knee Replacement (TKR) is a surgical procedure where
                  damaged knee joint surfaces are replaced with artificial
                  components to relieve pain and restore function.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What is Total Hip Replacement?
                </AccordionTrigger>
                <AccordionContent>
                  Total Hip Replacement is a surgical procedure involving the
                  replacement of a damaged or arthritic hip joint with an
                  artificial joint made of metal and plastic components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is Arthritis?</AccordionTrigger>
                <AccordionContent>
                  Arthritis is a medical condition characterized by inflammation
                  of the joints, causing pain, swelling, stiffness, and reduced
                  joint mobility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is Osteoporosis?</AccordionTrigger>
                <AccordionContent>
                  Osteoporosis is a medical condition marked by weakened bones,
                  increasing the risk of fractures and breaks due to a loss of
                  bone density.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className=" col-span-6">
          <div className="border-2 m-4 p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is Keyhole Surgery (Arthroscopy)?
                </AccordionTrigger>
                <AccordionContent>
                  Keyhole Surgery, or Arthroscopy, is a minimally invasive
                  surgical procedure that uses a small camera (arthroscope) to
                  visualize and treat joint issues through tiny incisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is MIS (Minimally Invasive Surgery) Technique?
                </AccordionTrigger>
                <AccordionContent>
                  MIS (Minimally Invasive Surgery) Technique involves performing
                  surgical procedures through small incisions, reducing trauma
                  to surrounding tissues and promoting faster recovery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What is the Role of PRP in Back Pain?
                </AccordionTrigger>
                <AccordionContent>
                  PRP can be used in the treatment of back pain to promote
                  healing and reduce inflammation in affected areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I Sit on the Floor After Joint Surgery?
                </AccordionTrigger>
                <AccordionContent>
                  Post-joint surgery, sitting on the floor might be restricted
                  initially; however, it depends on the specific surgery and the
                  recovery progress. Consult with your doctor for personalized
                  guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is There Any Special Diet After Joint Surgery?
                </AccordionTrigger>
                <AccordionContent>
                  A post-joint surgery diet may include foods rich in nutrients
                  like vitamins and minerals to support healing. Consult your
                  healthcare provider for personalized dietary recommendations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
