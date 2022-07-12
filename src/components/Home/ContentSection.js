import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function ContentSection() {
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
          start: "top bottom",
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
          start: "top bottom",
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

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.from(boxRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.8,
      y: 100,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRef.current + 1}`,
        trigger: boxRef.current,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".animationWater0").forEach((el) => {
      // get just the nested <li> submenu items inside this one
      let items1 = el.querySelectorAll(".animationWater1");
      let items2 = el.querySelectorAll(".animationWater2");
      // if any are found, create the animation and mouseover/mouseout listeners
      if (items1.length > 0) {
        var animationWater1 = gsap.timeline({
          repeat: 2,
          repeatDelay: 1,
        });
        animationWater1.fromTo(
          items1,
          {
            scale: 1,
          },
          {
            rotation: 5,
            duration: 2,
            ease: "elastic.inOut(1, 0.5)",
            x: 50,
            scale: 1,
          }
        );

        el.querySelectorAll(".animationWater1", () => animationWater1.play());
      } else if (items2.length > 0) {
        var animationWater2 = gsap.timeline({
          repeat: 2,
          repeatDelay: 1,
        });
        animationWater2.fromTo(
          items2,
          {
            scale: 1,
          },
          {
            rotation: 5,
            duration: 2,
            ease: "elastic.inOut(1, 0.5)",
            x: -50,
            scale: 1,
          }
        );

        /*         el.addEventListener("click", () => animationWater2.play());
        el.addEventListener("mouseover", () => animationWater2.play());
        el.addEventListener("mouseout", () => animationWater2.reverse()); */
      }
    });
  });
  return (
    <>
      <div className="hidden md:block">
        <div
          className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-0 3xl:mt-0 z-60"
          ref={addToRefs}
        >
          <div className="columns-1">
            <div className="grid grid-cols-12 my-10 justify-items-center">
              <div className="col-span-12">
                <blockquote className="mr-10 my-10 text-center">
                  <h2 className="2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                    ทำไมต้องเลือกเรา
                  </h2>
                  <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                    Why do you choose Infinite Digital
                  </p>
                  <div className="flex items-stretch mx-5">
                    <div className="self-center m-10">
                      <div className="p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design1.png"
                          className="object-cover w-36 h-36 mb-5"
                        />
                      </div>
                      <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        มีครบทุกบริการ
                        <br />
                        ทั้งบริการหลักและ
                        <br />
                        บริการเสริม
                      </p>
                    </div>
                    <div className="self-center m-10">
                      <div className="p-5">
                      <img
                          src="../../assets/images/home/icon-หน้าหลัก-design2.png"
                          className="object-cover w-36 h-36 mb-5"
                        />
                      </div>
                      <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        สามารถทำได้ <br />
                        Requirement ที่คุณ <br />
                        ต้องการ
                      </p>
                    </div>
                    <div className="self-center m-10">
                      <div className="p-5">
                      <img
                          src="../../assets/images/home/icon-หน้าหลัก-design3.png"
                          className="object-cover w-36 h-36 mb-5"
                        />
                      </div>
                      <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        มีทีมงานครบวงจร <br />
                        ทั้งด้านเว็บไซต์และ <br />
                        การตลาดดิจิทัล
                      </p>
                    </div>
                    <div className="self-center m-10">
                      <div className="p-5">
                      <img
                          src="../../assets/images/home/icon-หน้าหลัก-design4.png"
                          className="object-cover w-36 h-36 mb-5"
                        />
                      </div>
                      <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        ยินดีให้คำปรึกษา <br />
                        บริการเป็นกันเอง <br />
                        ฟรี ไม่มีค่าใช้จ่าย
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-5 3xl:mt-5 z-50"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-64 lg:h-96 2xl:h-96 w-2/5 bg-infinite2-1"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-56 lg:h-56 2xl:h-96 w-2/5 bg-infinite2-1"></p>
              </div>
            </div>
            <div className="absolute md:top-10 lg:top-16 2xl:top-16 lg:left-0 2xl:left-20 3xl:left-32">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="md:mx-20 lg:mx-20 2xl:mx-5 md:my-5 lg:my-5 2xl:my-5 3xl:my-8">
                    <img
                      className="object-cover md:h-full lg:h-full 2xl:h-144 3xl:h-full md:w-48 lg:w-64 2xl:w-auto 3xl:w-96 animationWater2"
                      src="../assets/images/home/section2/น้ำ2.png"
                      alt="น้ำ2"
                    />
                  </div>
                  <div className="absolute md:top-0 lg:top-0 2xl:top-20 left-0 w-full z-10">
                    <div className="grid grid-cols-12">
                      <div className="col-start-1 col-span-12">
                        <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-5 lg:py-8 2xl:py-5 3xl:py-0">
                          <h2 className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                            วางกลยุทธ์การตลาด SEO
                          </h2>
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                              SEO Digital <br />
                              Marketing
                            </h2>
                          </span>
                        </blockquote>
                        <div className="2xl:w-full md:mx-10 lg:mx-10 2xl:mx-5 md:my-2 lg:my-5 2xl:my-10">
                          <a href="/services/seo">
                            <button className="in-button">
                              <img
                                className="object-scale-down"
                                src="../assets/images/home/section2/ปุ่ม2.png"
                                alt="ปุ่ม2"
                              />
                            </button>
                          </a>
                        </div>
                        <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-3 lg:py-3 2xl:py-4 md:w-56 lg:w-80 2xl:w-96">
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light mb-2">
                            สร้างฐานลูกค้าที่ตรงกลุ่มเป้าหมายสำหรับบริการของคุณ
                            เพิ่มการเข้าถึงหน้าเว็บไซต์ วิเคราะห์คู่แข่งและค้นหา
                            Keyword ที่เหมาะสม
                          </h2>
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light">
                            เพื่อให้ธุรกิจของคุณอยู่บนหน้าแรกของ Google
                            ด้วยกลยุทธ์ที่พิสูจน์มาแล้วว่าได้ผลจริง
                          </h2>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="absolute md:bottom-0 lg:bottom-0 2xl:bottom-0 right-10 w-3/5 z-0">
                    <div className="inline-block ml-10 left-0 m-30 z-0 h-full">
                      <img
                        className="fixed top-0 right-0 md:h-auto lg:h-auto 2xl:h-auto 3xl:h-auto"
                        src="../assets/images/home/section2/ภาพประกอบ2.png"
                        alt="ภาพประกอบ2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto md:mt-0 lg:mt-0 2xl:mt-16 3xl:mt-20 z-40"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end">
                <p className="inline-block md:h-28 lg:h-40 xl:h-60 2xl:h-48 3xl:h-60 w-2/5 bg-in-purple-3"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-56 lg:h-80 xl:h-96 2xl:h-96 3xl:h-96 w-2/5 bg-infinite1-250"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-32 lg:h-44 xl:h-96 2xl:h-80 3xl:h-96 w-2/5 bg-infinite1-250"></p>
              </div>
            </div>
            <div className="absolute md:top-0 lg:top-0 2xl:top-20 left-10">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-7 md:mx-2 lg:mx-5 2xl:mx-10">
                      <img
                        className="md:object-cover md:object-left-top lg:object-cover lg:object-left-top 2xl:object-cover 2xl:object-left-top md:h-96 lg:h-144 2xl:h-full 3xl:h-full w-auto"
                        src="../assets/images/home/section3/ภาพประกอบ3.png"
                        alt="ภาพประกอบ3"
                      />
                    </div>
                    <div className="col-span-5">
                      <div className="md:mt-20 lg:mt-36 2xl:mt-28 3xl:mt-44">
                        <img
                          className="object-cover md:h-64 lg:h-96 2xl:h-128 2xl:ml-14 3xl:h-144 3xl:ml-20 w-auto animationWater1"
                          src="../assets/images/home/section3/น้ำ3.png"
                          alt="น้ำ3"
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-3/5 text-right">
                        <div className="inline-block md:mr-10 lg:mr-10 2xl:mr-16 md:mt-24 lg:mt-40 2xl:mt-40">
                          <h2 className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                            รับออกแบบเว็บไซต์
                          </h2>
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                              Web design
                            </h2>
                          </span>
                          <div className="grid justify-items-end w-full my-10 3xl:my-14">
                            <a href="/services/design">
                              <button className="in-button">
                                <img
                                  className="object-scale-down"
                                  src="../assets/images/home/section3/ปุ่ม3.png"
                                  alt="ปุ่ม3"
                                />
                              </button>
                            </a>
                          </div>
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light mb-5">
                            รับออกแบบเว็บไซต์ให้สวยงามและ <br />
                            มีสไตล์ชัดเจน ตอบโจทย์ความต้องการของคุณ
                            <br />
                            เพื่อสร้างความน่าเชื่อถือ และเพิ่มผลลัพธ์
                          </h2>
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light">
                            ไม่ว่าจะเป็นการเพิ่มยอดขาย <br />
                            การเยี่ยมชมเว็บไซต์ และสร้างโดยยึดหลักสำคัญ <br />
                            ของการออกแบบเว็บไซต์ คือ <br />
                            <span className="font-semibold">
                              “สวยงาม ทันสมัย ใช้งานง่าย ไม่ซับซ้อน”
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-12 3xl:mt-20 z-30"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-64 lg:h-96 2xl:h-96 w-2/5 bg-infinite2-1"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-56 lg:h-56 2xl:h-96 w-2/5 bg-infinite2-1"></p>
              </div>
            </div>
            <div className="absolute md:top-10 lg:top-16 2xl:top-16 lg:left-0 2xl:left-20 3xl:left-32">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="md:mx-20 lg:mx-20 2xl:mx-5 3xl:mx-20 md:my-5 lg:my-5 2xl:my-5 3xl:my-8">
                    <img
                      className="object-cover md:h-full lg:h-full 2xl:h-144 3xl:h-full md:w-48 lg:w-64 2xl:w-auto 3xl:w-96 animationWater2"
                      src="../assets/images/home/section4/น้ำ4.png"
                      alt="น้ำ4"
                    />
                  </div>
                  <div className="absolute md:top-0 lg:top-0 2xl:top-28 3xl:top-20 left-0 w-full z-10">
                    <div className="grid grid-cols-12">
                      <div className="col-start-1 col-span-12">
                        <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-5 lg:py-8 2xl:py-5 ">
                          <h2 className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                            สร้างคอนเทนท์บนโซเชียล
                          </h2>
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <h2 className="md:text-4xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl">
                              Creative Online <br />
                              and Printing
                            </h2>
                          </span>
                        </blockquote>
                        <div className="2xl:w-full md:mx-10 lg:mx-10 2xl:mx-5 md:my-2 lg:my-5 2xl:my-10">
                          <a href="/services/digital">
                            <button className="in-button">
                              <img
                                className="object-scale-down"
                                src="../assets/images/home/section4/ปุ่ม4.png"
                                alt="ปุ่ม4"
                              />
                            </button>
                          </a>
                        </div>
                        <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-3 lg:py-3 2xl:py-4 md:w-56 lg:w-80 2xl:w-96 3xl:w-128">
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light">
                            สร้างสรรค์เนื้อหาคอนเทนต์ จากการวิเคราห์
                            <br />
                            ข้อมูล Insight ทุกแพลตฟอร์มเพื่อเพิ่มการ
                            <br />
                            เข้าถึงกลุ่มเป้าหมายแต่ละพื้นที่บนโซเชียลได้ตอบโจทย์มากที่สุด
                          </h2>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="absolute md:bottom-0 lg:bottom-0 2xl:bottom-0 right-10 w-3/5 z-0">
                    <div className="inline-block ml-10 left-0 m-30 z-0 h-full">
                      <img
                        className="fixed top-0 right-0 md:h-auto lg:h-auto 2xl:h-auto 3xl:h-auto"
                        src="../assets/images/home/section4/ภาพประกอบ4.png"
                        alt="ภาพประกอบ4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto md:mt-20 lg:mt-40 2xl:mt-20 3xl:mt-32 z-20"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end">
                <p className="inline-block md:h-28 lg:h-40 xl:h-60 2xl:h-48 3xl:h-60 w-2/5 bg-in-purple-3"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-56 lg:h-80 xl:h-96 2xl:h-96 3xl:h-96 w-2/5 bg-infinite1-250"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-32 lg:h-44 xl:h-96 2xl:h-80 3xl:h-96 w-2/5 bg-infinite1-250"></p>
              </div>
            </div>
            <div className="absolute md:top-0 lg:top-0 2xl:top-20 left-10">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-7 md:mx-2 lg:mx-5 2xl:mx-10">
                      <img
                        className="md:object-cover md:object-left-top lg:object-cover lg:object-left-top 2xl:object-cover 2xl:object-left-top md:h-96 lg:h-144 2xl:h-full 3xl:h-full w-auto"
                        src="../assets/images/home/section5/ภาพประกอบ5.png"
                        alt="ภาพประกอบ5"
                      />
                    </div>
                    <div className="col-span-5">
                      <div className="md:mt-20 lg:mt-36 2xl:mt-28 3xl:mt-44">
                        <img
                          className="object-cover md:h-56 lg:h-80 2xl:h-128 2xl:ml-6 3xl:h-144 3xl:ml-10 w-auto animationWater1"
                          src="../assets/images/home/section5/น้ำ5.png"
                          alt="น้ำ5"
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-3/5 text-right">
                        <div className="inline-block md:mr-10 lg:mr-10 2xl:mr-16 md:mt-24 lg:mt-40 2xl:mt-40">
                          <h2 className="md:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-10 text-in-purple-1">
                            รับเขียนโปรแกรม และระบบทุกประเภท
                          </h2>
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                              Expert <br /> Programming
                            </h2>
                          </span>
                          <div className="grid justify-items-end w-full my-10 3xl:my-14">
                            <a href="/services/digital">
                              <button className="in-button">
                                <img
                                  className="object-scale-down"
                                  src="../assets/images/home/section3/ปุ่ม3.png"
                                  alt="ปุ่ม3"
                                />
                              </button>
                            </a>
                          </div>
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light mb-5">
                            ทีมงานเขียนโปรแกรมและพัฒนาระบบ <br />
                            ตามความต้องการของลูกค้าอย่างมืออาชีพ
                            <br />
                            รองรับทุกการใช้งานกับทุกธุรกิจ
                          </h2>
                          <h2 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light">
                            ลูกค้าจะมั่นใจได้ว่า จะได้รับโปรแกรม <br />
                            และระบบเว็บไซต์ที่เหมาะสมใช้งานได้จริง <br />
                            ตรงกับความต้องการ ภายในเวลาที่รวดเร็ว <br />
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-0 z-10">
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-32 lg:h-44 2xl:h-60 md:w-full lg:w-full 2xl:w-full bg-infinite1-100"></p>
                <p className="inline-block md:h-32 lg:h-44 2xl:h-60 md:w-56 lg:w-56 2xl:w-96 bg-in-purple-3"></p>
              </div>
            </div>
            <div className="h-96 w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-full mx-10 text-center font-bold">
                  <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl mt-20">
                    Have a project? Let's chat.
                  </h2>
                  <div className="grid justify-items-center w-full md:my-5 lg:my-5 2xl:my-10">
                    <a href="/contact">
                      <button className="in-button">
                        <img
                          className="object-none object-center"
                          src="../assets/images/home/section6/ปุ่ม6.png"
                          alt="ปุ่ม6"
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
      <div className="block md:hidden"></div>
    </>
  );
}
