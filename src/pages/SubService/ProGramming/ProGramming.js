import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SubProGramming from "../../../components/SubService/SubProGramming";
import { gsap } from "gsap";
import "./ProGramming.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProGramming() {
  const reLogoRefs = useRef([]);
  reLogoRefs.current = [];
  useEffect(() => {
    reLogoRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "none",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `sectionLogo-${index + 1}`,
            trigger: el,
            start: "top end+=-100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addLogoToRefs = (el) => {
    if (el && !reLogoRefs.current.includes(el)) {
      reLogoRefs.current.push(el);
    }
  };
  return (
    <>
      <main>
        <Helmet>
          <title>Expert Programming - Infinite Digital Cunsultants</title>
          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </main>
      <main className="color-mainpro">
        <SubProGramming />
      </main>
    </>
  );
}
