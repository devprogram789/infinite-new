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
          <div className="bg-infinite1-100 max-h-screen">
            <div className="max-w-full mx-auto px-4 flex items-center justify-between z-10">
              <div className="relative">
                <img
                  className="object-cover object-bottom w-screen md:h-80 lg:h-96 2xl:h-144 z-20"
                  src="../assets/images/image-หน้าหลัก01.png"
                  alt="Infinite"
                />
                <div className="absolute md:-bottom-24 lg:-bottom-28 2xl:-bottom-36 2xl:left-5 z-10">
                  <div className="inline-block w-12/12" ref={boxRef}>
                    <div className="flex flex-row items-stretch justify-start">
                      <div className="shrink md:w-32 lg:w-32 2xl:w-40 my-2 justify-center self-start">
                        <p className="font-bold md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl text-center">
                          We are
                        </p>
                      </div>
                      <div className="shrink md:w-10 lg:w-10 2xl:w-20 h-100 md:px-2 lg:px-4 2xl:px-5 md:my-3 lg:my-3 2xl:my-5 justify-center">
                        <p className="inline-block md:h-1 lg:h-1 2xl:h-2 w-full bg-infinite1-900"></p>
                      </div>
                      <div className="shrink w-auto md:mt-2 md:px-2 lg:mt-2 lg:px-4 2xl:px-0 2xl:-mt-1 justify-center items-center">
                        <h1 className="font-bold md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 2xl:mb-2">
                          Infinite <br />
                          Digital Cunsultants
                        </h1>
                        <p className="text-justify font-extralight md:text-sm lg:text-xl 2xl:text-2xl 3xl:text-3xl md:mb-2 lg:mb-5">
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
              className="max-w-full mx-auto py-0 px-4 flex items-center justify-end z-0"
              ref={addblockToRefs}
            >
              <p className="inline-block h-60 2xl:h-80 w-1/4 bg-infinite2-4"></p>
              <p className="inline-block h-60 2xl:h-80 w-1/6 bg-in-purple-3"></p>
            </div>
          </div>
          <div
            className="bg-infinite1-100 md:h-full lg:h-full 2xl:h-screen md:mt-0 lg:mt-0 2xl:mt-28 3xl:mt-0"
            ref={addToRefs}
          >
            <div className="max-w-full mx-auto px-4 flex items-center justify-between">
              <div className="relative bg-infinite1-100">
                <img
                  className="w-screen h-auto"
                  src="../assets/images/home/section1/bg1.png"
                  alt="bg1"
                />

                <div className="box-decoration-clone bg-gradient-to-r from-infinite1-100 to-infinite1-200">
                  <div className="absolute top-0 left-12 z-10">
                    <div className="inline-block w-12/12">
                      <div className="relative animationWater0">
                        <img
                          className="w-screen h-auto"
                          src="../assets/images/home/section1/ภาพประกอบ1.png"
                          alt="ภาพประกอบ1"
                        />
                        <div className="absolute top-0 right-0 w-3/5 z-10">
                          <div className="grid grid-cols-12 2xl:my-10">
                            <div className="col-start-3 col-span-12">
                              <blockquote className="mr-10 md:py-5 lg:py-8 2xl:py-10">
                                <h2 className="md:text-xs lg:text-sm xl:text-2xl 2xl:text-2xl 3xl:text-3xl font-light 2xl:leading-10 3xl:leading-normal">
                                  เราเป็นทีมออกแบบเว็บไซต์ที่ไม่เหมือนใคร
                                  ซึ่งเหมาะกับเอกลักษณ์เฉพาะตัวของแบรนด์ของคุณอย่างแท้จริงเพื่อสร้างประสบการณ์ที่โดดเด่น
                                </h2>
                              </blockquote>
                            </div>
                            <div className="col-start-4 col-span-12">
                              <blockquote className="mr-10">
                                <h2 className="md:text-sm lg:text-2xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl font-bold text-center 2xl:leading-10 3xl:leading-snug">
                                  “ We’re a small team of creatives committed to
                                  design with a purpose ”
                                </h2>
                              </blockquote>
                            </div>
                            <div className="col-start-4 col-span-10">
                              <blockquote className="md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-24 3xl:mx-28 md:py-5 lg:py-5 xl:py-10 2xl:py-10 3xl:py-12">
                                <p className="md:text-xs lg:text-sm xl:text-2xl 2xl:text-2xl 3xl:text-3xl text-center font-light 2xl:leading-10 3xl:leading-normal">
                                  เพิ่มมูลค่าให้แก่แบรนด์ของคุณ
                                  ให้เป็นที่น่าจดจำและสร้างโอกาสในการขายมากขึ้นด้วยเว็บไซต์ที่ทำหน้าที่และตอบสนองได้อย่างสมบูรณ์ซึ่งออกแบบมาสำหรับผู้ใช้ของคุณ
                                </p>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                        <div className="absolute md:bottom-0 lg:bottom-0 xl:bottom-0 2xl:bottom-0 3xl:bottom-10 right-10 w-1/5 z-0">
                          <div className="inline-block ml-10 left-0 m-30 h-full">
                            <img
                              className="fixed top-20 right-20 pointer-events-none animationWater1 md:h-60 lg:h-96 2xl:h-144"
                              src="../assets/images/home/section1/น้ำ1.png"
                              alt="น้ำ1"
                            />
                          </div>
                        </div>
                        <div className="absolute md:bottom-0 lg:bottom-0 xl:bottom-0 2xl:bottom-0 3xl:bottom-10 right-10 w-1/5 z-20">
                          <div className="inline-block ml-10 left-0">
                            <a href="/about">
                              <button className="in-button">
                                <img
                                  className="object-scale-down"
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
