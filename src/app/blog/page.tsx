import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuableTeamMembers from "@/components/ValuableTeamMembers";

import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <Navbar />
      {/* Hero section */}
      <div className="gradient-blue z-0"></div>
      <header className="mt-[150px] flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-primary text-4xl font-semibold w-[340px] lg:w-[400px]">
            Analytics & Reporting Service For Your Business
          </h1>
          <p className="mt-10 text-third text-sm font-light w-[340px] lg:w-[400px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at{" "}
          </p>
          <button className="mt-10 px-5 py-4 primary-color text-white rounded-xl">
            Get Started Now
          </button>
        </div>
        <Image
          src="/blog_image2.png"
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
      <div className="gradient-yellow z-0"></div>
      {/* Second section */}
      <section className="mt-[150px] hidden lg:flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-primary">
          Read Our Recent Blog{" "}
        </h1>
        <div className="flex flex-row items-center justify-center mt-10 gap-5">
          <div className="flex flex-col items-center">
            <Image
              src="/blog_image3.png"
              width={200}
              height={200}
              alt="blog_image"
            />
            <p className="font-semibold text-third text-lg w-[200px] mt-5">
              Our co-founders Tuomo Riekki and Kristo Ovaska are
            </p>
            <Image
              src="/blog_image4.png"
              width={200}
              height={200}
              alt="blog_image"
              className="mt-2"
            />
            <p className="font-semibold text-third text-lg w-[200px] mt-5">
              Our co-founders Tuomo Riekki and Kristo Ovaska are
            </p>
          </div>
          <Image src="/blog_image5.png" width={380} height={200} alt="image" />
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start border-b-2">
              <div className="flex flex-row items-center justify-between gap-[100px]">
                <p className="font-light text-sm text-third">December 05</p>
                <p className="font-light text-sm text-third">Admin</p>
              </div>
              <h1 className="text-lg mt-5 text-third font-semibold w-[250px]">
                Our co-founders Tuomo Riekki{" "}
              </h1>
              <p className="font-light text-sm text-third mt-5 w-[300px]">
                Our co-founders Tuomo Riekki and Kristo Ovaska are serial
                entrepreneurs who, back in 2013.
              </p>
            </div>
            <div className="flex flex-col items-start border-b-2 mt-5">
              <div className="flex flex-row items-center justify-between gap-[100px]">
                <p className="font-light text-sm text-third">December 05</p>
                <p className="font-light text-sm text-third">Admin</p>
              </div>
              <h1 className="text-lg mt-5 text-third font-semibold w-[250px]">
                Our co-founders Tuomo Riekki{" "}
              </h1>
              <p className="font-light text-sm text-third mt-5 w-[300px]">
                Our co-founders Tuomo Riekki and Kristo Ovaska are serial
                entrepreneurs who, back in 2013.
              </p>
            </div>
            <div className="flex flex-col items-start mt-5">
              <div className="flex flex-row items-center justify-between gap-[100px]">
                <p className="font-light text-sm text-third">December 05</p>
                <p className="font-light text-sm text-third">Admin</p>
              </div>
              <h1 className="text-lg mt-5 text-third font-semibold w-[250px]">
                Our co-founders Tuomo Riekki{" "}
              </h1>
              <p className="font-light text-sm text-third mt-5 w-[300px]">
                Our co-founders Tuomo Riekki and Kristo Ovaska are serial
                entrepreneurs who, back in 2013.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Second section mobile only */}
      <section className="lg:hidden flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-primary">
          Read our recent blog{" "}
        </h1>
        <div className="flex flex-row items-center justify-center mt-2 gap-[145px]">
          <p className="font-light text-sm text-third">December 5</p>
          <p className="font-light text-sm text-third">Admin</p>
        </div>
        <p className="mt-3 font-semibold text-third text-lg">
          Our co-founders Tuomo Riekki{" "}
        </p>
        <p className="mt-3 font-light text-third text-sm w-[300px]">
          Our co-founders Tuomo Riekki and Kristo Ovaska are serial
          entrepreneurs
        </p>
        <Image
          src="/blog_image5.png"
          width={300}
          height={200}
          alt="image"
          className="mt-5"
        />
      </section>
      {/* Third Section */}
      <section className="mt-[150px] flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-primary w-[300px] lg:w-[500px]">
          Look what our working process
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-[50px] lg:gap-[150px]">
          <div className="flex flex-col items-start">
            <Image
              src="/blog_image6.png"
              width={350}
              height={350}
              alt="blog_image"
            />
            <h1 className="text-lg font-semibold text-primary mt-5 w-[300px]">
              Our co-founders Tuomo Riekki and Kristo{" "}
            </h1>
            <p className="font-light text-sm text-third mt-5 w-[300px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are serial
              entrepreneurs who, back in 2013.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/blog_image7.png"
              width={350}
              height={350}
              alt="blog_image"
            />
            <h1 className="text-lg font-semibold text-third mt-5 w-[300px]">
              Our co-founders Tuomo Riekki and Kristo{" "}
            </h1>
            <p className="font-light text-sm text-primary mt-5 w-[300px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are serial
              entrepreneurs who, back in 2013.
            </p>
          </div>
        </div>
        <div className="flex-row hidden lg:flex items-baseline justify-center mt-5 gap-5">
          <div className="flex flex-col items-start">
            <Image
              src="/blog_image12.png"
              width={200}
              height={200}
              alt="blog_image"
            />
            <h1 className="text-third font-semibold w-[200px]">
              Our co-founders Tuomo Riekki{" "}
            </h1>
            <p className="text-third text-sm font-light mt-2 w-[200px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Image
              src="/blog_image9.png"
              width={200}
              height={200}
              alt="blog_image"
            />
            <h1 className="text-third font-semibold w-[200px]">
              Our co-founders Tuomo Riekki{" "}
            </h1>
            <p className="text-third text-sm font-light mt-2 w-[200px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Image
              src="/blog_image10.png"
              width={200}
              height={200}
              alt="blog_image"
            />
            <h1 className="text-third font-semibold w-[200px]">
              Our co-founders Tuomo Riekki{" "}
            </h1>
            <p className="text-third text-sm font-light mt-2 w-[200px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Image
              src="/blog_image11.png"
              width={200}
              height={200}
              alt="blog_image"
            />
            <h1 className="text-third font-semibold w-[200px]">
              Our co-founders Tuomo Riekki{" "}
            </h1>
            <p className="text-third text-sm font-light mt-2 w-[200px]">
              Our co-founders Tuomo Riekki and Kristo Ovaska are
            </p>
          </div>
        </div>
      </section>
      {/* Section */}
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
      <Footer />
    </main>
  );
}
