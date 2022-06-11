import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function WorkSection() {
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
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between">
            <div class="relative">
              <img
                className="w-screen h-auto"
                src="../assets/images/work/pic-work.jpg"
                alt="Infinite"
              />
            </div>
          </div>
        </div>
        <div className="bg-infinite1-100 h-screen mt-10">
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-center">
            <div class="relative bg-infinite1-100">
              <div className="grid justify-items-center w-full my-10">
                <img
                  className="w-6/6 h-full"
                  src="../assets/images/work/pic-illustration-1.png"
                  alt="Work-pic-illustration-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-80">
        <div className="relative">
          <div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-screen w-full bg-infinite2-1"></p>
              <p className="inline-block h-screen w-full bg-infinite2-1"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-screen w-full bg-infinite2-1"></p>
              <p className="inline-block h-screen w-full bg-infinite2-1"></p>
            </div>
          </div>
          <div className="absolute top-10 right-0 w-full text-right">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-full mx-10 text-center font-bold">
                  <div className="grid justify-items-center w-full my-10">
                    <button className="in-button">
                      <img
                        className="object-none object-center"
                        src="../assets/images/work/ปุ่ม-ผลงานของเรา.png"
                        alt="ปุ่ม6"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative mt-10">
                <div className="col-span-6 mx-10 text-left font-bold">
                  <div className="grid justify-items-center w-full my-10">
                    <img
                      className="object-none object-center w-5/6 h-full rounded-3xl border"
                      src="../assets/images/work/ลูกค้า-1.png"
                      alt="Work-pic-illustration-1"
                    />
                  </div>
                  <div className="grid justify-items-start w-full mx-14">
                    <h2 className="text-3xl">ยูนิโคล่ (ประเทศไทย)</h2>
                    <p className="text-2xl font-light text-infinite2-2">
                      การตลาดออนไลน์
                    </p>
                  </div>
                </div>
                <div className="col-span-6 mx-10 text-left font-bold">
                  <div className="grid justify-items-center w-full my-10">
                    <img
                      className="object-none object-center w-5/6 h-full rounded-3xl border"
                      src="../assets/images/work/ลูกค้า-2.png"
                      alt="Work-pic-illustration-1"
                    />
                  </div>
                  <div className="grid justify-items-start w-full mx-14">
                    <h2 className="text-3xl">ยูนิโคล่ (ประเทศไทย)</h2>
                    <p className="text-2xl font-light text-infinite2-2">
                      การตลาดออนไลน์
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative mt-10">
                <div className="col-span-6 mx-10 text-left font-bold">
                  <div className="grid justify-items-center w-full my-10">
                    <img
                      className="object-none object-center w-5/6 h-full rounded-3xl border"
                      src="../assets/images/work/ลูกค้า-3.png"
                      alt="Work-pic-illustration-1"
                    />
                  </div>
                  <div className="grid justify-items-start w-full mx-14">
                    <h2 className="text-3xl">ยูนิโคล่ (ประเทศไทย)</h2>
                    <p className="text-2xl font-light text-infinite2-2">
                      การตลาดออนไลน์
                    </p>
                  </div>
                </div>
                <div className="col-span-6 mx-10 text-left font-bold">
                  <div className="grid justify-items-center w-full my-10">
                    <img
                      className="object-none object-center w-5/6 h-full rounded-3xl border"
                      src="../assets/images/work/ลูกค้า-4.png"
                      alt="Work-pic-illustration-1"
                    />
                  </div>
                  <div className="grid justify-items-start w-full mx-14">
                    <h2 className="text-3xl">ยูนิโคล่ (ประเทศไทย)</h2>
                    <p className="text-2xl font-light text-infinite2-2">
                      การตลาดออนไลน์
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 w-full">
            <div className="grid grid-cols-12 relative">
              <div className="col-span-4 mx-10 text-left font-bold">
                <h2 className="text-3xl mt-20">
                  วัฒนธรรมที่อินฟินิตี้
                  ถูกสร้างขึ้นจากกลุ่มคนที่มีความทะเยอทะยาน
                  และหลงใหลในสื่อดิจิทัล
                </h2>
                <div className="grid justify-items-start w-full my-10">
                  <button className="in-button">
                    <img
                      className="object-none object-center"
                      src="../assets/images/home/section6/ปุ่ม6.png"
                      alt="ปุ่ม6"
                    />
                  </button>
                </div>
              </div>
              <div className="col-span-8 mx-10 text-left ">
                <h2 className="text-2xl mt-20">
                  เป้าหมายสูงสุดของเราคือการผสมผสานศิลปะและเทคโนโลยีเข้าด้วยกัน
                  ถึงแม้ว่าจะเป็นเวลาไม่นานนัก
                  แต่เราได้เห็นว่ามีคนจำนวนมากที่แบ่งปันค่านิยมเดียวกันกับเรา
                  ภารกิจของเราในทุกๆวันคือการทำให้ทีมเราเองนั้น ดีขึ้น
                  มีประสิทธิภาพมากขึ้น และมีประโยชน์สำหรับลูกค้าของเรา
                </h2>
                <div className="grid justify-items-center w-32 my-10 border bg-gray-dark">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
