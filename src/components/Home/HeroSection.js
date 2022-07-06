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
        <div className="hidden tablet:block laptop:block xllaptop:block desktop:block xldesktop:block">
          <div className="bg-infinite1-100 max-h-screen">
            <div className="max-w-full mx-auto px-4 flex items-center justify-between z-10">
              <div className="relative">
                <img
                  className="object-cover object-bottom w-screen h-144 z-20"
                  src="../assets/images/image-หน้าหลัก01.png"
                  alt="Infinite"
                />
                <div className="absolute -bottom-36 tablet:-bottom-28 laptop:-bottom-32 xldesktop:-bottom-40 left-2 tablet:left-0 desktop:left-10 xldesktop:left-12 z-10">
                  <div className="inline-block w-12/12" ref={boxRef}>
                    <div className="flex flex-row items-stretch justify-start">
                      <div className="shrink w-40 justify-center self-start">
                        <p className="xldesktop:text-5xl desktop:text-4xl xllaptop:text-4xl laptop:text-3xl tablet:text-3xl font-bold text-center">
                          We are
                        </p>
                      </div>
                      <div className="shrink w-20 laptop:w-12 tablet:w-10 h-100 pr-5 mt-2 justify-center">
                        <p className="inline-block h-1 w-full bg-infinite1-900"></p>
                      </div>
                      <div className="shrink w-auto -mt-2 tablet:-mt-1 justify-center items-center">
                        <h1 className="xldesktop:text-7xl desktop:text-6xl xllaptop:text-6xl laptop:text-5xl tablet:text-4xl font-bold">
                          Infinite
                        </h1>
                        <h1 className="xldesktop:text-7xl desktop:text-6xl xllaptop:text-6xl laptop:text-5xl tablet:text-4xl font-bold tablet:mb-2 mb-5">
                          Digital Cunsultants
                        </h1>
                        <p className="text-justify font-extralight xldesktop:text-4xl desktop:text-3xl xllaptop:text-3xl laptop:text-xl tablet:text-lg mb-5">
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
              <p className="inline-block h-60 desktop:h-64 w-1/4 bg-infinite2-4"></p>
              <p className="inline-block h-60 desktop:h-64 w-1/6 bg-in-purple-3"></p>
            </div>
          </div>
          <div
            className="bg-infinite1-100 h-screen xldesktop:mt-0 desktop:mt-28 xllaptop:mt-0 laptop:mt-12 tablet:mt-44 mt-24"
            ref={addToRefs}
          >
            <div className="max-w-full mx-auto px-4 flex items-center justify-between">
              <div className="relative bg-infinite1-100">
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
                    <div className="inline-block w-12/12 xldesktop:10/12">
                      <div className="relative animationWater0">
                        <img
                          className="w-screen h-auto"
                          src="../assets/images/home/section1/ภาพประกอบ1.png"
                          alt="ภาพประกอบ1"
                        />
                        <div className="absolute top-0 right-0 w-3/5 z-10">
                          <div className="inline-block xldesktop:mt-28 mt-20 ml-28 xldesktop:pl-20 xldesktop:pr-5 pl-5">
                            <h2 className="xldesktop:text-2xl text-xl leading-10">
                              เราเป็นทีมออกแบบเว็บไซต์ที่ไม่เหมือนใคร
                              ซึ่งเหมาะกับเอกลักษณ์เฉพาะตัวของแบรนด์ของคุณอย่างแท้จริงเพื่อสร้างประสบการณ์ที่โดดเด่น
                            </h2>
                            <div className="inline-block mt-10 xldesktop:px-20 px-20">
                              <h2 className="xldesktop:text-5xl text-4xl font-bold text-center xldesktop:leading-normal leading-10">
                                “ We’re a small team of creatives committed to
                                design with a purpose ”
                              </h2>
                              <div className="inline-block mt-10 px-10">
                                <p className="xldesktop:text-2xl text-xl text-center xldesktop:leading-normal leading-10">
                                  เพิ่มมูลค่าให้แก่แบรนด์ของคุณ
                                  ให้เป็นที่น่าจดจำและสร้างโอกาสในการขายมากขึ้นด้วยเว็บไซต์ที่ทำหน้าที่และตอบสนองได้อย่างสมบูรณ์ซึ่งออกแบบมาสำหรับผู้ใช้ของคุณ
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-16 right-10 w-1/5">
                          <div className="inline-block ml-10 left-0 m-30 z-0 h-full">
                            <img
                              className="fixed top-20 right-20 pointer-events-none animationWater1 h-144 xldesktop:h-680"
                              src="../assets/images/home/section1/น้ำ1.png"
                              alt="น้ำ1"
                            />
                          </div>
                          <div className="inline-block xldesktop:ml-18 ml-10 xldesktop:left-20 left-0 z-20 ">
                            <button className="in-button">
                              <img
                                className="object-scale-down h-full w-40 xldesktop:w-56"
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
        <div className="block tablet:hidden laptop:hidden xllaptop:hidden desktop:hidden xldesktop:hidden">
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
