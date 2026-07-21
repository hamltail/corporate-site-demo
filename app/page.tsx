import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Recruit from "@/components/Recruit";
import Service from "@/components/Service";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Service />
        <Projects />
        <Team />
        <News />
        <Contact />
        <Recruit />
      </main>

      <Footer />
    </>
  );
}
