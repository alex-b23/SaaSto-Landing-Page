"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import Buttons from "./Buttons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  let mobileLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/aboutus",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Service Details",
      link: "/service-details",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Blog Details",
      link: "/blog-details",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Login",
      link: "/sign-in",
    },
    {
      name: "Sign-Up",
      link: "/sign-up",
    },
  ];

  let [IsOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-col items-center justify-center">
      {/* SMALL LINE IN THE CORNER OF THE NAVBAR*/}
      <Image
        src="/Navbar-image.png"
        width={50}
        height={50}
        alt="navbar image"
        className="hidden lg:flex lg:relative mr-0 lg:mr-[1660px]"
      />
      <div className="flex flex-row items-center justify-center gap-[200px] lg:gap-[200px] lg:absolute">
        {/* NAVBAR LOGO IMAGE */}
        <Image
          src="/Logo.png"
          width={120}
          height={100}
          alt="website navbar logo"
          className="mt-5 lg:mt-0"
        />
        {/* NAVBAR LINKS */}
        <div className="flex-row items-center gap-5 hidden lg:flex">
          <Link className="text-primary active:text-[#8976FD]" href="/">
            Home
          </Link>
          <Link className="text-primary active:text-[#8976FD]" href="/aboutus">
            About us
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-primary active:text-[#8976FD] flex flex-row items-center">
                Services
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/services"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Services
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/service-details"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Services Details
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-primary flex flex-row items-center">
                Blog
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/blog"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Blog
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/blog-details"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Blog Details
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Link
            className="text-primary active:text-[#8976FD]"
            href="/contact-us"
          >
            Contact us
          </Link>
        </div>
        {/* NAVBAR BUTTONS */}
        <div className="hidden lg:block">
          <Buttons />
        </div>
        {/* NAVBAR MENU MOBILE */}
        <div className="block lg:hidden">
          <AiOutlineMenu
            size={30}
            style={{ fill: "#8976FD" }}
            className="mt-5"
            onClick={() => setIsOpen(!IsOpen)}
          />
        </div>
      </div>
      {mobileLinks.map((link) => (
        <div
          className={`lg:hidden mt-2 flex flex-col items-center justify-center ${
            IsOpen ? "flex" : "hidden"
          }`}
        >
          <Link href={link.link} className="font-light text-third">
            {link.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
