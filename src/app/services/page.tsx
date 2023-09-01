import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";
import ValuableTeamMembers from "@/components/ValuableTeamMembers";

import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  return (
    <main>
      <Navbar />
      <div className="gradient-blue z-0"></div>
      {/* Hero Section of Services*/}
      <header className="flex flex-col lg:flex-row items-center justify-center lg:gap-[200px] mt-[150px]">
        <div className="flex flex-col items-center lg:items-start relative lg:mr-[450px]">
          <h1 className="text-3xl text-primary font-semibold w-[350px] lg:w-[400px]">
            We Serve lot of services For Customers
          </h1>
          <p className="mt-5 text-third text-sm font-light w-[350px] lg:w-[400px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at{" "}
          </p>
          <button className="mt-5 px-5 py-4 primary-color text-white rounded-xl">
            Get Started Now
          </button>
        </div>
        <Image
          src="/Cards.png"
          width={650}
          height={0}
          alt="cards header image"
          className="lg:ml-[1100px] lg:absolute mt-10"
        />
      </header>
      {/* HEADER SECTION BOTTOM*/}
      <Image
        src="/hero-bottom-dots.png"
        width={70}
        height={0}
        alt="bottom dots of header"
      />
      {/* Second section of the */}
      <div className="gradient-yellow z-0"></div>
      <section className="flex flex-col items-center mt-20">
        <h1 className="text-2xl font-semibold text-primary text-center w-[350px] lg:w-[400px]">
          Better Agency/SEO Solution At Your Fingertips
        </h1>
        <div className="flex lg:flex-row flex-col items-center justify-normal mt-10 gap-5">
          <div className="flex flex-col items-start bg-white drop-shadow-lg rounded-xl h-auto p-4 w-[350px]">
            <Image
              src="/s-icons-01.png"
              width={60}
              height={60}
              alt="services_icon"
            />
            <h1 className="font-semibold text-primary mt-5 text-lg">
              Analytics and reporting
            </h1>
            <p className="mt-5 text-third font-light text-sm">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <button className="mt-5 text-[#FCA61F]">Read detail</button>
          </div>
          <div className="flex flex-col items-start bg-white drop-shadow-lg rounded-xl h-auto p-4 w-[350px]">
            <Image
              src="/s-icon-02.png"
              width={60}
              height={60}
              alt="services_icon"
            />
            <h1 className="font-semibold text-primary mt-5 text-lg">
              Creative development
            </h1>
            <p className="mt-5 text-third font-light text-sm">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <button className="mt-5 text-[#FCA61F]">Read detail</button>
          </div>
          <div className="flex flex-col items-start bg-white drop-shadow-lg rounded-xl h-auto p-4 w-[350px]">
            <Image
              src="/s-icon-03.png"
              width={60}
              height={60}
              alt="services_icon"
            />
            <h1 className="font-semibold text-primary mt-5 text-lg">
              Email marketing
            </h1>
            <p className="mt-5 text-third font-light text-sm">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <button className="mt-5 text-[#FCA61F]">Read detail</button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-normal mt-5 gap-5">
          <div className="flex flex-col items-start bg-white drop-shadow-lg rounded-xl h-auto p-4 w-[350px]">
            <Image
              src="/s-icon-04.png"
              width={60}
              height={60}
              alt="services_icon"
            />
            <h1 className="font-semibold text-primary mt-5 text-lg">
              Business analytics
            </h1>
            <p className="mt-5 text-third font-light text-sm">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <button className="mt-5 text-[#FCA61F]">Read detail</button>
          </div>
          <div className="flex flex-col items-start bg-white drop-shadow-lg rounded-xl h-auto p-4 w-[350px]">
            <Image
              src="/s-icon-05.png"
              width={60}
              height={60}
              alt="services_icon"
            />
            <h1 className="font-semibold text-primary mt-5 text-lg">
              Video Marketing
            </h1>
            <p className="mt-5 text-third font-light text-sm">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <button className="mt-5 text-[#FCA61F]">Read detail</button>
          </div>
          <div className="flex flex-col items-start bg-white drop-shadow-lg rounded-xl h-auto p-4 w-[350px]">
            <Image
              src="/s-icon-06.png"
              width={60}
              height={60}
              alt="services_icon"
            />
            <h1 className="font-semibold text-primary mt-5 text-lg">
              UX process of business
            </h1>
            <p className="mt-5 text-third font-light text-sm">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <button className="mt-5 text-[#FCA61F]">Read detail</button>
          </div>
        </div>
      </section>
      {/* Third section of the services page */}
      <section className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10 lg:gap-[350px]">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-semibold text-primary w-[300px] lg:w-[400px]">
            We are in 6 years experience in this field
          </h1>
          <p className="text-third font-light text-sm mt-5 w-[300px] lg:w-[400px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at{" "}
          </p>
          <div className="w-[300px] flex flex-nowrap gap-4 bg-white drop-shadow-lg rounded-xl h-auto mt-10 p-4 overflow-y-scroll">
            <Image
              src="/aboutus-logo-01.png"
              width={200}
              height={100}
              alt="logo_aboutus"
            />
            <Image
              src="/aboutus-logo-02.png"
              width={200}
              height={100}
              alt="logo_aboutus"
            />
            <Image
              src="/aboutus-logo-03.png"
              width={200}
              height={100}
              alt="logo_aboutus"
            />
            <Image
              src="/aboutus-logo-04.png"
              width={200}
              height={100}
              alt="logo_aboutus"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center bg-white drop-shadow-lg p-4 rounded-xl">
            <h1 className="text-3xl font-semibold text-primary">15k</h1>
            <p className="mt-2 text-third font-semibold">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center bg-white drop-shadow-lg w-[180px] p-4 rounded-xl">
            <h1 className="text-3xl font-semibold text-primary">400+</h1>
            <p className="mt-2 text-third font-semibold">Complete Work</p>
          </div>
        </div>
      </section>
      <div className="gradient-blue lg:ml-[1000px] z-0"></div>
      <ValuableTeamMembers />
      <div className="gradient-yellow z-0"></div>
      <SuccessStories />
      <Footer />
    </main>
  );
}
