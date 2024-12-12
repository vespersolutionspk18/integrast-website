import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Postsart from "./Postsart";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Postsart />
    </div>
  );
}
