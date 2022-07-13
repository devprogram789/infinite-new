import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { Rerousel } from "rerousel";
import Slider from "../../components/Slider/Slider";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const workTeams = [
  {
    name: "Daniel",
    position: "Creative Director / Partner",
    img: "../../assets/images/about/staff-01.jpg",
    alt: "staff-01",
  },
  {
    name: "Daniel",
    position: "Creative Director / Partner",
    img: "../../assets/images/about/staff-02.jpg",
    alt: "staff-02",
  },
  {
    name: "Daniel",
    position: "Creative Director / Partner",
    img: "../../assets/images/about/staff-03.jpg",
    alt: "staff-03",
  },
  {
    name: "Daniel",
    position: "Creative Director / Partner",
    img: "../../assets/images/about/staff-04.jpg",
    alt: "staff-04",
  },
  {
    name: "Daniel",
    position: "Creative Director / Partner",
    img: "../../assets/images/about/staff-05.jpg",
    alt: "staff-05",
  },
  {
    name: "Daniel",
    position: "Creative Director / Partner",
    img: "../../assets/images/about/staff-06.jpg",
    alt: "staff-06",
  },
];

export default function WorkSection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="hidden md:block">
          <div className="bg-infinite1-100 px-4">
            <div className="columns-1 mb-10">
              <img
                className="object-cover object-center w-screen h-[650px] 2xl:h-[650px]"
                src="../assets/images/work/pic-work.jpg"
                alt="pic-work"
              />
            </div>
            <div className="columns-1">
              <div className="relative">
                <div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-5/12 bg-infinite2-1"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-96 w-5/12 bg-infinite2-1"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-56 w-screen bg-infinite2-1"></p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="grid grid-cols-12 my-5">
                    <div className="col-span-12">
                      <div className="">
                        <img
                          className="object-cover object-center w-screen h-full"
                          src="../assets/images/work/pic-illustration-1.png"
                          alt="Work-pic-illustration-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns-1">
              <div className="relative">
                <div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-80 w-screen bg-infinite2-4"></p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12">
                      <div className="grid justify-items-center w-full mt-10">
                        <a href="/services/design">
                          <button className="in-button">
                            <img
                              className="object-none object-center"
                              src="../assets/images/work/ปุ่ม-ผลงานของเรา.png"
                              alt="ปุ่ม6"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div>
                        <Slider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns-1">
              <div className="grid grid-cols-12 my-10">
                <div className="col-span-5">
                  <blockquote className="mr-10 my-10">
                    <h2 className="2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                      Infinite Digital
                      ถูกสร้างขึ้นมาจากกลุ่มคนที่มีความทะเยอทะยาน
                      และหลงใหลในสื่อดิจิทัล
                    </h2>
                    <div className="mt-10">
                      <a href="/services/design">
                        <button className="in-button">
                          <img
                            className="object-cover object-center w-38 h-auto"
                            src="../../assets/images/about/ปุ่มservice.png"
                            alt="ปุ่มservice"
                          />
                        </button>
                      </a>
                    </div>
                  </blockquote>
                </div>
                <div className="col-span-7">
                  <blockquote className="mr-10 my-11">
                    <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                      เป้าหมายสูงสุดของเราคือการผสมผสานศิลปะและเทคโนโลยีเข้าด้วยกัน
                      ภารกิจของเราในทุกๆ
                      วันคือการทำให้ทีมเรามีประสิทธิภาพมากขึ้น
                      เพื่อสร้างสรรค์ผลงานที่มีคุณภาพสำหรับลูกค้าของเรา
                    </p>
                    <div className="mt-5">
                      <p className="inline-block h-1 w-4/12 bg-in-purple-3"></p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden"></div>
      </div>
    </>
  );
}
