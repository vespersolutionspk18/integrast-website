import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
    </div>
  );
}
