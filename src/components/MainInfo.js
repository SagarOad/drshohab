import React from 'react'

const MainInfo = () => {
  return (
    <div className=" main-intro">
    <div className="max-w-[1500px] mx-auto my-32">
      <div className=" md:grid grid-cols-12">
        <div className=" col-span-5">
          <img src="https://www.drshohabhydershaikh.com/wp-content/uploads/2024/03/image-46.png" />
        </div>
        <div className=" col-span-7 flex items-center pl-0 md:pl-24">
          <div>
            <h2 className=" text-[#6EC1E4] font-bold mt-8 md:mt-0 text-[2rem] mb-6">
              MRCS (London), FRCS (Trauma & Orthopedic)
            </h2>
            <p className=" text-[18px] leading-9">
              Dr. Shohab is one of the most qualified British-trained Trauma
              and Orthopaedic Surgeons with vast experience in Regenerative
              Therapies, along with traditional Orthopaedic Solutions for
              bone and joint pains.
              <br />
              He specializes in Lower Limb Arthroplasty, which includes
              total Hip and total Knee joints replacement using Minimally
              Invasive Surgery (MIS) techniques and gender-specific
              implants. Additionally, Dr. Shohab offers innovative
              regenerative therapies such as Stem Cells and PRP
              (Platelet-Rich Plasma). He is also proficient in arthroscopic
              (keyhole surgery) procedures for sports injuries involving
              ligaments and tendons.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainInfo