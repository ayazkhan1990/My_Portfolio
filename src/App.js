import { ToastContainer } from "react-toastify";
import "./App.css";
import Hero from "./componants/Hero";
import Skills from "./componants/Skills";
import State from "./componants/State";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <Header />
      <main class="main">
        <Hero />
        <About />
        <State />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <ToastContainer theme="dark" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
