import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectsThumbnails from "@/components/ProjectsThumbnails";
import VisualWaves from "@/components/VisualWaves";
import Contact from "@/components/Contact";
import Olga from "@/components/Olga"

export default function Home() {
  return (
    <main>
      <Hero />
      <Olga />
      <ProjectsThumbnails />      
      <About />
      <VisualWaves />
      <Contact />
    </main>
  );
}
