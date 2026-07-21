import About from "@/components/About";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Team />
      <News />
    </main>
  );
}
