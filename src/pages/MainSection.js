/* This example requires Tailwind CSS v2.0+ */
import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import { gsap } from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MainSection() {
  return (
      <Navigation />
  );
}
