import AboutUs from "./section/about_us";
import Business from "./section/business";
import Expert from "./section/expert";
import Hero from "./section/hero";
import Investment from "./section/investment";
import Launches from "./section/launches";
import Sustainability from "./section/sustainability";
import Township from "./section/township";

export default function Home() {
  return (
    <>
      <Hero />
      <Business />
      <Sustainability />
      <Township />
      <Launches /> 
      <Expert />
      <Investment />
      <AboutUs />
    </>
  );
}
