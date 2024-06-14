import React from "react";

const OtherInfo = () => {
  return (
    <div>
      <div className="max-w-[1500px] py-24 mx-auto">
        <div className=" md:w-[85%] px-6">
          <h2 className="text-[2.7rem] mb-2 font-medium ">
            Medical{" "}
            <span className=" text-[#49A5F4] font-extrabold">Ethics</span>
          </h2>
          <p className=" text-[21px]">
            At Dr. Shohab’s clinic, we uphold the highest standards of medical
            ethics, ensuring a commitment to patient well-being, privacy, and
            dignity. Our adherence to rules and regulations reflects our
            dedication to maintaining the trust and confidence of every
            individual who seeks our care.
          </p>
        </div>

        <div className=" md:grid grid-cols-12 mt-12">
          <div className=" col-span-4 p-10">
            <h2 className=" text-[22px] font-bold mb-5">Confidentiality and Privacy</h2>
            <p className=" text-[20px]">
              We prioritize the privacy of our patients, employing strict
              measures to safeguard their personal information. Our clinic is
              equipped with spare male and female chaperons to ensure the
              comfort and security of all patients during consultations and
              procedures.
            </p>
          </div>
          <div className=" col-span-4 p-10">
            <h2 className=" text-[22px] font-bold mb-5">Patient Dignity and Respect</h2>
            <p className="text-[20px]">
              Respecting the dignity of each patient is paramount in our
              practice. Dr. Shohab’s team is attentive to maintaining an
              environment where every individual feels valued and their honor is
              upheld.
            </p>
          </div>
          <div className=" col-span-4 p-10">
            <h2 className="text-[22px] font-bold mb-5">Vigilant Team for Female Patients</h2>
            <p className="text-[20px]">
              For our female patients, an extra layer of vigilance is applied.
              Throughout their journey, from the outpatient department to the
              operating room, female patients are never left alone. Our team
              includes dedicated female chaperons to provide continuous support
              and companionship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
