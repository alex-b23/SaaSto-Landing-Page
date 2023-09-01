import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuableTeamMembers from "@/components/ValuableTeamMembers";

import Image from "next/image";

export default function BlogDetails() {
  return (
    <main>
      <Navbar />
      <div className="gradient-blue z-0"></div>
      {/* Hero section of blog section */}
      <header className="mt-[150px] flex flex-col items-center justify-center">
        <Image
          src="/blog_image1.png"
          width={800}
          height={800}
          alt="blog_section"
          className="mr-2 lg:mr-0"
        />
        <div className="flex flex-col items-start mt-0 ml-0 lg:-mt-[150px] lg:ml-[200px] lg:bg-white lg:drop-shadow-lg w-[400px] h-auto p-4 rounded-3xl">
          <div className="flex flex-row items-center justify-center gap-[220px]">
            <p className="font-light text-sm text-third">December 05</p>
            <p className="font-light text-sm text-third">Admin</p>
          </div>
          <h1 className="text-lg mt-5 text-third font-semibold w-[250px]">
            Our co-founders Tuomo Riekki{" "}
          </h1>
          <p className="font-light text-sm text-third mt-5">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising,were starting to ramp
            up.
          </p>
        </div>
      </header>
      {/* HEADER SECTION BOTTOM*/}
      <Image
        src="/hero-bottom-dots.png"
        width={70}
        height={0}
        alt="bottom dots of header"
      />
      {/* Second section */}
      <section className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-10">
        <Image
          src="/blogd_image1.png"
          width={400}
          height={400}
          alt="blog_details_image"
        />
        <div className="flex flex-col items-center lg:items-start gap-10">
          <p className="font-light text-sm text-third mt-5 w-[300px] lg:w-[400px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising.
          </p>
          <p className="font-light text-sm text-third mt-5 w-[300px] lg:w-[400px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers.
          </p>
        </div>
      </section>
      {/* Third Section */}
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-[100px] gap-[50px] lg:gap-[150px]">
        <div className="flex flex-col border-t-4 border-[#8976FD]">
          <h1 className="text-third text-2xl mt-2">Related Links</h1>
          <p className="mt-5 border-b-2 text-xl text-color font-semibold w-[200px]">
            Related link with a longer name
          </p>
          <p className="mt-5 text-xl text-color font-semibold w-[200px]">
            Related link
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-light text-sm text-third w-[300px] lg:w-[500px]">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketers were
            starting to ramp up their Facebook advertising, but the platform was
            unstable and cumber-some to manage.
          </p>
          <p className="font-light text-sm text-third mt-5 w-[300px] lg:w-[500px]">
            "The pl-7.png Jults established compatibility of Penlon Sigma Delta
            vaporizers when used with GE Selectatec and Draeger Auto-Exclusion*
            Anaesthesia machines. In particular, Penlon Sigma Delta vaporizers
            make gastight connections, the interlock system works correctly, and
            the function of the anaesthetic machine is not affected."
          </p>
          <p className="font-light text-sm text-third mt-5 w-[300px] lg:w-[500px]">
            A copy of the report can be downloaded here. For more information on
            the Penlon Sigma Delta vaporizer contact your regional
            representative or click here.
          </p>
          <p className="font-light text-sm text-third mt-5 w-[300px] lg:w-[500px]">
            Auto-Exclusion is not available on the Penlon Sigma Delta vaporizer
            in the USA
          </p>
        </div>
      </section>
      {/* Third Section */}
      <div className="gradient-yellow z-0"></div>
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
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      {/* Forth Section */}
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
      <div className="gradient-yellow z-0"></div>
      <ValuableTeamMembers />
      <div className="gradient-yellow z-0"></div>
      <Footer />
    </main>
  );
}
