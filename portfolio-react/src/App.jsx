
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-pink-500 selection:text-white bg-[#030014]">
      {/* Vibrant Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#030014] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,0,255,0.15),rgba(255,255,255,0))]"></div>

        {/* Colorful Glowing Orbs for vibrancy */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-pink-600/20 blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-cyan-600/10 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
