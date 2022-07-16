import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import SliderHome from "./SliderHome/SliderHome";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function HeroSectionCopy() {
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
          start: "top bottom+=100",
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

  const reblockRefMo = useRef([]);
  reblockRefMo.current = [];
  useEffect(() => {
    reblockRefMo.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        x: 50,
        scaleX: 5,
        transformOrigin: "left top",
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `sectionblock-${index + 1}`,
          trigger: el,
          start: "top bottom+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const addblockToRefsMo = (el) => {
    if (el && !reblockRefMo.current.includes(el)) {
      reblockRefMo.current.push(el);
    }
  };

  const reblockRefMoLeft = useRef([]);
  reblockRefMoLeft.current = [];
  useEffect(() => {
    reblockRefMoLeft.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        x: -50,
        scaleX: 5,
        transformOrigin: "right top",
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `sectionblock-${index + 1}`,
          trigger: el,
          start: "top bottom+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const addblockToRefsMoLeft = (el) => {
    if (el && !reblockRefMoLeft.current.includes(el)) {
      reblockRefMoLeft.current.push(el);
    }
  };

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.from(boxRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRef.current + 1}`,
        trigger: boxRef.current,
        start: "top bottom+=100",
        toggleActions: "play none none reverse",
      },
    });
  });

  const boxRefMo = useRef(null);
  useEffect(() => {
    gsap.from(boxRefMo.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRefMo.current + 1}`,
        trigger: boxRefMo.current,
        start: "top bottom+=100",
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
        y: 50,
        duration: 1,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top bottom+=100",
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
      <div className="container mx-auto">
        <div className="hidden md:block">
          <div className="container mx-auto mt-0 md:mt-0 z-10">
            <div className="columns-1">
              <div className="grid grid-cols-12 my-0 justify-items-center">
                <div className="col-span-12">
                  <SliderHome />
                </div>
              </div>
            </div>
          </div>
          <div
            className="container mx-auto mt-0 md:mt-0 z-20"
            ref={addToRefs}
          >
            <div className="relative">
              <div ref={addblockToRefs}>
                <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                  <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-144 w-6 lg:w-10 3xl:w-20 bg-in-purple-3"></p>
                  <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-144 w-72 lg:w-96 xl:w-128 3xl:w-[38rem] bg-infinite2-4"></p>
                </div>
              </div>
              <div className="absolute top-0 md:top-0 2xl:top-5 left-0 lg:left-5 xl:left-0">
                <div className="inline-block w-12/12" ref={boxRef}>
                  <div className="flex flex-col items-stretch justify-start">
                    <div class="grid grid-cols-6 w-full">
                      <div class="row-span-4 col-span-3">
                        <img
                          class="h-auto w-144 2xl:w-144 3xl:w-[45rem] object-cover"
                          src="../assets/images/home/we-are.png"
                          alt="we-are"
                        />
                      </div>
                      <div class="col-span-3 ml-5 3xl:ml-2 mt-3 lg:mt-5 xl:mt-6 2xl:mt-5 self-center">
                        <p className="font-bold uppercase md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-left">
                          Infinite Digital
                          <br />
                          Consultants
                        </p>
                        <p className="text-left uppercase font-extralight md:text-sm lg:text-xl xl:text-3xl 3xl:text-4xl mt-0 lg:mt-2 xl:mt-5 2xl:mt-2">
                          อินฟินิท ดิจิทัล คอนซัลแต้นส์ รับปรึกษา <br />
                          ดูแลด้านเว็บไซต์และระบบโปรแกรม รวมถึง
                          <br />
                          สื่อดิจิทัลออนไลน์ ครบทุกด้านในที่เดียว
                        </p>
                      </div>
                      <div class="col-span-3 mr-10 mt-1 xl:mr-10 xl:mt-2 2xl:mr-5 2xl:mt-10">
                        <p className="text-right font-bold md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl py-2">
                          “จ้างครั้งเดียวจบ ได้ครบทั้งทีม”
                        </p>
                        <div className="grid justify-items-end">
                          <a href="/contact">
                            <button className="in-button">
                              <img
                                className="object-scale-down w-24 lg:w-32 xl:w-40 2xl:w-48"
                                src="../assets/images/home/ปุ่ม-contact-us.png"
                                alt="ปุ่ม-contact-us"
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container mx-auto mt-0 md:mt-0 z-20"
            ref={addToRefs}
          >
            <div className="max-w-full mx-auto px-0 lg:px-4 flex items-center justify-between bg-infinite1-200">
              <div className="relative ">
                <p className="inline-block h-96 lg:h-128 xl:h-[40rem] 2xl:h-[45rem] 3xl:h-[54rem] w-screen"></p>
                <div className="box-decoration-clone bg-gradient-to-r from-infinite1-100 to-infinite1-200">
                  <div className="absolute top-0 left-0 z-10">
                    <div className="inline-block w-12/12">
                      <div className="relative animationWater0">
                        <img
                          className="object-cover object-left-top md:h-96 lg:h-128 xl:h-[40rem] 2xl:h-[45rem] 3xl:h-[54rem] w-auto"
                          src="../assets/images/home/section1/ภาพประกอบ1.png"
                          alt="ภาพประกอบ1"
                        />
                        <div className="absolute top-0 -right-5 xl:-right-20 w-6/6 mx-5 xl:mx-0 z-10">
                          <div className="grid grid-cols-12">
                            <div className="col-start-7 col-end-12">
                              <blockquote className="pt-14 px-[4rem] lg:pt-20 2xl:pt-20 3xl:pt-28">
                                <h1 className="md:text-xs lg:text-sm xl:text-xl 2xl:text-xl 3xl:text-4xl font-bold 2xl:leading-10 3xl:leading-normal">
                                รับทำเว็บไชต์ wordpress และ รับทำ seo ออกแบบเว็บไชต์ให้รองรับระบบของ Google
                                </h1>
                              </blockquote>
                            </div>
                            <div className="col-start-7 col-end-12">
                              <blockquote className="pl-[8rem] pr-[2rem] pt-10 xl:pt-14 2xl:pt-10 3xl:pt-10">
                                <p className="md:text-sm lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-2xl font-light text-left 2xl:leading-normal 3xl:leading-snug">
                                อินฟินิท ดิจิทัล คอนซัลแต้นส์ รับทำเว็บไชต์ รับทำ wordpress รับปรึกษาดูแลด้านเว็บไซต์ให้รองรับด้าน SEO ของ google และ รับเขียนโปรแกรม ทุกประเภทธุรกิจ รวมถึงสื่อดิจิทัลออนไลน์
                                </p>
                              </blockquote>
                            </div>
                            <div className="col-start-7 col-end-12">
                            <blockquote className="pl-[8rem] pr-[2rem] pt-10 xl:pt-14 2xl:pt-10 3xl:pt-5">
                                <p className="md:text-xs lg:text-sm xl:text-xl 2xl:text-xl 3xl:text-2xl font-light text-left 2xl:leading-10 3xl:leading-normal">
                                เราเป็นทีมออกแบบเว็บไซต์ที่สร้างสรรค์ผลงานคุณภาพ ไม่เหมือนใคร และตอบโจทย์ตามความต้องการของลูกค้า เพื่อสร้างเอกลักษณ์เฉพาะตัวของแบรนด์ รวมถึงการสร้างประสบการณ์ที่ดีต่อผู้ใช้งานเว็บไซต์ และรับทำ seo เพื่อรองรับเว็บไชต์ของคุณให้ติดหน้า 1 ของ Google ทุก Platform
                                </p>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                        <div className="absolute md:bottom-0 lg:bottom-0 xl:bottom-0 2xl:bottom-0 3xl:bottom-10 right-10 3xl:right-10 w-1/5 z-0">
                          <div className="inline-block ml-10 2xl:ml-5 3xl:ml-11 left-0 m-30 h-full">
                            <img
                              className="fixed top-20 right-20 xl:right-24 2xl:right-24 3xl:right-[5rem] pointer-events-none animationWater1 md:h-[17rem] lg:h-[22rem] xl:h-[30rem] 2xl:h-[35rem] 3xl:h-[41rem]"
                              src="../assets/images/home/น้ำ1.png"
                              alt="น้ำ1"
                            />
                          </div>
                        </div>
                        <div className="absolute md:bottom-7 lg:bottom-10 xl:bottom-12 2xl:bottom-14 3xl:bottom-10 right-5 lg:right-10 xl:right-0 w-1/5 z-20">
                          <div className="inline-block left-0 mr-0 lg:mr-10 xl:mr-0">
                            <a href="/about">
                              <button className="in-button">
                                <img
                                  className="object-scale-down w-24 lg:w-32 xl:w-48 2xl:w-60 3xl:w-72"
                                  src="../assets/images/home/section1/ปุ่ม1.png"
                                  alt="ปุ่ม1"
                                />
                              </button>
                            </a>
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
        <div className="block md:hidden">
          <div className="bg-infinite1-100 max-h-screen">
            <div className="max-w-full mx-auto flex items-center justify-center z-10">
              <div className="relative">
                <img
                  className="object-cover object-bottom w-screen h-auto z-20"
                  src="../../assets/images/mobile/home/bg2.png"
                  alt="Infinite"
                />
                <div className="absolute top-16 mx-5 z-10">
                  <div className="inline-block w-12/12" ref={boxRefMo}>
                    <div className="flex items-center text-center">
                      <div>
                        <h1 className="text-6xl font-bold leading-tight">
                          We are <br />
                          Infinite Digital <br />
                          Cunsultants
                        </h1>
                        <p className="text-md mt-5">
                          อินฟินิท ดิจิทัล คอนซัลแต้นส์
                          คือเอเจนซี่มืออาชีพที่รับทำการตลาดออนไลน์ทุกรูปแบบอย่างครบวงจร
                        </p>
                        <div className="grid items-center text-center my-2">
                          <div>
                            <p className="leading-3">
                              <span className="inline-block h-1 w-16 rounded bg-infinite1-900"></span>
                              <br />
                              <span className="inline-block h-1 w-16 rounded bg-infinite1-900"></span>
                              <br />
                              <span className="inline-block h-1 w-16 rounded bg-infinite1-900"></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="max-w-full mx-auto flex items-center justify-end mt-5 z-0"
              ref={addblockToRefsMo}
            >
              <p className="inline-block h-6 w-10/12 bg-in-purple-3"></p>
            </div>
          </div>
          <div className="bg-infinite1-200 h-full rounded-3xl mx-5">
            <div
              className="max-w-full mx-auto flex items-center justify-center z-10"
              ref={addToRefs}
            >
              <div className="relative">
                <img
                  className="object-cover object-bottom w-screen h-auto z-20"
                  src="../../assets/images/mobile/home/pic1.png"
                  alt="Infinite"
                />
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mt-5">
            <div
              className="max-w-full mx-auto flex items-center justify-center z-10"
              ref={addToRefs}
            >
              <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-start-1 col-end-7">
                    <div className="w-screen left-0">
                      <img
                        className="object-cover object-left-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element1.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                  <div className="col-end-7 col-span-2">
                    <div className="w-screen right-0">
                      <img
                        className="object-cover object-right-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element2.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0">
                  <blockquote className="m-10">
                    <h2 className="text-3xl font-bold leading-9 mb-5">
                      “ We’re a small team of creatives committed to design with
                      a purpose ”
                    </h2>
                    <p className="text-base mb-5">
                      เราเป็นทีมออกแบบเว็บไซต์ที่ไม่เหมือนใคร
                      ซึ่งเหมาะกับเอกลักษณ์เฉพาะตัวของแบรนด์ของคุณอย่างแท้จริงเพื่อสร้างประสบการณ์ที่โดดเด่น
                    </p>
                    <p className="text-base">
                      เพิ่มมูลค่าให้แก่แบรนด์ของคุณ
                      ให้เป็นที่น่าจดจำและสร้างโอกาสในการขายมากขึ้นด้วยเว็บไซต์ที่ทำหน้าที่และตอบสนองได้อย่างสมบูรณ์ซึ่งออกแบบมาสำหรับผู้ใช้ของคุณ
                    </p>
                  </blockquote>
                  <button className="in-button m-10">
                    <img
                      className="object-scale-down h-full w-32"
                      src="../../assets/images/mobile/home/button-about.png"
                      alt="ปุ่ม1"
                    />
                  </button>
                  <div
                    className="max-w-full mx-auto flex items-center justify-start mt-5 z-0"
                    ref={addblockToRefsMoLeft}
                  >
                    <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen -mt-48">
            <div
              className="max-w-full mx-auto flex items-center justify-center"
              ref={addToRefs}
            >
              <div className="relative">
                <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                  <div className="col-start-1 col-end-7">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/pic2.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-1 col-end-5">
                    <blockquote>
                      <h2 className="text-xl leading-10 text-in-purple-1">
                        วางกลยุทธ์การตลาด SEO
                      </h2>
                    </blockquote>
                  </div>
                  <div className="col-start-5 col-end-7">
                    <blockquote className="mx-1">
                      <hr />
                    </blockquote>
                  </div>
                  <div className="col-start-1 col-end-2">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/icon1.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-2 col-end-7 mx-5">
                    <span className="box-decoration-clone text-in-purple-3 font-bold">
                      <h2 className="text-2xl">
                        SEO Digital <br />
                        Marketing
                      </h2>
                    </span>
                  </div>
                  <div className="col-start-1 col-end-7">
                    <button className="in-button mt-5">
                      <img
                        className="object-scale-down h-full w-32"
                        src="../../assets/images/mobile/home/button-service.png"
                        alt="ปุ่ม1"
                      />
                    </button>
                  </div>
                </div>
                <div
                  className="max-w-full mx-auto flex items-center justify-end mt-5 z-0"
                  ref={addblockToRefsMo}
                >
                  <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mt-5">
            <div
              className="max-w-full mx-auto flex items-center justify-center"
              ref={addToRefs}
            >
              <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-end-7 col-span-2">
                    <div className="w-screen right-0">
                      <img
                        className="object-cover object-right-bottom w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element3.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0">
                  <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                    <div className="col-start-1 col-end-7">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/pic3.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-1 col-end-4">
                      <blockquote>
                        <h2 className="text-xl leading-10 text-in-purple-1">
                          รับออกแบบเว็บไซต์
                        </h2>
                      </blockquote>
                    </div>
                    <div className="col-start-4 col-end-7">
                      <blockquote className="mx-1">
                        <hr />
                      </blockquote>
                    </div>
                    <div className="col-start-1 col-end-2">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/icon2.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-2 col-end-7 mx-5">
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <h2 className="text-2xl">
                          Web
                          <br />
                          designs
                        </h2>
                      </span>
                    </div>
                    <div className="col-start-1 col-end-7">
                      <button className="in-button mt-5">
                        <img
                          className="object-scale-down h-full w-32"
                          src="../../assets/images/mobile/home/button-service.png"
                          alt="ปุ่ม1"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    className="max-w-full mx-auto flex items-center justify-start mt-5 z-0"
                    ref={addblockToRefsMoLeft}
                  >
                    <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mt-56">
            <div
              className="max-w-full mx-auto flex items-center justify-center"
              ref={addToRefs}
            >
              <div className="relative">
                <div className="grid grid-cols-6 gap-0 mx-10 mt-20 items-center justify-center">
                  <div className="col-start-1 col-end-7">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/pic4.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-1 col-end-5">
                    <blockquote>
                      <h2 className="text-xl leading-10 text-in-purple-1">
                        สร้างคอนเทนท์บนโซเชียล
                      </h2>
                    </blockquote>
                  </div>
                  <div className="col-start-5 col-end-7">
                    <blockquote className="mx-1">
                      <hr />
                    </blockquote>
                  </div>
                  <div className="col-start-1 col-end-2">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/icon3.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-2 col-end-7 mx-5">
                    <span className="box-decoration-clone text-in-purple-3 font-bold">
                      <h2 className="text-2xl">
                        Social media
                        <br />
                        experience
                      </h2>
                    </span>
                  </div>
                  <div className="col-start-1 col-end-7">
                    <button className="in-button mt-5">
                      <img
                        className="object-scale-down h-full w-32"
                        src="../../assets/images/mobile/home/button-service.png"
                        alt="ปุ่ม1"
                      />
                    </button>
                  </div>
                </div>
                <div
                  className="max-w-full mx-auto flex items-center justify-end mt-5 z-0"
                  ref={addblockToRefsMo}
                >
                  <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mb-56">
            <div
              className="max-w-full mx-auto flex items-center justify-center"
              ref={addToRefs}
            >
              <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-start-1 col-end-7">
                    <div className="w-screen left-0">
                      <img
                        className="object-cover object-left-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element4.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                  <div className="col-end-7 col-span-2">
                    <div className="w-screen right-0">
                      <img
                        className="object-cover object-right-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element5.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                  <div className="col-start-1 col-end-7">
                    <div className="w-screen left-0">
                      <img
                        className="object-cover object-left-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element6.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0">
                  <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                    <div className="col-start-1 col-end-7 mb-5">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/pic5.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-1 col-end-5">
                      <blockquote>
                        <h2 className="text-lg leading-10 text-in-purple-1">
                          รับเขียนโปรแกรมทุกประเภท
                        </h2>
                      </blockquote>
                    </div>
                    <div className="col-start-5 col-end-7">
                      <blockquote className="mx-1">
                        <hr />
                      </blockquote>
                    </div>
                    <div className="col-start-1 col-end-2">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/icon4.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-2 col-end-7 mx-5">
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <h2 className="text-2xl">
                          Expert
                          <br />
                          Programming
                        </h2>
                      </span>
                    </div>
                    <div className="col-start-1 col-end-7">
                      <button className="in-button mt-5">
                        <img
                          className="object-scale-down h-full w-32"
                          src="../../assets/images/mobile/home/button-service.png"
                          alt="ปุ่ม1"
                        />
                      </button>
                    </div>
                    <div className="col-start-1 col-end-7 mt-20">
                      <h2 className="text-center text-3xl font-bold">
                        Have a project?
                        <br />
                        Let's chat.
                      </h2>
                      <div className="grid justify-items-center w-full">
                        <button className="in-button mt-5">
                          <img
                            className="object-scale-down h-full w-32"
                            src="../../assets/images/mobile/home/button-click-here.png"
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
    </>
  );
}
