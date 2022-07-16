import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeroSectionCopy from "../../components/Home/HeroSection-copy";
import ContentSectionCopy from "../../components/Home/ContentSection-copy";

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
          y: -50,
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
            start: "top start+=-200",
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
          รับทำเว็บไซต์ | รับทำ wordpress ออกแบบเว็บไซต์ รองรับ seo
          รับเขียนโปรแกรม ทุกประเภทของธุรกิจ - รับรองคุณภาพ จากทางบริษัท
        </title>
        <meta
          name="description"
          content="บริษัท รับทำเว็บไชต์ ด้วยทีมงานดูโครสร้างครอบคลุมถึง ux/ui และรองรับ seo สามารถออกแบบเว็บไซต์ ด้วย wordpress รวมถึงการ รับทำการตลาดออนไลน์ ทางด้านสื่อดิจิทัลทุกรูปแบบ รับทำ seo ติดหน้า 1 ของ Google สำหรับบริษัทธุรกิจ ทางเรา รับเขียนโปรแกรม ออกแบบโครงสร้าง ฐานข้อมูล ในรูปแบบขององค์กร"
        />
        <link rel="canonical" href="https://theinfinitedigital.com/" />
      </Helmet>

      <main>
        <div class="max-w-full md:max-w-full mx-auto overflow-hidden">
          <HeroSectionCopy />
          <ContentSectionCopy />
        </div>
      </main>
    </>
  );
}
