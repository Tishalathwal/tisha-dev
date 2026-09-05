import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
