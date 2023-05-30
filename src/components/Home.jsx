import Card from "./Card";
import Community from "./Community";
import CommunityHero from "./CommunityHero";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="px-[3rem]">
      <Navbar />
      <CommunityHero />
      <Community />
      <Hero />
      <Card />
      <Footer />
    </div>
  )
}