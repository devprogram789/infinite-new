import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CookiesPolicySection from "../../components/CookiesPolicy/CookiesPolicySection";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CookiesPolicy() {
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
        นโยบายข้อมูลส่วนบุคคลการใช้คุกกี้ - อินฟินิท ดิจิทัล คอนซัลแต้นส์
        </title>
        <meta
          name="description"
          content="บริษัท อินฟินิท ดิจิทัล คอนซัลแต้นส์ จำกัด (“บริษัท”)
          แจ้งให้ท่านผู้ใช้บริการเว็บไซต์ https://theinfinitedigital.com/ (“เว็บไซต์”) ทราบว่า  บริษัทมีความจำเป็นต้องใช้ Cookies"
        />
        <link rel="canonical" href="https://theinfinitedigital.com/cookies-policy/" />
      </Helmet>

      <main>
        <div class="max-w-full md:max-w-full mx-auto overflow-hidden">
          <CookiesPolicySection />
        </div>
      </main>
    </>
  );
}
