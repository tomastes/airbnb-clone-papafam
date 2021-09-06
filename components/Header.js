import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar, DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({placeholder}) => {
  const router = useRouter()
  const [typing, setTyping] = useState(false);
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  // selection variable
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // handle search change
  const handleChange = (e) => {
    setTyping(true);
    setCity(e.target.value);
  };
  // handleSelectDate
  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  // handle search
  const search=()=>{

    router.push({
      pathname:"/search",
      query:{
        location:city,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        numberOfGuests,
      }
    })
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div  className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image onClick={()=>router.push("/")}
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
          value={ city}
          onChange={(e) => handleChange(e)}
          type="text"
          className="pl-5 text-sm text-gray-600 flex-grow outline-none"
          placeholder={placeholder ||"start searching"}
        />
        <SearchIcon className="h-8  mr-2 hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/*  */}
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline">become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {/* calender */}
      {typing && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            minDate={new Date()}
            rangeColors={["#FD5b61"]}
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
          <div className="flex items-center">
            <h2 className="text-2xl flex-grow font-semibold">
              {" "}
              Number fo guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              defaultValue="1"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex shadow">
            <button className="flex-grow text-gray-500 cursor-pointer">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-500 ">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
