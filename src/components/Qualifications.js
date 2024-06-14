import React from "react";

const Qualifications = () => {
  return (
    <div>
      <div className=" md:grid grid-cols-12">
        <div className=" col-span-5 flex items-center justify-end py-12 md:py-0 bg-[#039BE5]">
          <div className=" px-10">
            <h2 className=" text-white text-[2rem] font-semibold text-center md:text-end">
              Meet Dr. Shohab Hyder Shaikh
            </h2>
            <h2 className=" text-black text-[1.7rem] font-semibold text-end">
              Education and Credentials
            </h2>
          </div>
        </div>
        <div className=" col-span-7 px-10 py-16 bg-[#012767FC]">
          <div className=" md:grid grid-cols-12">
            <div className=" col-span-6 py-6 px-12 flex justify-center items-center">
              <div>
                <h2 className="text-[2rem] text-white text-center">MBBS</h2>
                <h2 className="text-[1.7rem] text-[#6ec1e4] font-semibold text-center">(DOW)</h2>
              </div>
            </div>
            <div className=" col-span-6 py-6 px-12 flex justify-center items-center">
              <div>
                <h2 className="text-[2rem] text-white text-center">MRCS</h2>
                <h2 className="text-[1.7rem] text-[#6ec1e4] font-semibold text-center">(London)</h2>
              </div>
            </div>
          </div>
          <div className=" md:grid grid-cols-12">
            <div className=" col-span-6 py-6 px-12 flex justify-center items-center">
              <div>
                <h2 className="text-[2rem] text-white text-center">FRCS</h2>
                <h2 className="text-[1.7rem] text-[#6ec1e4] font-semibold text-center">
                  (Trauma & Orthopaedics) England
                </h2>
              </div>
            </div>
            <div className=" col-span-6 py-6 px-12 flex justify-center items-center">
              <div>
                <h2 className="text-[2rem] text-white text-center">Fellow EBOT</h2>
                <h2 className="text-[1.7rem] text-[#6ec1e4] font-semibold text-center">
                  (European Board of Orthopaedic & Traumatology)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
