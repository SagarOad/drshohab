import React from "react";

const ContactSection = () => {
  return (
    <div className=" contact-form py-24">
      <div className=" max-w-[1500px] mx-auto">
        <div className=" md:grid grid-cols-12 px-6">
          <div className=" col-span-6">
            <div class="w-full max-w-2xl form-background rounded-lg shadow-lg">
              <h1 class="text-[2.4rem] leading-10 mb-12 font-medium text-white">
                Your Path To <span class="text-[#49A5F4]">Pain Free Living</span>{" "}
                Begins Here
              </h1>
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    class="p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    class="p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Preferred Date & Time"
                    class="p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Brief Description of Concerns"
                  rows="4"
                  class="p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="px-12 py-4 bg-[#49A5F4] text-white font-bold rounded-lg focus:outline-none focus:ring-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" col-span-6">sa</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
