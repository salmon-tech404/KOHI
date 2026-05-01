import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Hero from "../components/sections/Hero";
import WhyUs from "../components/sections/WhyUs";
import MenuPreview from "../components/sections/MenuPreview";
import StorySection from "../components/sections/StorySection";
import OriginSection from "../components/sections/OriginsSection";
import BeanSection from "../components/sections/BeansSection";

export default function Home() {
  return (
    <main>
      <Navbar variant='light' />
      <Hero />
      <WhyUs />
      <MenuPreview />
      <OriginSection />
      <BeanSection />
      <StorySection />
      <Footer />
    </main>
  );
}
