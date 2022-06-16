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
        start: "top center",
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
      <div className="container mx-auto mt-5 z-50" ref={addToRefs}>
        <div className="relative">
          <div ref={addblockToRefs}>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-start -mt-10">
              <p className="inline-block h-96 w-2/5 bg-infinite2-1"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-start -mt-10">
              <p className="inline-block h-screen w-2/5 bg-infinite2-1"></p>
            </div>
          </div>
          <div className="absolute top-48 right-32">
            <div className="h-screen w-full">
              <div className="grid grid-cols-12 relative animationWater0">
                <div className="col-span-5 mx-10">
                  <div className="top-32">
                    <img
                      className="object-none object-top h-full w-full animationWater2"
                      src="../assets/images/home/section2/น้ำ2.png"
                      alt="น้ำ2"
                    />
                  </div>
                  <div className="absolute top-48 left-0 w-full">
                    <div className="grid grid-rows-3 grid-flow-col ">
                      <div>
                        <h2 className="text-3xl leading-10 text-in-purple-1">
                          วางกลยุทธ์การตลาด SEO
                        </h2>
                        <span className="box-decoration-clone text-in-purple-3 font-bold">
                          <h2 className="text-6xl">SEO Digital</h2>
                          <h2 className="text-6xl">Marketing</h2>
                        </span>
                      </div>
                      <div className="grid justify-items-start w-full my-10">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section2/ปุ่ม2.png"
                            alt="ปุ่ม2"
                          />
                        </button>
                      </div>
                      <div className="-mt-18 w-96">
                        <h2 className="text-2xl font-light">
                          เราสามารถเพิ่มจำนวนคนเข้าเว็บไซต์ของคุณด้วยกลยุทธ์ที่พิสูจน์มาแล้วว่าได้ผลจริง
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="bg-indigo-300 absolute top-0 left-20">
                    <img
                      className="object-none object-right h-full w-full"
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
      <div className="container mx-auto mt-5 z-40" ref={addToRefs}>
        <div className="relative">
          <div ref={addblockToRefs}>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end">
              <p className="inline-block h-60 w-2/5 bg-in-purple-3"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-screen w-2/5 bg-infinite1-250"></p>
            </div>
          </div>
          <div className="absolute top-56 left-0">
            <div className="h-screen w-full">
              <div className="grid grid-cols-12 relative animationWater0">
                <div className="col-span-7 mx-10">
                  <img
                    className="object-none object-left-top h-full w-full"
                    src="../assets/images/home/section3/ภาพประกอบ3.png"
                    alt="ภาพประกอบ3"
                  />
                </div>
                <div className="col-span-5">
                  <div className="">
                    <img
                      className="object-none object-top h-full w-full  animationWater1"
                      src="../assets/images/home/section3/น้ำ3.png"
                      alt="น้ำ3"
                    />
                  </div>
                  <div className="absolute top-10 right-32 w-3/5 text-right">
                    <div className="inline-block mt-36 ml-28 pl-10">
                      <h2 className="text-3xl leading-10 text-in-purple-1">
                        รับออกแบบเว็บไซต์
                      </h2>
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <h2 className="text-6xl">Web design</h2>
                      </span>
                      <div className="grid justify-items-end w-full my-10">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section3/ปุ่ม3.png"
                            alt="ปุ่ม3"
                          />
                        </button>
                      </div>
                      <h2 className="text-2xl font-light">
                        พัฒนาเว็บไซต์ครบวงจร
                        <br />
                        เรามีทีมโปรแกรมเมอร์ ที่พร้อม
                        <br />
                        จะพัฒนาเว็บไซต์แบบครบวงจร
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 z-30" ref={addToRefs}>
        <div className="relative">
          <div ref={addblockToRefs}>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-start -mt-10">
              <p className="inline-block h-screen w-2/5 bg-infinite2-1"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-start -mt-10">
              <p className="inline-block h-48 w-2/5 bg-infinite2-1"></p>
            </div>
          </div>
          <div className="absolute top-48 right-20">
            <div className="h-screen w-full ">
              <div className="grid grid-cols-12 relative animationWater0">
                <div className="col-span-5 mx-10">
                  <div className="top-32">
                    <img
                      className="object-none object-top h-full w-full animationWater2 "
                      src="../assets/images/home/section4/น้ำ4.png"
                      alt="น้ำ4"
                    />
                  </div>
                  <div className="absolute top-48 left-0 w-full">
                    <div className="grid grid-rows-3 grid-flow-col ">
                      <div>
                        <h2 className="text-3xl leading-10 text-in-purple-1">
                          สร้างคอนเทนท์บนโซเชียล
                        </h2>
                        <span className="box-decoration-clone text-in-purple-3 font-bold">
                          <h2 className="text-6xl">Social media</h2>
                          <h2 className="text-6xl">experience</h2>
                        </span>
                      </div>
                      <div className="grid justify-items-start w-full my-10">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section4/ปุ่ม4.png"
                            alt="ปุ่ม4"
                          />
                        </button>
                      </div>
                      <div className="-mt-18 w-96">
                        <h2 className="text-2xl font-light">
                          เราให้บริการการสร้างคอนเทนท์ต่างๆ <br />
                          เพื่อให้เว็บไซต์ของคุณสมบูรณ์แบบ <br />
                          โดยถูกต้องตามหลัก
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="bg-indigo-300 absolute top-0 left-20">
                    <img
                      className="object-none object-right h-full w-full"
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
      <div className="container mx-auto mt-5" ref={addToRefs}>
        <div className="relative ">
          <div ref={addblockToRefs}>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end">
              <p className="inline-block h-60 w-2/5 bg-in-purple-3"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-screen w-2/5 bg-infinite1-250"></p>
            </div>
          </div>
          <div className="absolute top-56 left-0 ">
            <div className="h-screen w-full">
              <div className="grid grid-cols-12 relative animationWater0">
                <div className="col-span-7 mx-10">
                  <img
                    className="object-none object-left-top h-full w-full"
                    src="../assets/images/home/section5/ภาพประกอบ5.png"
                    alt="ภาพประกอบ5"
                  />
                </div>
                <div className="col-span-5">
                  <div className="">
                    <img
                      className="object-none object-top h-full w-full animationWater1"
                      src="../assets/images/home/section5/น้ำ5.png"
                      alt="น้ำ5"
                    />
                  </div>
                  <div className="absolute top-10 right-32 w-3/5 text-right">
                    <div className="inline-block mt-36 ml-28 pl-10">
                      <h2 className="text-3xl leading-10 text-in-purple-1">
                        รับเขียนโปรแกรมทุกประเภท
                      </h2>
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <h2 className="text-6xl">Expert</h2>
                        <h2 className="text-6xl">Programming</h2>
                      </span>
                      <div className="grid justify-items-end w-full my-10">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section5/ปุ่ม5.png"
                            alt="ปุ่ม5"
                          />
                        </button>
                      </div>
                      <h2 className="text-2xl font-light">
                        ทีมงานเขียนโปรแกรมและพัฒนาระบบ
                        <br />
                        ตามความต้องการของลูกค้าอย่าง
                        <br />
                        มืออาชีพรองรับทุกการใช้งานกับทุกธุรกิจ
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <div className="relative">
          <div ref={addblockToRefs}>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-60 w-full bg-infinite1-100"></p>
              <p className="inline-block h-60 w-96 bg-in-purple-3"></p>
            </div>
          </div>
          <div className="h-96 w-full">
            <div className="grid grid-cols-12 relative">
              <div className="col-span-full mx-10 text-center font-bold">
                <h2 className="text-6xl mt-20">Have a project? Let's chat.</h2>
                <div className="grid justify-items-center w-full my-10">
                  <button className="in-button">
                    <img
                      className="object-none object-center"
                      src="../assets/images/home/section6/ปุ่ม6.png"
                      alt="ปุ่ม6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
