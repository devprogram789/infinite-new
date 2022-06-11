import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function HeroSection() {
  const reblockRef = useRef([]);
  reblockRef.current = [];
  useEffect(() => {
    reblockRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        y: 0,
        scaleY: 0,
        transformOrigin: "left top",
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `sectionblock-${index + 1}`,
          trigger: el,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const addblockToRefs = (el) => {
    if (el && !reblockRef.current.includes(el)) {
      reblockRef.current.push(el);
    }
  };

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.from(boxRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.1,
      y: 100,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRef.current + 1}`,
        trigger: boxRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
  });

  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.from(el, {
        autoAlpha: 0,
        ease: "none",
        delay: 0.1,
        opacity: 0.1,
        y: 100,
        duration: 1,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  

  return (
    <>
      <div class="container mx-auto">
        <div className="bg-infinite1-100 h-screen">
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between z-10">
            <div class="relative">
              <img
                className="w-screen h-auto z-20"
                src="../assets/images/image-head.jpg"
                alt="Infinite"
              />
              <div class="absolute -bottom-36 left-12 z-10">
                <div class="inline-block w-12/12" ref={boxRef}>
                  <div className="flex flex-row w items-stretch justify-start">
                    <div className="shrink w-40 justify-center self-start">
                      <p className="text-5xl font-bold text-center">We are</p>
                    </div>
                    <div className="shrink w-40 h-100 pr-4 pl-4 pt-5 justify-center">
                      <p className="inline-block h-2 w-full bg-infinite1-900"></p>
                    </div>
                    <div className="shrink w-auto justify-center items-center">
                      <h1 className="text-7xl font-bold">Infinite</h1>
                      <h1 className="text-7xl font-bold mb-5">
                        Digital Cunsultants
                      </h1>
                      <p className="text-justify text-3xl">
                        อินฟินิท ดิจิทัล คอนซัลแต้นส์ คือเอเจนซี่มืออาชีพ
                        <br />
                        ที่รับทำการตลาดออนไลน์ทุกรูปแบบอย่างครบวงจร
                      </p>
                      <p className="inline-block h-2 w-20 bg-infinite1-900"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="max-w-full mx-auto py-0 px-4 lg:flex lg:items-center lg:justify-end z-0"
            ref={addblockToRefs}
          >
            <p className="inline-block h-96 w-2/6 bg-infinite2-1"></p>
            <p className="inline-block h-96 w-1/6 bg-in-purple-3"></p>
          </div>
        </div>
        <div className="bg-infinite1-100 h-screen mt-80" ref={addToRefs}>
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between">
            <div class="relative bg-infinite1-100">
              <img
                className="w-screen h-auto "
                src="../assets/images/home/section1/bg1.png"
                alt="bg1"
              />

              <div className="box-decoration-clone bg-gradient-to-r from-infinite1-100 to-infinite1-200">
                <div className="absolute top-25 right-11 z-0">
                  <div className="inline-block ml-10 left-0 z-0"></div>
                </div>
                <div className="absolute top-0 left-12 z-10">
                  <div className="inline-block w-12/12">
                    <div className="relative animationWater0">
                      <img
                        className="w-screen h-auto"
                        src="../assets/images/home/section1/ภาพประกอบ1.png"
                        alt="ภาพประกอบ1"
                      />
                      <div className="absolute top-0 right-0 w-3/5 z-10">
                        <div className="inline-block mt-36 ml-28 pl-10">
                          <h2 className="text-3xl leading-10">
                            เราเป็นทีมออกแบบเว็บไซต์ที่ไม่เหมือนใคร
                            ซึ่งเหมาะกับเอกลักษณ์เฉพาะตัวของแบรนด์ของคุณอย่างแท้จริงเพื่อสร้างประสบการณ์ที่โดดเด่น
                          </h2>
                          <div className="inline-block mt-10 px-28">
                            <h2 className="text-4xl font-bold text-center leading-11">
                              “ We’re a small team of creatives committed to
                              design with a purpose ”
                            </h2>
                            <div className="inline-block mt-10 px-24 ">
                              <p className="text-2xl text-center leading-10 ">
                                เพิ่มมูลค่าให้แก่แบรนด์ของคุณ
                                ให้เป็นที่น่าจดจำและสร้างโอกาสในการขายมากขึ้นด้วยเว็บไซต์ที่ทำหน้าที่และตอบสนองได้อย่างสมบูรณ์ซึ่งออกแบบมาสำหรับผู้ใช้ของคุณ
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-16 right-0 w-1/5">
                        <div className="inline-block ml-10 left-0 m-30 z-0 h-100 ">
                          <img
                            className="fixed top-40 right-40 pointer-events-none animationWater1"
                            src="../assets/images/home/section1/น้ำ1.png"
                            alt="น้ำ1"
                          />
                        </div>
                        <div className="inline-block ml-10 left-0 z-20 ">
                          <button className="in-button">
                            <img
                              className="object-scale-down h-full w-60"
                              src="../assets/images/home/section1/ปุ่ม1.png"
                              alt="ปุ่ม1"
                            />
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
