import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/Home/HeroSection";
import ContentSection from "../../components/Home/ContentSection";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
      <Helmet>
        <title>
          Infinite Digital Cunsultants - อินฟินิท ดิจิทัล คอนซัลแต้นส์
          คือเอเจนซี่มืออาชีพ
        </title>
        <meta
          name="description"
          content="เราเป็นทีมออกแบบเว็บไซต์ที่ไม่เหมือนใคร
          ซึ่งเหมาะกับเอกลักษณ์เฉพาะตัวของแบรนด์ของคุณอย่างแท้จริงเพื่อสร้างประสบการณ์ที่รับทำการตลาดออนไลน์ทุกรูปแบบอย่างครบวงจร"
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <main>
        <HeroSection />
        <ContentSection />
      </main>
    </>
  );
}
