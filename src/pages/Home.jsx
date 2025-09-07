import React from "react";
import Header from "../components/homepage/Header";
import HeroSection from "../components/homepage/HeroSection";
import MainContent from "../components/homepage/MainContent";
import Footer from "../components/homepage/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </>
  );
}
