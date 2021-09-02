import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        objectPosition=""
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">not sure where to go? Perfect</p>
        <button className="bg-white shadow-md rounded-full px-12 py-5 hover:shadow-xl active:scale-90 transition duration-150 text-purple-500">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
