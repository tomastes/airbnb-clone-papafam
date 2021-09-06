import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {

  
  return (
    <div className="dark:bg-gray-400">
      <Head>
        <title>airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      {/* expolore */}
      <main className="max-w-7xl shadow-lg dark:bg-gray-800 mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl dark:text-red-50 font-semibold pb-5"> Explore Nearby</h2>
          {/* pull data from eindpoints */}
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 sm:items-center">
            {exploreData?.map(({ img, location, distance }, index) => (
              <SmallCard
                key={index}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        {/* middle card */}
        <section>
          <h2 className="text-4xl dark:text-red-50 font-semibold py-8">live any where</h2>
          <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide ">
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </section>
        {/* large card */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="the greatest outdoors"
          description="wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
// /get static rendering
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
