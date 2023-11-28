"use client";

import About from "../About/About";
import BlogScape from "../BlogScape/BlogScape";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "../Hero/Hero";
import Offerings from "../Offerings/Offerings";

import { ScrollTop } from "primereact/scrolltop";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Offerings />
        <BlogScape />
        <Contact />
        <ScrollTop />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
