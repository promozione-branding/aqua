import Image from "next/image";
import Navbar from "../../components/LandingPage/Navbar";
import FeatureStrip from "../../components/LandingPage/FeatureStrip";
import ProductCategories from "../../components/LandingPage/ProductCategories";
import AboutSection from "../../components/LandingPage/AboutSection";
import FeaturedProducts from "../../components/LandingPage/FeaturedProducts";
import ManufacturingProcess from "../../components/LandingPage/ManufacturingProcess";
import Footer from "../../components/LandingPage/Footer";
import WhyChooseUs from "../../components/LandingPage/WhyChooseUs";
import HeroSection from "../../components/LandingPage/HeroSection";
import CTA from "../../components/LandingPage/CTA";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <HeroSection/>
    <FeatureStrip/>
    <ProductCategories/>
    <AboutSection/>
    <FeaturedProducts/>
    <WhyChooseUs/>
    <ManufacturingProcess/>
    <CTA/>
    {/* <Footer/> */}
    </>
  );
}
