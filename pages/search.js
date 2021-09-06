import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({searchResults}) => {
    const router = useRouter()
    // query params
    const {location,startDate,endDate,numberOfGuests} = router.query
    const formattedStartDate = format(new Date(startDate),"dd MMMM yy")
    const formattedEndDate = format(new Date(endDate),"dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
      <main className="flex dark:bg-gray-800">
        <section className="px-5 pt-4">
          <p className="text-xs dark:text-red-50 ">300+ stays - {range}- for {numberOfGuests}  guests</p>
          <h1 className="text-3xl dark:text-red-100 font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-8-- whitespace-normal">
            <p className="button">Cancellation flexibilty</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">more Filters</p>
          </div>
          <div className="flex mb-8 flex-col">
          {searchResults?.map(({img,location,title,description,star,total,price,long,lat},index)=>(
              <InfoCard key={index} price={price} img={img} location={location} title={title}  desc={description} star={star} price={price} total={total} />
          ))}
          </div>
        </section>
       <section className='hidden xl:inline-flex xl:min-w-[600px]'>
           <Map searchResults={searchResults} />
       </section>
      </main>
      <Footer classname="" />
    </div>
  );
};

export default Search;

export async function getServerSideProps (){
    const searchResults = await fetch("https://links.papareact.com/isz").then((res)=>res.json())
    return{
        props:{
            searchResults
        }
    }
}