import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Postsart from "./Postsart";
import Faqsection from "./Faqsection";
import GetinTouchSection from "./GetinTouchSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Postsart />
      <Faqsection />
      <GetinTouchSection />
    </div>
  );
}
