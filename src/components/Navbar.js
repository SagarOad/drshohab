"use client";

import React, { useState } from "react";
import logo from "@/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (pathname) =>
    router.pathname === pathname ? "bg-teal-500" : "";

  return (
    <div>
      <div className="z-50 bg-[#49A5F4] px-12 py-4 text-white relative items-center">
        <div className=" max-w-[1700px] text-[18px] font-semibold mx-auto md:flex justify-between">
          <div>
            <p>
              Start Your Journey to Pain-Free Living With Dr. Shohab Hyder
              Shaikh
            </p>
          </div>
          <div className=" flex justify-start items-center mt-2">
            <FaPhoneAlt />

            <p className="">+92 (333) 315-7859</p>
          </div>
        </div>
      </div>
      <nav className="bg-[#082259] md:bg-transparent mb-[-160px] relative z-[99]">
        <div className="max-w-[1700px] px-12 py-3 mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-28">
              <Image src={logo} alt="Logo" className="w-28 h-28" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12 text-white">
            <Link
              href="/"
              className={`py-2 px-4 rounded text-white ${isActive("/")}`}
            >
              Home
            </Link>
            <Link
              href="/MeetDrShohab"
              className={`hover:text-teal-500 py-2 px-4 ${isActive(
                "/MeetDrShohab"
              )}`}
            >
              Meet Dr. Shohab
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:text-teal-500 focus:outline-none py-2 px-4"
              >
                Our Expertise
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg z-20">
                  <Link
                    href="/KneeHipSurgery"
                    className="block px-4 py-4 text-gray-800 hover:bg-teal-500 hover:text-white"
                  >
                    Hip & Knee Surgery
                  </Link>
                  <Link
                    href="/RegenerativeTherapies"
                    className="block px-4 py-4 text-gray-800 hover:bg-teal-500 hover:text-white"
                  >
                    Regenerative Therapies
                  </Link>
                  <Link
                    href="/ArthroscopyKeyholeSurgery"
                    className="block px-4 py-4 text-gray-800 hover:bg-teal-500 hover:text-white"
                  >
                    Arthroscopy-Keyhole-Surgery
                  </Link>
                  <Link
                    href="/SportsInjuryManagement"
                    className="block px-4 py-4 text-gray-800 hover:bg-teal-500 hover:text-white"
                  >
                    Sports injuries Management
                  </Link>
                  <Link
                    href="/ComplexBoneFractures"
                    className="block px-4 py-4 text-gray-800 hover:bg-teal-500 hover:text-white"
                  >
                    Complex Bone Fractures (Trauma)
                  </Link>
                  <Link
                    href="/MusculoskeletalSolutions"
                    className="block px-4 py-4 text-gray-800 hover:bg-teal-500 hover:text-white"
                  >
                    Musculoskeletel Solutions
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/SuccessGallery"
              className={`hover:text-teal-500 py-2 px-4 ${isActive(
                "/success-gallery"
              )}`}
            >
              Success Gallery
            </Link>
            <Link
              href="/VisitUs"
              className={`hover:text-teal-500 py-2 px-4 ${isActive(
                "/visit-us"
              )}`}
            >
              Visit Us
            </Link>
            <Link
              href="/blog"
              className={`hover:text-teal-500 py-2 px-4 ${isActive("/blog")}`}
            >
              Blog
            </Link>
          </div>
          <Link
            href="/book-appointment"
            className={`hidden md:block bg-teal-500 py-2 px-4 rounded text-white ${isActive(
              "/book-appointment"
            )}`}
          >
            Book An Appointment
          </Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-transparent text-white py-4">
            <Link
              href="/"
              className={`block py-2 px-4 rounded text-white mt-2 ${isActive(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              href="/MeetDrShohab"
              className={`block py-2 px-4 hover:text-teal-500 mt-2 ${isActive(
                "/MeetDrShohab"
              )}`}
            >
              Meet Dr. Shohab
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block w-full text-left py-2 px-4 hover:text-teal-500 mt-2"
              >
                Our Expertise
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <Link
                    href="/sub-menu-1"
                    className="block py-2 px-4 hover:text-teal-500"
                  >
                    Sub Menu 1
                  </Link>
                  <Link
                    href="/sub-menu-2"
                    className="block py-2 px-4 hover:text-teal-500"
                  >
                    Sub Menu 2
                  </Link>
                  <Link
                    href="/sub-menu-3"
                    className="block py-2 px-4 hover:text-teal-500"
                  >
                    Sub Menu 3
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/success-gallery"
              className={`block py-2 px-4 hover:text-teal-500 mt-2 ${isActive(
                "/success-gallery"
              )}`}
            >
              Success Gallery
            </Link>
            <Link
              href="/visit-us"
              className={`block py-2 px-4 hover:text-teal-500 mt-2 ${isActive(
                "/visit-us"
              )}`}
            >
              Visit Us
            </Link>
            <a
              href="https://blog.drshohabhydershaikh.com/"
              className={`block py-2 px-4 hover:text-teal-500 mt-2 ${isActive(
                "/blog"
              )}`}
            >
              Blog
            </a>
            <Link
              href="/book-appointment"
              className={`block bg-teal-500 py-2 px-4 rounded text-white mt-2 ${isActive(
                "/book-appointment"
              )}`}
            >
              Book An Appointment
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
