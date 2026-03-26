import Business from "./section/business";
import Hero from "./section/hero";
import Sustainability from "./section/sustainability";
import Township from "./section/township";

export default function Home() {
  return (
    <>
      <Hero />
      <Business />
      <Sustainability />
      <Township />
    </>
  );
}
