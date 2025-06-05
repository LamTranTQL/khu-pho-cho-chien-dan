import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import CustomSection from "../components/CustomSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import LocationSection from "../components/LocationSection";
import FeatureSection from "../components/FeatureSection";
import MasterPlanSection from "../components/MasterPlanSection";
import ProductTableSection from "../components/ProductTableSection";
import GallerySection from "../components/GallerySection";
import FooterSection from "../components/FooterSection";

const LandingPage = () => {
  return (
    <>
      <Header />

      <CustomSection id='home' paddingTop='64px'>
        <HeroSection />
      </CustomSection>
      <CustomSection id='about' paddingTop={0}>
        <AboutSection />
      </CustomSection>
      <CustomSection id='location' paddingTop={0}>
        <LocationSection />
      </CustomSection>
      <CustomSection id='feature' paddingTop={0}>
        <FeatureSection />
      </CustomSection>
      <CustomSection id='master-plan' paddingTop={0}>
        <MasterPlanSection />
      </CustomSection>
      <CustomSection id='product' paddingTop={0}>
        <ProductTableSection />
      </CustomSection>
      <CustomSection id={"utilities"} paddingTop={0}>
        <GallerySection />
      </CustomSection>
      <CustomSection paddingTop={0}>
        <FooterSection />
      </CustomSection>
    </>
  );
};

export default LandingPage;
