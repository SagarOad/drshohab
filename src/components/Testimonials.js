import React from "react";

const Testimonials = () => {
  return (
    <div className=" testimonials">
      <div className="max-w-[1500px] py-32 mx-auto">
        <div className="md:w-[70%] px-6">
          <h2 className="text-[2.7rem] mb-2 font-bold relative text-white z-[99]">
            What Our Patients Say
          </h2>
          <p className=" relative z-[99] text-white text-[21px]">
            Welcome to a firsthand account of the transformative experiences
            shared by our valued patients. Discover their stories, hear their
            journeys, and witness the positive outcomes they’ve achieved through
            the care of Dr. Shohab Hyder Shaikh and our dedicated team.
          </p>
        </div>

        <div className="md:grid grid-cols-12 relative mt-24 z-[99]">
          <div className="col-span-4">
            <div className="video-container mx-4">
              <iframe
                width="100%"
                height="340"
                src="https://www.youtube.com/embed/VLsv9x8636c"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video 1"
              ></iframe>
            </div>
          </div>
          <div className="col-span-4">
            <div className="video-container mx-4">
              <iframe
                width="100%"
                height="340"
                src="https://www.youtube.com/embed/p3awzLtYD_w"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video 2"
              ></iframe>
            </div>
          </div>
          <div className="col-span-4">
            <div className="video-container mx-4">
              <iframe
                width="100%"
                height="340"
                src="https://www.youtube.com/embed/2cDKVfvFJjQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video 3"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
