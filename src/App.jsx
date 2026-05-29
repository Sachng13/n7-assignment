import "./index.css";
import "./styles/components.css";
import "./styles/responsive.css";

import Navbar from "./components/layout/Navbar";
import Ticker from "./components/layout/Ticker";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";
import CB7Section from "./components/sections/CB7Section";
import CTASection from "./components/sections/CTASection";
import DigitalBanking from "./components/sections/DigitalBanking";
import Insights from "./components/sections/Insights";
import CaseStudies from "./components/sections/CaseStudies";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <Solutions />
        <CB7Section />
        <Ticker />
        <DigitalBanking />
        <CTASection />
        <Insights />
        <CaseStudies />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
