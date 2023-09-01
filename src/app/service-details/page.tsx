import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";
import ValuableTeamMembers from "@/components/ValuableTeamMembers";

import Image from "next/image";

export default function ServicesDetails() {
  return (
    <main>
      <Navbar />
      {/* Hero section of service details */}
      <div className="gradient-blue z-0"></div>
      <header className="mt-[150px] flex flex-col lg:flex-row items-center justify-center gap-5">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-primary text-4xl font-semibold w-[350px] lg:w-[500px]">
            Analytics & Reporting Service For Your Business
          </h1>
          <p className="mt-2 text-third text-sm font-light w-[350px] lg:w-[400px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at{" "}
          </p>
          <button className="mt-5 px-5 py-4 primary-color text-white rounded-xl">
            Get Started Now
          </button>
        </div>
        <Image
          src="/Value.png"
          width={300}
          height={300}
          alt="service-details_heroimage"
        />
      </header>
      <Image
        src="/hero-bottom-dots.png"
        width={70}
        height={0}
        alt="bottom dots of header"
      />
      {/* Second section of service details */}
      <section className="mt-[150px] flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <h1 className="text-primary text-3xl px-10 lg:px-0 font-semibold w-[350px] lg:w-[400px]">
            Look What Our Working Process
          </h1>
          <p className="mt-2 text-third text-sm font-light w-[300px] lg:w-[400px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising, but the platform was
            unstable
          </p>
        </div>
        <div className="flex flex-row overflow-y-scroll items-end justify-center mt-10 gap-7">
          <Image
            src="/details_i01.png"
            width={200}
            height={200}
            alt="service_details_image"
          />
          <Image
            src="/details_i02.png"
            width={200}
            height={200}
            alt="service_details_image"
          />
          <Image
            src="/details_i03.png"
            width={200}
            height={200}
            alt="service_details_image"
          />
          <Image
            src="/details_i04.png"
            width={200}
            height={200}
            alt="service_details_image"
          />
        </div>
      </section>
      <div className="gradient-blue lg:ml-[1000px] z-0"></div>
      <section className="mt-[150px] flex flex-col items-center lg:items-center">
        {/* Desktop only*/}
        <Image
          src="/details_third.png"
          width={600}
          height={600}
          alt="details_third_section"
          className="hidden lg:block"
        />
        <h1 className="text-start lg:mr-[100px] text-2xl w-[300px] lg:w-[500px] font-semibold text-primary mt-10">
          Better Agency/SEO Solution At Your Fingertips
        </h1>
        <div className="flex flex-col lg:flex-row lg:ml-[25px] items-start justify-center gap-5 mt-5">
          <p className="mt-2 text-third text-sm font-light w-[300px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising, but the platform was
            unstable
          </p>
          <p className="mt-2 text-third text-sm font-light w-[300px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising, but the platform was
            unstable
          </p>
          {/* mobile version */}
        </div>
        <button className="mt-5 lg:mr-[430px] px-5 py-4 primary-color text-white rounded-xl">
          Get Started Now
        </button>
        <Image
          src="/details_third.png"
          width={300}
          height={300}
          alt="details_third_section"
          className="block lg:hidden mt-10"
        />
      </section>
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      <div className="gradient-yellow z-0"></div>
      {/* Third Section */}
      <section className="mt-[150px] flex flex-col lg:flex-row items-center justify-center">
        {/* Desktop image */}
        <Image
          src="/details_5.png"
          width={400}
          height={400}
          alt="service_details_image"
          className="hidden lg:block"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-primary text-2xl font-semibold w-[360px] lg:w-[500px]">
            Webdesigner News Doesn’t Directly Help You With The Graphic
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-10 gap-4">
            <p className="mt-2 text-third text-sm font-light w-[300px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are serial
              entrepreneurs who, back in 2013, noticed how advanced marketers
              were starting to ramp up their Facebook advertising, but the
              platform was unstable
            </p>
            <p className="mt-2 text-third text-sm font-light w-[300px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are serial
              entrepreneurs who, back in 2013, noticed how advanced marketers
              were.
            </p>
          </div>
          <button className="mt-10 lg:mr-[430px] px-5 py-4 primary-color text-white rounded-xl">
            Get Started Now
          </button>
          {/* mobile image */}
          <Image
            src="/details_5.png"
            width={400}
            height={400}
            alt="service_details_image"
            className="block lg:hidden"
          />
        </div>
      </section>
      <ValuableTeamMembers />
      <div className="gradient-yellow z-0"></div>
      <SuccessStories />
      <Footer />
    </main>
  );
}
