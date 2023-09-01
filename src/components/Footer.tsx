import Image from "next/image";
import Link from "next/link";

import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-[120px]">
      {/* Purple Subscribe Box in the middle of the Footer Component */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-[#8976FD] lg:-mb-[120px] rounded-3xl w-screen lg:w-[900px] h-auto">
          <h1 className="font-semibold text-white text-2xl w-[300px] lg:w-[500px] p-4 text-center">
            Subscribe To Our Newsletter & Get The Coupon Code.
          </h1>
          <p className="text-white font-light text-sm mt-5">
            All your information is completely confidential
          </p>
          <div className="p-10">
            <button className="text-white yellow-bg px-4 py-3 rounded-xl absolute mt-[5px] z-10 font-light block z-100 ml-[230px]">
              Subscribe
            </button>
            <input
              placeholder="Type your E-mail"
              className="w-[350px] rounded-xl px-[50px] py-5 text-sm relative z-0"
            />
            <Image
              src="/e-mail_icon.png"
              width={25}
              height={25}
              className="-mt-[41px] ml-3 absolute"
              alt="e-mail_icon"
            />
          </div>
        </div>
        {/* Actual Footer Component*/}
        <div className="w-screen h-auto bg-[#8976FD] bg-opacity-20">
          <div className="flex flex-col lg:flex-row items-center justify-center mt-[200px] mb-5 px-0 lg:px-10 gap-[100px]">
            <div className="flex flex-col items-start">
              <Image
                src="/Logo-footer.png"
                width={130}
                height={130}
                alt="logo_footer"
              />
              <p className="w-[250px] mt-5 text-sm font-light text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="flex flex-row items-center justify-between gap-2">
                <button className="primary-color rounded-full p-2 mt-5 cursor-pointer">
                  <AiOutlineInstagram size={20} style={{ fill: "white" }} />
                </button>
                <button className="primary-color rounded-full p-2 mt-5 cursor-pointer">
                  <AiOutlineYoutube size={20} style={{ fill: "white" }} />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-semibold text-lg text-primary">
                Our Services
              </h1>
              <Link href="/" className="text-sm text-secondary font-light mt-5">
                Home
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                About us
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Services
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Team
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Blog
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-semibold text-lg text-primary">
                Our Services
              </h1>
              <Link href="/" className="text-sm text-secondary font-light mt-5">
                Strategy & Research
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Web Development
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Web Solution
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Digital Marketing
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                App Design
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-semibold text-lg text-primary">
                Other Links
              </h1>
              <Link href="/" className="text-sm text-secondary font-light mt-5">
                FAQ
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Portfolio
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Terms & Condition
              </Link>
              <Link href="/" className="text-sm text-secondary font-light mt-2">
                Support
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-20 mb-10 items-center lg:gap-[600px] justify-center">
            <Link href="/" className="text-sm font-light text-third">
              Terms & condition
            </Link>
            <p className="text-sm font-light text-third">
              All Right Reserved @ plowv.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
