import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Recruit from "@/components/Recruit";
import Service from "@/components/Service";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Service />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Team />
        </FadeIn>
        <FadeIn>
          <News />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
        <FadeIn>
          <Recruit />
        </FadeIn>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
