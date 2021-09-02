import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
        ;
      </div>
      {/* middle search */}
      <div className="flex md:shadow-sm items-center md:border-2 rounded-full py-2 ">
        <input
          type="text"
          className="pl-5 text-sm text-gray-600 flex-grow outline-none"
          placeholder="start searching"
        />
        <SearchIcon className="h-8  mr-2 hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline">become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
