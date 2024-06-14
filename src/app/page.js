import OtherInfo from "@/components/OtherInfo";
import ServiceGrid from "@/components/ServiceGrid";
import Techniques from "@/components/Techniques";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import MainInfo from "@/components/MainInfo";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurClinics from "@/components/OurClinics";
import Faqs from "@/components/Faqs";
import ContactBar from "@/components/ContactBar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    
      <div className=" main-bg pt-40">
        <div className=" max-w-[1700px] p-12 mx-auto">
          <div className=" md:grid grid-cols-12">
            <div className=" col-span-6 flex items-center">
              <div>
                <h2 className=" text-[3.1rem] text-white font-medium">
                  <span className=" font-extrabold">Dr. Shohab</span> Hyder
                  Shaikh
                </h2>
                <p className=" text-white text-[18px] mt-5">
                  Welcome to Dr. Shohab’s Orthopaedic Clinic , Embark on a
                  pain-free journey with us – your trusted partner in Bones &
                  Joint health. Experience top-notch Orthopaedic Care, backed by
                  cutting-edge technology for your complete musculoskeletal
                  well-being.
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
      <MainInfo />
      <ServiceGrid />
      <Testimonials />
      <OtherInfo />
      <Techniques />
      <ContactSection />
      <WhyChooseUs />
      <OurClinics />
      <Faqs />
    </>
  );
}
