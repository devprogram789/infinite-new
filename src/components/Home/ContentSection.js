import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function ContentSectionCopy() {
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
      }
    });
  });
  return (
    <>
      <div className="hidden md:block">
        <div className="container mx-auto mt-0 md:mt-0 z-60" ref={addToRefs}>
          <div className="columns-1">
            <div className="grid grid-cols-12 my-10 2xl:my-20 3xl:my-10 justify-items-center">
              <div className="col-span-12">
                <blockquote className="mx-5 lg:mx-10 text-center">
                  <p className="text-3xl 2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                    ทำไมต้องเลือกเรา
                  </p>
                  <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                    Why do you choose Infinite Digital
                  </p>
                  <div className="flex items-stretch mx-6 2xl:mx-5">
                    <div className="self-center m-2 lg:m-6 xl:m-10">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design1.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        มีครบทุกบริการ <br />
                        ทั้งบริการหลักและ <br />
                        บริการเสริม{" "}
                      </p>{" "}
                    </div>
                    <div className="self-center m-2 lg:m-6 xl:m-10">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design2.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        สามารถทำได้ <br />
                        Requirement ที่ คุณ <br />
                        ต้องการ
                      </p>{" "}
                    </div>
                    <div className="self-center m-2 lg:m-6 xl:m-10">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design3.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        มีทีมงานครบวงจร <br />
                        ทั้งด้านเว็บไซต์ และ <br />
                        การตลาดดิจิทัล
                      </p>
                    </div>
                    <div className="self-center m-2 lg:m-6 xl:m-10">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design4.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>{" "}
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        ยินดีให้คำปรึกษา <br />
                        บริการเป็นกันเอง <br />
                        ฟรี ไม่มีค่าใช้จ่าย
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </blockquote>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container mx-auto mt-0 md:mt-0 z-60" ref={addToRefs}>
          <div className="columns-1">
          <div class="border-b border-indigo-500 mb-10"></div>
            <div className="grid grid-cols-12 my-10 2xl:my-20 3xl:my-10 justify-items-center">
              <div className="col-span-12">
                <blockquote className="mx-5 lg:mx-10 text-center">
                  <p className="text-3xl 2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                    ลูกค้าของเรา
                  </p>
                  <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                    Our Customers
                  </p>
                  <div className="flex items-stretch mx-3 2xl:mx-4 mt-2">
                    <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                      <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                        <img
                          src="../../assets/images/logo-customers/LOGO-kinjai.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                        <img
                          src="../../assets/images/logo-customers/LOGO-ktthome.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                      </div>
                    </div>
                    <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                      <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                        <img
                          src="../../assets/images/logo-customers/LOGO-Entry.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                        <img
                          src="../../assets/images/logo-customers/LOGO-yusei.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                      </div>
                    </div>
                    <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                      <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                        <img
                          src="../../assets/images/logo-customers/LOGO-hotelink.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                        <img
                          src="../../assets/images/logo-customers/LOGO-new yellow.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                      </div>
                    </div>
                    <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                      <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                        <img
                          m-10
                          src="../../assets/images/logo-customers/LOGO-hrr.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                        <img
                          src="../../assets/images/logo-customers/LOGO-TS.jumnumrod.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                      </div>
                    </div>
                    <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                      <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                        <img
                          src="../../assets/images/logo-customers/LOGO-n2property.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                        <img
                          src="../../assets/images/logo-customers/LOGO-เว็บพระ.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                      </div>
                    </div>
                    <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                      <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                        <img
                          src="../../assets/images/logo-customers/LOGO-unisyntech.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                        <img
                          src="../../assets/images/logo-customers/LOGO-amando.png"
                          className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                        />
                      </div>
                    </div>
                  </div>{" "}
                </blockquote>{" "}
                
              </div>{" "}
            </div>{" "}
            <div class="border-b border-indigo-500 mt-5 mb-12"></div>
          </div>{" "}
        </div>{" "}
        <div className="container mx-auto mt-0 md:mt-0 z-50" ref={addToRefs}>
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-96 lg:h-96 xl:h-96 2xl:h-96 3xl:h-128 w-2/5 bg-infinite2-1">
                  {" "}
                </p>{" "}
              </div>{" "}
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-28 lg:h-48 xl:h-96 2xl:h-96 3xl:h-128 w-2/5 bg-infinite2-1">
                  {" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute md:top-0 lg:top-0 2xl:top-0 3xl:top-16 lg:left-0 2xl:left-20 3xl:left-32">
              <div className="inline-block w-12/12 ">
                <div className="relative animationWater0">
                  <div className="md:mx-20 lg:mx-24 xl:mx-20 2xl:mx-5 3xl:px-5 md:my-5 lg:my-5 2xl:my-5 3xl:py-0">
                    <img
                      className="object-cover h-full md:h-full w-[14rem] md:w-[14rem] lg:w-[19rem] xl:w-[20rem] 2xl:w-[26rem] 3xl:w-[30rem] animationWater2"
                      src="../assets/images/home/น้ำ2.png"
                      alt="น้ำ2"
                    />
                  </div>{" "}
                  <div className="absolute md:top-0 lg:top-0 3xl:top-20 left-0 w-full z-10">
                    <div className="grid grid-cols-12">
                      <div className="col-start-1 col-span-12">
                        <blockquote className="mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-5 md:py-3 lg:py-4 xl:py-0 2xl:py-0 3xl:py-0">
                          <img
                            className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                            src="../../assets/images/home/icon1.png"
                            alt="icon1"
                          />
                          <p className="text-base md:text-base lg:text-lg xl:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                            วางกลยุทธ์การตลาด SEO
                          </p>{" "}
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <p className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
                              SEO Digital <br />
                              Marketing{" "}
                            </p>{" "}
                          </span>{" "}
                        </blockquote>{" "}
                        <div className="2xl:w-full mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-5 my-0 md:my-0 lg:my-0 xl:my-2 2xl:my-6 3xl:my-8">
                          <a href="/services/seo">
                            <button className="in-button">
                              <img
                                className="object-scale-down h-10 lg:h-full"
                                src="../assets/images/home/section2/ปุ่ม2.png"
                                alt="ปุ่ม2"
                              />
                            </button>{" "}
                          </a>{" "}
                        </div>{" "}
                        <blockquote className="md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-5 md:py-3 lg:py-4 xl:py-5 2xl:py-4 3xl:py-2 md:w-56 lg:w-80 2xl:w-96 3xl:w-[28rem]">
                          <h2 className="md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-bold mb-2 lg:mb-2">
                            รับทำ seo บริษัทธุรกิจทุกประเภท
                          </h2>{" "}
                          <p className="indent-8 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-light mb-2 lg:mb-5 break-normal">
                            สร้างฐานลูกค้าที่ตรงกลุ่มเป้าหมายสำหรับบริการของคุณ
                            รับทำ seo เพิ่มการเข้าถึงหน้าเว็บไซต์
                            วิเคราะห์คู่แข่งและค้นหา Keyword ที่เหมาะสม
                            เพื่อให้ธุรกิจของคุณอยู่บนหน้าแรกของ Google
                            ด้วยกลยุทธ์ที่พิสูจน์มาแล้วว่าได้ผลจริง
                          </p>{" "}
                        </blockquote>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="absolute md:bottom-0 lg:bottom-0 2xl:bottom-0 right-10 w-5/5 z-0">
                    <div className="inline-block ml-10 left-0 m-30 z-0 h-full">
                      <img
                        className="fixed top-0 right-0 md:h-auto lg:h-auto 2xl:h-auto 3xl:h-[1000px] 3xl:mx-5"
                        src="../assets/images/home/section2/ภาพประกอบ2.png"
                        alt="ภาพประกอบ2"
                      />
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="container mx-auto md:mt-0 lg:mt-0 2xl:mt-5 3xl:mt-0 z-40"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end">
                <p className="inline-block md:h-28 lg:h-40 xl:h-0 2xl:h-16 3xl:h-40 w-2/5 bg-infinite1-250">
                  {" "}
                </p>{" "}
              </div>{" "}
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-56 lg:h-80 xl:h-80 2xl:h-96 3xl:h-96 w-2/5 bg-infinite1-250">
                  {" "}
                </p>{" "}
              </div>{" "}
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-32 lg:h-44 xl:h-96 2xl:h-96 3xl:h-96 w-2/5 bg-infinite1-250">
                  {" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute md:top-0 lg:top-0 xl:top-0 2xl:top-0 3xl:top-0 left-10">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-7 md:mx-2 xl:mx-0 lg:mx-5 2xl:mx-0 3xl:mx-0">
                      <img
                        className="object-cover object-left-top md:h-96 lg:h-144 2xl:h-[50rem] 3xl:h-[50rem] w-auto"
                        src="../assets/images/home/section3/ภาพประกอบ3.png"
                        alt="ภาพประกอบ3"
                      />
                    </div>{" "}
                    <div className="col-span-5">
                      <div className="md:mt-20 lg:mt-36 2xl:mt-10 3xl:mt-10">
                        <img
                          className="object-cover md:h-64 lg:h-96 2xl:h-[35rem] 2xl:ml-16 3xl:h-[45rem] 3xl:ml-26 w-auto animationWater1"
                          src="../assets/images/home/น้ำ3.png"
                          alt="น้ำ3"
                        />
                      </div>{" "}
                      <div className="absolute top-0 right-0 w-3/5 text-right">
                        <div className="inline-block md:mr-10 lg:mr-10 2xl:mr-16 3xl:mr-20 md:mt-24 lg:mt-40 2xl:mt-28 3xl:mt-28">
                          <div className="grid justify-items-end w-full">
                            <img
                              className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                              src="../../assets/images/home/icon2.png"
                              alt="icon2"
                            />
                          </div>{" "}
                          <p className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                            รับออกแบบเว็บไซต์
                          </p>{" "}
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <p className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                              Web design
                            </p>{" "}
                          </span>{" "}
                          <div className="grid justify-items-end w-full my-2 xl:my-2 2xl:my-10 3xl:my-10">
                            <a href="/services/design">
                              <button className="in-button">
                                <img
                                  className="object-scale-down"
                                  src="../assets/images/home/section3/ปุ่ม3.png"
                                  alt="ปุ่ม3"
                                />
                              </button>{" "}
                            </a>{" "}
                          </div>{" "}
                          <h3 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-bold mb-2">
                            ออกแบบเว็บไซต์ พร้อมรองรับ ux/ui
                          </h3>{" "}
                          <p className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light mb-5 break-normal">
                            รับออกแบบเว็บไซต์ให้สวยงามและ <br />
                            มีสไตล์ชัดเจน ตอบโจทย์ความต้องการของคุณ <br />
                            เพื่อสร้างความน่าเชื่อถือ และเพิ่มผลลัพธ์ <br />
                            <br />
                          </p>{" "}
                          <p className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light mb-5 break-normal">
                            ไม่ว่าจะเป็นการเพิ่มยอดขายทางการตลาด <br />
                            การเยี่ยมชมเว็บไซต์ และสร้างโดยยึดหลักสำคัญ <br />
                            ของการออกแบบเว็บไซต์ คือ <br />
                          </p>{" "}
                          <p className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-semibold break-normal">
                            {" "}
                            “สวยงาม ทันสมัย ใช้งานง่าย ไม่ซับซ้อน”
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-12 3xl:mt-20 z-30"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-64 lg:h-96 2xl:h-96 w-2/5 bg-infinite2-1">
                  {" "}
                </p>{" "}
              </div>{" "}
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-start -mt-10">
                <p className="inline-block md:h-56 lg:h-56 2xl:h-96 w-2/5 bg-infinite2-1">
                  {" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute md:top-10 lg:top-16 2xl:top-16 lg:left-0 2xl:left-20 3xl:left-32">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="md:mx-20 lg:mx-20 2xl:mx-5 3xl:mx-20 md:my-5 lg:my-5 2xl:my-5 3xl:my-5">
                    <img
                      className="object-cover md:h-64 lg:h-96 2xl:h-[35rem] 2xl:ml-16 3xl:h-[40rem] 3xl:ml-26 w-auto animationWater2"
                      src="../assets/images/home/น้ำ4.png"
                      alt="น้ำ4"
                    />
                  </div>{" "}
                  <div className="absolute md:top-0 lg:top-0 xl:top-20 2xl:top-0 3xl:top-20 left-0 w-full z-10">
                    <div className="grid grid-cols-12">
                      <div className="col-start-1 col-span-12">
                        <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-5 lg:py-8 2xl:py-3 3xl:py-5">
                          <img
                            className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                            src="../../assets/images/home/icon3.png"
                            alt="icon3"
                          />
                          <p className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                            สร้างคอนเทนท์บนโซเชียล
                          </p>{" "}
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <p className="md:text-4xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl">
                              Creative Online <br />
                              and Printing
                            </p>{" "}
                          </span>{" "}
                        </blockquote>{" "}
                        <div className="2xl:w-full md:mx-10 lg:mx-10 2xl:mx-5 md:my-2 lg:my-5 2xl:my-5 3xl:my-5">
                          <a href="/services/digital">
                            <button className="in-button">
                              <img
                                className="object-scale-down"
                                src="../assets/images/home/section4/ปุ่ม4.png"
                                alt="ปุ่ม4"
                              />
                            </button>{" "}
                          </a>{" "}
                        </div>{" "}
                        <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-3 lg:py-3 2xl:py-4 md:w-56 lg:w-80 2xl:w-96 3xl:w-128">
                          <h4 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-bold mb-2">
                            สร้างคอนเทนท์บนโซเชียล รับเขียนคอนเทนท์
                          </h4>{" "}
                          <p className="indent-8 md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light break-normal">
                            สร้างสรรค์เนื้อหาคอนเทนต์ จากการวิเคราห์
                            <br />
                            ข้อมูล Insight ทุกแพลตฟอร์ม รับเขียนคอนเทนท์
                            <br />
                            เพื่อเพิ่มการ เข้าถึงกลุ่มเป้าหมายแต่ละพื้นที่
                            <br />
                            บนโซเชียลได้ตอบโจทย์มากที่สุด
                          </p>{" "}
                        </blockquote>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="absolute md:bottom-0 lg:bottom-0 2xl:bottom-0 right-10 w-3/5 z-0">
                    <div className="inline-block ml-10 left-0 m-30 z-0 h-full">
                      <img
                        className="fixed top-0 right-0 md:h-96 lg:h-144 2xl:h-[50rem] 3xl:h-[50rem]"
                        src="../assets/images/home/section4/ภาพประกอบ4.png"
                        alt="ภาพประกอบ4"
                      />
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="container mx-auto md:mt-20 lg:mt-40 2xl:mt-20 3xl:mt-32 z-20"
          ref={addToRefs}
        >
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end">
                <p className="inline-block md:h-28 lg:h-40 xl:h-60 2xl:h-10 3xl:h-44 w-2/5 bg-infinite1-250">
                  {" "}
                </p>{" "}
              </div>{" "}
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-56 lg:h-80 xl:h-96 2xl:h-96 3xl:h-96 w-2/5 bg-infinite1-250">
                  {" "}
                </p>{" "}
              </div>{" "}
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-32 lg:h-44 xl:h-96 2xl:h-96 3xl:h-96 w-2/5 bg-infinite1-250">
                  {" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute md:top-0 lg:top-0 2xl:top-0 left-10">
              <div className="inline-block w-12/12">
                <div className="relative animationWater0">
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-7 md:mx-2 lg:mx-5 2xl:mx-0">
                      <img
                        className="object-cover object-left-top md:h-96 lg:h-144 2xl:h-[50rem] 3xl:h-[55rem] w-auto"
                        src="../assets/images/home/section5/ภาพประกอบ5.png"
                        alt="ภาพประกอบ5"
                      />
                    </div>{" "}
                    <div className="col-span-5">
                      <div className="md:mt-20 lg:mt-36 2xl:mt-20 3xl:mt-28">
                        <img
                          className="object-cover md:h-64 lg:h-96 2xl:h-[35rem] 2xl:ml-0 3xl:h-[40rem] 3xl:ml-2 w-auto animationWater1"
                          src="../assets/images/home/น้ำ5.png"
                          alt="น้ำ5"
                        />
                      </div>{" "}
                      <div className="absolute top-0 right-0 w-3/5 text-right">
                        <div className="inline-block md:mr-10 lg:mr-10 2xl:mr-16 md:mt-24 lg:mt-40 2xl:mt-10 3xl:mt-20">
                          <div className="grid justify-items-end w-full">
                            <img
                              className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                              src="../../assets/images/home/icon4.png"
                              alt="icon4"
                            />
                          </div>{" "}
                          <p className="md:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-10 text-in-purple-1">
                            รับเขียนโปรแกรม และระบบทุกประเภท
                          </p>{" "}
                          <span className="box-decoration-clone text-in-purple-3 font-bold">
                            <p className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                              Expert <br /> Programming{" "}
                            </p>{" "}
                          </span>{" "}
                          <div className="grid justify-items-end w-full my-10 2xl:my-8 3xl:my-8">
                            <a href="/services/digital">
                              <button className="in-button">
                                <img
                                  className="object-scale-down"
                                  src="../assets/images/home/section3/ปุ่ม3.png"
                                  alt="ปุ่ม3"
                                />
                              </button>{" "}
                            </a>{" "}
                          </div>{" "}
                          <h5 className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-bold mb-2">
                            รับเขียนโปรแกรม และ แอพพลิเคชั่น ทุกธุรกิจ
                          </h5>{" "}
                          <p className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light mb-5">
                            ทีมงานเขียนโปรแกรมและพัฒนาระบบ <br />
                            ตามความต้องการของลูกค้าอย่างมืออาชีพ
                            <br />
                            รองรับทุกการใช้งานกับทุกธุรกิจ รวมไปถึง <br />
                            แอพพลิเคชั่น ต่างๆ
                          </p>{" "}
                          <p className="md:text-sm lg:text-xl 2xl:text-xl 3xl:text-2xl font-light">
                            ลูกค้าจะมั่นใจได้ว่า จะได้รับโปรแกรม <br />
                            และระบบเว็บไซต์ที่เหมาะสมใช้งานได้จริง <br />
                            ตรงกับความต้องการ ภายในเวลาที่รวดเร็ว <br />
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-0 z-10">
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto -py-4 px-4 flex items-center justify-end -mt-10">
                <p className="inline-block md:h-32 lg:h-44 2xl:h-60 md:w-full lg:w-full 2xl:w-full bg-infinite1-100">
                  {" "}
                </p>{" "}
                <p className="inline-block md:h-32 lg:h-44 2xl:h-60 md:w-56 lg:w-56 2xl:w-96 bg-in-purple-3">
                  {" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="h-96 w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-full mx-10 text-center font-bold">
                  <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl mt-20">
                    Have a project ? Let 's chat.{" "}
                  </h2>{" "}
                  <div className="grid justify-items-center w-full md:my-5 lg:my-5 2xl:my-10">
                    <a href="/contact">
                      <button className="in-button">
                        <img
                          className="object-none object-center"
                          src="../assets/images/home/section6/ปุ่ม6.png"
                          alt="ปุ่ม6"
                        />
                      </button>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="block md:hidden"> </div>
    </>
  );
}
