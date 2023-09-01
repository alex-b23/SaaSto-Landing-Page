import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuableTeamMembers from "@/components/ValuableTeamMembers";

export default function ContactUs() {
  return (
    <main>
      <Navbar />
      <header className="mt-[150px] flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-semibold text-primary">
            Let’s get in touch!
          </h1>
          <p className="font-light text-sm text-third w-[300px] lg:w-[500px] mt-5">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial
            entrepreneurs who, back in 2013, noticed how advanced marketer
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
            <div className="flex flex-col items-start border-b-2">
              <p className="font-light text-sm text-third">First Name</p>
              <input
                placeholder="Enter your First Name"
                className="mt-5 w-[200px] px-4 text-sm"
              />
            </div>
            <div className="flex flex-col items-start border-b-2">
              <p className="font-light text-sm text-third">Last Name</p>
              <input
                placeholder="Enter your last Name"
                className="mt-5 w-[200px] px-4 text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
            <div className="flex flex-col items-start border-b-2">
              <p className="font-light text-sm text-third">E-mail</p>
              <input
                placeholder="Enter your E-mail"
                className="mt-5 w-[200px] px-4 text-sm"
              />
            </div>
            <div className="flex flex-col items-start border-b-2">
              <p className="font-light text-sm text-third">Phone</p>
              <input
                placeholder="Enter your Phone no."
                className="mt-5 w-[200px] px-4 text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start border-b-2 mt-10">
            <p className="font-light text-sm text-third">Mesage</p>
            <input
              placeholder="Type your message"
              className="mt-5 w-[300px] lg:w-[450px] px-4 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-sm font-light text-third">Adress</h1>
          <p className="text-xl font-semibold text-third mt-5 w-[200px]">
            Address 123 Maint St Anytown, USA
          </p>
          <h1 className="text-sm font-light text-third mt-10">Support</h1>
          <p className="text-xl font-semibold text-third mt-5 w-[200px]">
            +321303555121
          </p>
          <p className="text-xl font-semibold text-third mt-5 w-[200px]">
            sinfo@mymt.com
          </p>
        </div>
      </header>
      <ValuableTeamMembers />
      <Footer />
    </main>
  );
}
