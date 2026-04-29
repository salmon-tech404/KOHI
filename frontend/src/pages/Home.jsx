import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Hero from "../components/sections/Hero";
import WhyUs from "../components/sections/WhyUs";
import MenuPreview from "../components/sections/MenuPreview";
import StorySection from "../components/sections/StorySection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyUs />
      <MenuPreview />
      <StorySection />
      <Footer />
    </main>
  );
}
