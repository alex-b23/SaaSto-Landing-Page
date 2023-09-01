import Image from "next/image";

const ValuableTeamMembers = () => {
  return (
    <section className="mt-[100px]">
      <div className="gradient-purple ml-0 lg:ml-[750px] z-0"></div>
      <div className="flex flex-col items-center lg:items-center">
        <h1 className="font-semibold text-3xl px-10 lg:px-0 text-primary">
          Our Valueabe Team Members
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
          <div className="w-[300px] flex flex-col items-center justify-center p-4 rounded-xl h-auto bg-white drop-shadow-lg">
            <Image
              src="/image_service_01.png"
              width={80}
              height={80}
              alt="image_services_team"
            />
            <h1 className="mt-10 text-second font-semibold">Andree lena</h1>
            <p className="font-light text-sm text-third mt-2">UI designer</p>
          </div>
          <div className="w-[300px] flex flex-col items-center justify-center p-4 rounded-xl h-auto bg-white drop-shadow-lg">
            <Image
              src="/image_service_02.png"
              width={80}
              height={80}
              alt="image_services_team"
            />
            <h1 className="mt-10 text-second font-semibold">Mark Busnek</h1>
            <p className="font-light text-sm text-third mt-2">
              Product designer
            </p>
          </div>
          <div className="w-[300px] flex flex-col items-center justify-center p-4 rounded-xl h-auto bg-white drop-shadow-lg">
            <Image
              src="/image_service.png"
              width={80}
              height={80}
              alt="image_services_teams"
            />
            <h1 className="mt-10 text-second font-semibold">
              Kristofer salcot
            </h1>
            <p className="font-light text-sm text-third mt-2">Web designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuableTeamMembers;
