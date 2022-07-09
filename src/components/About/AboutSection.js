import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const aboutTeams = [
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
export default function AboutSection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="hidden md:block">
          <div className="bg-infinite1-100 px-4">
            <div className="columns-1 mb-10">
              <img
                className="object-cover object-bottom w-screen h-full"
                src="../../assets/images/about/image-หน้า-about-us-01.png"
                alt="หน้า-about-us"
              />
            </div>
            <div className="columns-1">
              <div className="relative">
                <div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-5/12 bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-96 w-5/12 bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-28 w-screen bg-infinite2-4"></p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="grid grid-cols-12 my-10">
                    <div className="col-span-7">
                      <blockquote className="mr-10 py-10">
                        <h1 className="2xl:text-4xl 3xl:text-5xl font-semibold leading-loose mb-5">
                          เราช่วยธุรกิจให้เติบโตในยุคดิจิทัล
                        </h1>
                        <p className="2xl:text-3xl 3xl:text-4xl font-light 2xl:leading-normal 3xl:leading-relaxed">
                          Infinity Digital Agency ก่อตั้งขึ้นในปี 2565
                          โดยผู้ร่วมก่อตั้ง 2
                          คนที่มีจุดมุ่งหมายที่จะเปลี่ยนแปลงความเป็นไปของ
                          Digital Agency ในขณะนั้น เป้าหมายของเราคือการช่วยเหลือ
                          ปรับปรุง เปลี่ยนแปลง
                          และยกระดับธุรกิจที่ต้องการประสบความสำเร็จในโลกดิจิทัล
                          ตั้งแต่นั้นมา
                          ทีมงานของเราก็เติบโตอย่างรวดเร็วและกลายเป็นหนึ่งในดิจิทัลเอเจนซี่ชั้นนำของประเทศไทย
                          แม้ว่าเราจะประสบความสำเร็จในช่วงเวลาสั้นๆ
                          แต่เรายังคงเรียนรู้และพัฒนาทักษะ
                          และประสบการณ์ของเราทุกวันเพื่อเป็นพันธมิตรที่เป็นประโยชน์กับลูกค้าของเรา
                        </p>
                      </blockquote>
                    </div>
                    <div className="col-span-5">
                      <div className="">
                        <img
                          className="object-cover object-center w-screen h-full"
                          src="../../assets/images/about/pic-1.jpg"
                          alt="หน้า-about-us"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 mt-10">
                      <div className="">
                        <img
                          className="object-cover object-center w-screen h-full"
                          src="../../assets/images/about/คำโปรยสวยๆ.jpg"
                          alt="หน้า-about-us"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns-1 hidden"> {/* ซ่อนรายชื่อก่อน */}
              <div className="relative">
                <div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-128 w-screen bg-infinite2-4"></p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="grid grid-cols-2 gap-6">
                    {aboutTeams.map((item) => (
                      <div>
                        <div>
                          <img
                            className="object-cover object-center w-full h-auto"
                            src={item.img}
                            alt="หน้า-about-us"
                          />
                        </div>
                        <blockquote className="mx-10 my-5">
                          <h1 className="text-4xl font-semibold leading-normal">
                            {item.name}
                          </h1>
                          <p className="text-3xl font-light leading-normal">
                            {item.position}
                          </p>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="columns-1">
              <div className="grid grid-cols-12 my-10">
                <div className="col-span-5">
                  <blockquote className="mr-10 my-10">
                    <h2 className="2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                      วัฒนธรรมที่อินฟินิตี้
                      ถูกสร้างขึ้นจากกลุ่มคนที่มีความทะเยอทะยาน
                      และหลงใหลในสื่อดิจิทัล
                    </h2>
                    <div className="mt-10">
                      <img
                        className="object-cover object-center w-38 h-auto"
                        src="../../assets/images/about/ปุ่มservice.png"
                        alt="ปุ่มservice"
                      />
                    </div>
                  </blockquote>
                </div>
                <div className="col-span-7">
                  <blockquote className="mr-10 my-11">
                    <p className="2xl:text-xl 3xl:text-2xl font-light leading-normal">
                      เป้าหมายสูงสุดของเราคือการผสมผสานศิลปะและเทคโนโลยีเข้าด้วยกัน
                      ถึงแม้ว่าจะเป็นเวลาไม่นานนัก
                      แต่เราได้เห็นว่ามีคนจำนวนมากที่แบ่งปันค่านิยมเดียวกันกับเรา
                      ภารกิจของเราในทุกๆวันคือการทำให้ทีมเราเองนั้น ดีขึ้น
                      มีประสิทธิภาพมากขึ้น และมีประโยชน์สำหรับลูกค้าของเรา
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
