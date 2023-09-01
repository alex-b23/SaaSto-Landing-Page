import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";
import Image from "next/image";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <div className="gradient-blue z-0"></div>
        {/* HERO SECTION HOME PAGE */}
        <header className="flex flex-col lg:flex-row items-center justify-center mt-[90px]">
          {/* SMALL IMAGE */}
          <Image
            src="/hero-image.png"
            width={100}
            height={200}
            alt="hero image smaller"
            className="absolute -ml-[1100px] mb-[300px] hidden lg:block"
          />
          {/* TEXT SECTION */}
          <div className="flex flex-col items-start w-[500px] px-20 lg:px-0 ml-0 lg:ml-[200px] relative">
            <div className="flex flex-row">
              <h1 className="text-4xl font-bold text-primary tracking-wider">
                Committed to People Committed to{" "}
                <span className="text-color">The Future</span>
              </h1>
            </div>
            <p className="mt-2 text-third text-sm font-light">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at{" "}
            </p>
            <button className="mt-5 px-5 py-4 primary-color text-white rounded-xl">
              Get Started Now
            </button>
          </div>
          {/* LARGE IMAGE */}
          <Image
            src="/hero-card-image.png"
            width={700}
            height={500}
            alt="hero image large"
            className="hidden lg:block"
          />
          {/* Mobile only image */}
          <Image
            src="/mobile/hero-mobile.png"
            width={350}
            height={350}
            alt="hero image large"
            className="block -mt-[100px] lg:mt-0 lg:hidden"
          />
        </header>
        {/* HEADER SECTION BOTTOM*/}
        <Image
          src="/hero-bottom-dots.png"
          width={70}
          height={0}
          alt="bottom dots of header"
        />
        {/* FEATURES SECTION OF HOME PAGE*/}
        <section className="flex flex-col lg:flex-row items-center justify-evenly mt-5 lg:mt-10">
          <div className="flex flex-col lg:flex-row items-center">
            <Image
              src="/Icon-01.png"
              width={120}
              height={120}
              alt="home_page icon"
            />
            <div className="flex flex-col items-center lg:items-start mb-2 lg:mb-5">
              <p className="font-bold text-3xl text-primary">15K +</p>
              <p className="font-light text-primary text-sm">Active Users</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <Image
              src="/Icon-02.png"
              width={120}
              height={120}
              alt="home_page icon"
            />
            <div className="flex flex-col items-center lg:items-start mb-2 lg:mb-5">
              <p className="font-bold text-3xl text-primary">30K +</p>
              <p className="font-light text-primary text-sm">Total Downloads</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <Image
              src="/Icon-03.png"
              width={120}
              height={120}
              alt="home_page icon"
            />
            <div className="flex flex-col items-center lg:items-start mb-5">
              <p className="font-bold text-3xl text-primary">10K +</p>
              <p className="font-light text-primary text-sm">Customers</p>
            </div>
          </div>
        </section>
        <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
        <div className="gradient-yellow z-0"></div>
        <div className="gradient-blue lg:ml-[1500px] z-0"></div>
        {/* DASHBOARD PRESENTATION Home_Screen */}
        {/* WTF IS THIS WORKING SO WIERD I CAN'T GET IT TO LOOK LIKE THE DESIGN */}
        {/* NOTE 2 : STILL CAN'T GET IT TO WORK */}
        <section className="flex flex-col lg:flex-row items-center justify-center mt-[100px]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-semibold text-primary text-3xl px-20 lg:px-0 w-[500px] lg:w-[400px] tracking-wider">
              We Are Focus On Your Ultimate Goal
            </h1>
            <p className="text-lg text-third px-20 lg:px-0 w-[500px] mt-5">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium
            </p>
            <div className="flex flex-col lg:flex-row items-center bg-white drop-shadow-lg w-[350px] lg:w-[500px] h-auto lg:h-[90px] rounded-3xl mt-5">
              <Image
                src="/dash-icon-01.png"
                width={100}
                height={100}
                alt="dashboard_presentation icon home_page"
                className="drop-shadow-3xl mt-5"
              />
              <div className="flex flex-col items-start mb-2">
                <p className="font-semibold text-primary">
                  Automatic time tracking
                </p>
                <p className="font-light text-sm text-third mt-5 lg:mt-0">
                  Time Tracking is never been easier.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center bg-white drop-shadow-lg w-[350px] lg:w-[500px] h-auto lg:h-[90px] rounded-3xl mt-5">
              <Image
                src="/dash-icon-02.png"
                width={100}
                height={100}
                alt="dashboard_presentation icon home_page"
                className="drop-shadow-3xl mt-5"
              />
              <div className="flex flex-col items-start mb-2">
                <p className="font-semibold text-primary">
                  Customizable dashboard
                </p>
                <p className="font-light text-sm text-third mt-5 lg:mt-0">
                  Time Tracking is never been easier.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center bg-white drop-shadow-lg w-[350px] lg:w-[500px] h-auto lg:h-[90px] rounded-3xl mt-5">
              <Image
                src="/dash-icon-03.png"
                width={100}
                height={100}
                alt="dashboard_presentation icon home_page"
                className="drop-shadow-3xl mt-5"
              />
              <div className="flex flex-col items-start mb-2">
                <p className="font-semibold text-primary">
                  Statistics retroactively
                </p>
                <p className="font-light text-sm text-third mt-5 lg:mt-0">
                  Time Tracking is never been easier.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/dashboard.png"
            width={800}
            height={500}
            alt="dashboard presentation home_page"
            className="hidden lg:block"
          />
        </section>
        {/* KEY FEATURES Home_Page */}
        <section className="flex flex-col lg:flex-row mt-20 lg:mt-10 relative">
          <div className="flex flex-col lg:flex-row ml-0 lg:ml-[280px] items-center justify-center lg:justify-evenly">
            <Image
              src="/key.png"
              width={650}
              height={400}
              alt="key features_image"
              className="hidden lg:block"
            />
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-semibold text-3xl text-primary w-[350px] lg:w-[400px]">
                Know more about our key features
              </h1>
              <p className="font-light mt-5 text-third text-sm w-[350px] lg:w-[400px]">
                An enim nullam tempor sapien gravida donec enim ipsum porta
                justo congue magna at pretium
              </p>
              <button className="mt-5 primary-color text-white px-5 py-3 rounded-xl">
                Start Trial
              </button>
              <Image
                src="/mobile/key_mobile.png"
                width={340}
                height={340}
                alt="key_mobile"
                className="block lg:hidden -mt-10"
              />
            </div>
          </div>
          <Image
            src="/key-ballon.png"
            width={130}
            height={0}
            className="hidden lg:block ml-0 mb-0 lg:absolute lg:ml-[1580px] lg:mb-[100px]"
            alt="header ballon"
          />
        </section>
        <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
        {/* SIMPLE SOLUTION_Section Home_Page */}
        <section className="flex flex-col lg:flex-row items-center justify-center mt-20">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-semibold text-3xl text-primary w-[350px] lg:w-[500px] relative">
              Simple Solution for Complex Connections
            </h1>
            <p className="p-text text-third mt-5 lg:mt-0 w-[350px] lg:w-[400px]">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium
            </p>
            <button className="mt-5 primary-color text-white px-5 py-3 rounded-xl">
              Start Trial
            </button>
          </div>
          <Image
            src="/solutions_card.png"
            width={400}
            height={0}
            alt="solutions_card"
            className="hidden lg:block"
          />
          <Image
            src="/mobile/mobile_features.png"
            width={250}
            height={0}
            alt="solutions_card"
            className="block lg:hidden mt-5 lg:mt-0"
          />
          <Image
            src="/hero-bottom-dots.png"
            width={80}
            height={80}
            className="absolute mb-[200px] mr-[100px]"
            alt="dots"
          />
        </section>
        {/* MAP OF THE WORLD Home_Page*/}
        <div className="gradient-blue z-0"></div>
        <div className="gradient-blue z-0 lg:ml-[200px]"></div>
        <section className="flex flex-col items-center mt-[120px]">
          <h1 className="heading-text text-primary w-[300px] lg:w-[900px] text-center">
            We Have Support Language For More Than 30 Languages Around The World
          </h1>
          {/* Desktop Map */}
          <Image
            src="/new_map.png"
            width={1000}
            height={1000}
            alt="map of supported languages"
            className="hidden lg:block mt-[100px]"
          />
          {/* Mobile Map */}
          <Image
            src="/new_map.png"
            width={300}
            height={300}
            alt="map of supported languages"
            className="block lg:hidden mt-[100px]"
          />
        </section>
      </div>
      <div className="gradient-yellow z-0"></div>
      <div className="gradient-blue ml-0 lg:ml-[900px] z-0"></div>
      <SuccessStories />
      {/* READING BLOG SECTIONS*/}
      <section className="flex flex-col items-center justify-center mt-10">
        <h1 className="heading-text text-primary">Read our blog</h1>
        <p className="p-text text-third text-center mt-5 w-[300px] lg:w-[500px]">
          Frontegg dramatically sped our go-to-market by cutting our up-front
          development time
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[400px]">
          <h1 className="heading-text text-primary mt-5 lg:mt-10">
            Most popular posts
          </h1>
          <div className="flex flex-row items-center justify-center mt-0 lg:mt-8 gap-5">
            <div className="bg-[#8976FD] bg-opacity-25 p-2 rounded-xl cursor-pointer">
              <MdKeyboardArrowLeft
                style={{ fill: "#8976FD" }}
                className="text-3xl"
              />
            </div>
            <p className="text-color text-lg font-light cursor-pointer">
              1, 2, 3 . .
            </p>
            <div className="bg-[#8976FD] bg-opacity-25 p-2 rounded-xl cursor-pointer">
              <MdKeyboardArrowRight
                style={{ fill: "#8976FD" }}
                className="text-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-[900px] mt-5">
          <div className="flex flex-col items-start justify-center hover:bg-gray-50 rounded-xl p-2 w-[300px] h-auto">
            <Image
              src="/blog-01.png"
              width={300}
              height={300}
              alt="blogpost thumbnail image"
            />
            <div className="flex flex-row text-sm items-center gap-[140px] mt-5 justify-between">
              <p className="text-third ">Random</p>
              <p className="text-third ">24 nov, 2021</p>
            </div>
            <h1 className="mt-5 text-xl font-semibold text-primary w-[280px]">
              Weekly roundup SaaS global SaaS{" "}
            </h1>
            <div className="bg-[#8976FD] mt-5 bg-opacity-20 px-3 py-3 rounded-xl justify-center items-center">
              <button className="text-color">Read more</button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center hover:bg-gray-50 rounded-xl p-2 w-[300px] h-auto">
            <Image
              src="/blog-02.png"
              width={300}
              height={300}
              alt="blogpost thumbnail image"
            />
            <div className="flex flex-row text-sm items-center gap-[140px] mt-5 justify-between">
              <p className="text-third ">Random</p>
              <p className="text-third ">24 nov, 2021</p>
            </div>
            <h1 className="mt-5 text-xl font-semibold text-primary w-[280px]">
              Weekly roundup SaaS global SaaS{" "}
            </h1>
            <div className="bg-[#8976FD] mt-5 bg-opacity-20 px-3 py-3 rounded-xl justify-center items-center">
              <button className="text-color">Read more</button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center hover:bg-gray-50 rounded-xl p-2 w-[300px] h-auto">
            <Image
              src="/blog-01.png"
              width={300}
              height={300}
              alt="blogpost thumbnail image"
            />
            <div className="flex flex-row text-sm items-center gap-[140px] mt-5 justify-between">
              <p className="text-third ">Random</p>
              <p className="text-third ">24 nov, 2021</p>
            </div>
            <h1 className="mt-5 text-xl font-semibold text-primary w-[280px]">
              Weekly roundup SaaS global SaaS{" "}
            </h1>
            <div className="bg-[#8976FD] mt-5 bg-opacity-20 px-3 py-3 rounded-xl justify-center items-center">
              <button className="text-color">Read more</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
