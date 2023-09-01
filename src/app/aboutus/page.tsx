import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";

import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <div className="gradient-blue z-0"></div>
      <div className="gradient-blue z-0 lg-0 lg:ml-[900px]"></div>
      {/* Hero Section of the About us Page*/}
      <header className="mt-[150px] flex flex-col lg:flex-row items-center justify-center gap-5">
        <div className="flex flex-col items-start">
          <h1 className="text-primary text-4xl font-semibold w-[300px] lg:w-[400px]">
            Working Closely With Customers In Our MYMT
          </h1>
          <p className="mt-2 text-third text-sm font-light w-[300px] lg:w-[400px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at{" "}
          </p>
          <button className="mt-5 px-5 py-4 primary-color text-white rounded-xl">
            Get Started Now
          </button>
        </div>
        <Image
          src="/aboutus-header.png"
          width={500}
          height={500}
          alt="aboutus_headerimage"
          className="relative z-1"
        />
        <Image
          src="/Vector 24.png"
          width={100}
          height={100}
          className="absolute z-0 mb-[450px] ml-[200px] lg:mb-[300px] lg:ml-[900px]"
          alt="smallline"
        />
      </header>
      {/* HEADER SECTION BOTTOM*/}
      <Image
        src="/hero-bottom-dots.png"
        width={70}
        height={0}
        alt="bottom dots of header"
      />
      {/* Second Section of the About us page*/}
      <div className="gradient-blue z-0"></div>
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      <div className="gradient-yellow z-0"></div>
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
      {/* Second section of the aboutus page */}
      <div className="gradient-blue z-0 ml-0 lg:ml-[900px]"></div>
      <section className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-[140px]">
        <Image
          src="/aboutus-02.png"
          width={700}
          height={700}
          alt="about_us"
          className="hidden lg:block"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-semibold text-primary w-[300px] lg:w-[400px]">
            We are in 6 years experiennce in this field
          </h1>
          <p className="text-third font-light text-sm mt-5 w-[300px] lg:w-[400px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising, but the platform was
            unstable and cumber-some to manage.
          </p>
          <div className="flex flex-row items-center mt-5 gap-4 bg-white drop-shadow-lg p-4 rounded-xl">
            <Image
              src="/green_dot.png"
              width={30}
              height={30}
              alt="green_dot"
            />
            <p className="font-semibold text-third">
              Get insights only Google can give
            </p>
          </div>
          <div className="flex flex-row items-center mt-2 gap-4 bg-white drop-shadow-lg p-4 rounded-xl">
            <Image
              src="/green_dot.png"
              width={30}
              height={30}
              alt="green_dot"
            />
            <p className="font-semibold text-third">
              Get insights only Google can give
            </p>
          </div>
          <Image
            src="/aboutus-02.png"
            width={700}
            height={700}
            alt="about_us"
            className="block lg:hidden"
          />
        </div>
      </section>
      {/* Third section of the aboutus page*/}
      <div className="gradient-yellow z-0"></div>
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      <section className="mt-10 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-semibold text-primary w-[300px] lg:w-[400px]">
            Supply Chain Optimization
          </h1>
          <p className="text-third font-light text-sm mt-5 w-[300px] lg:w-[400px]">
            Our powerful procurement tools and dedicated consultants simplify
            how your business buys and manages hardware and software. We provide
            end-to-end support for your entire IT lifecycle.
          </p>
          <button className="mt-5 px-5 py-4 primary-color text-white rounded-xl">
            Read More
          </button>
          {/* Mobile only Version */}
          <div className="flex lg:hidden flex-row bg-white drop-shadow-sm p-4 rounded-xl mt-10 w-[300px] h-auto gap-10">
            <Image
              src="/mobile/icon01.png"
              width={120}
              height={100}
              alt="mobile_icon"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-sm font-light text-third">Cloud</h1>
              <p className="text-primary font-semibold">
                Clound solutions & management
              </p>
            </div>
          </div>
          <div className="flex lg:hidden flex-row bg-white drop-shadow-sm p-4 rounded-xl mt-10 w-[300px] h-auto gap-10">
            <Image
              src="/mobile/icon02.png"
              width={120}
              height={100}
              alt="mobile_icon"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-sm font-light text-third">Cloud</h1>
              <p className="text-primary font-semibold">
                Software solutions & services
              </p>
            </div>
          </div>
          <div className="flex lg:hidden flex-row bg-white drop-shadow-sm p-4 rounded-xl mt-10 w-[300px] h-auto gap-10">
            <Image
              src="/mobile/icon03.png"
              width={120}
              height={100}
              alt="mobile_icon"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-sm font-light text-third">Product</h1>
              <p className="text-primary font-semibold">
                Product lifecycle services
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/supply.png"
          width={400}
          height={400}
          alt="supply"
          className="hidden lg:block"
        />
      </section>
      {/* Pricing Plan Section of the about us page*/}
      <div className="gradient-blue z-0 ml-0 lg:ml-[500px]"></div>
      <section className="flex flex-col items-center mt-10">
        <h1 className="font-semibold text-3xl text-primary">Pricing Plan</h1>
        <p className="text-third font-light text-sm mt-5 w-[300px] lg:w-[500px] text-center">
          Two simple options, Free for everyone and the pro for these who need
          that extra flavor.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-between">
          <div className="flex flex-col items-start bg-white drop-shadow-lg mt-5 w-[300px] rounded-xl p-4 h-auto">
            <h1 className="font-semibold text-xl text-primary">Basic,Free</h1>
            <p className="text-third font-light text-sm mt-5 w-[400px]">
              Great for new business
            </p>
            <p className="font-semibold text-primary mt-5">
              • 250 customer profile.
            </p>
            <p className="font-semibold text-primary mt-5">
              • No setup, hidden charge
            </p>
            <p className="font-semibold text-primary mt-5">
              • Entire course library
            </p>
            <p className="font-semibold text-primary mt-5">
              • Integrations facebook
            </p>
            <button className="mt-[100px] px-5 py-4 primary-color text-white rounded-xl">
              Start Now
            </button>
          </div>
          <div className="flex flex-col items-start bg-white drop-shadow-lg mt-5 w-[300px] rounded-xl p-4 h-auto">
            <h1 className="font-semibold text-xl text-primary">Enterprise</h1>
            <p className="text-3xl text-color font-semibold mt-5">$16,90</p>
            <p className="text-third font-light text-sm mt-2 w-[400px]">
              Great for new business
            </p>
            <p className="font-semibold text-primary mt-2">
              • 250 customer profile.
            </p>
            <p className="font-semibold text-primary mt-5">
              • No setup, hidden charge
            </p>
            <p className="font-semibold text-primary mt-5">
              • Entire course library
            </p>
            <p className="font-semibold text-primary mt-5">
              • Integrations facebook
            </p>
            <button className="mt-[70px] px-5 py-4 border border-[#8976FD] text-color rounded-xl">
              Start Now
            </button>
          </div>
          <div className="flex flex-col items-start bg-white drop-shadow-lg mt-5 w-[300px] rounded-xl p-4 h-auto">
            <h1 className="font-semibold text-xl text-primary">Premium</h1>
            <p className="text-3xl text-color font-semibold mt-5">$30,10</p>
            <p className="text-third font-light text-sm mt-2 w-[400px]">
              Great for new business
            </p>
            <p className="font-semibold text-primary mt-2">
              • Include 5 agent plan
            </p>
            <p className="font-semibold text-primary mt-5">
              • No setup, hidden charge
            </p>
            <p className="font-semibold text-primary mt-5">
              • Entire course library
            </p>
            <p className="font-semibold text-primary mt-5">
              • Integrations facebook
            </p>
            <button className="mt-[70px] px-5 py-4 border border-[#8976FD] text-color rounded-xl">
              Start Now
            </button>
          </div>
        </div>
      </section>
      <div className="gradient-yellow z-0"></div>
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      <SuccessStories />
      <div className="gradient-blue z-0 ml-0 lg:ml-[1000px]"></div>
      <Footer />
    </main>
  );
}
