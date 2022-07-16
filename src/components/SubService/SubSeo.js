import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SubSeo() {
  return (
    <>
      <div className="hidden md:block">
        <div className="container mx-auto">
          <div className="bg-infinite1-100 h-screen">
            <div className="columns-1 mb-10">
              <div className="grid justify-items-center">
                <img
                  className="object-cover object-center w-auto h-[650px] 2xl:h-[650px] 3xl:h-[750px]"
                  src="../../assets/images/service/Seo/pic-illustration-head-1.png"
                  alt="pic-illustration-head-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
                <p className="inline-block h-screen w-full bg-white"></p>
              </div>
              <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
                <p className="inline-block h-48 w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute top-10 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-6 mx-16 text-left font-bold">
                    <div className="grid justify-items-start w-full">
                      <h2 className="text-8xl 3xl:text-9xl mt-5 text-in-purple-1 font-R-FLEX">
                        Seo Digital Marketing
                      </h2>
                      <h3 className="text-4xl 3xl:text-5xl font-normal mt-5 text-infinite2-3 leading-normal">
                        สร้างคอนเทนท์ SEO <br />
                        ให้เว็บไซต์ติดหน้าแรก <br />
                        บน Google
                      </h3>
                    </div>
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
                  <div className="col-span-6 mx-16 text-left">
                    <h3 className="text-3xl 3xl:text-4xl mt-10 font-normal text-in-purple-2">
                      การทำ SEO คือการทำให้ชื่อแบรนด์
                    </h3>
                    <p className="text-3xl 3xl:text-4xl font-light mt-2 leading-normal">
                      ชื่อผลิตภัณฑ์/บริการ ของคุณ ติดอันดับการค้นหา
                      ผลลัพธ์ที่ตามมาคือความน่าเชื่อถือ
                      และจำนวนผู้คนวิ่งเข้าเว็บ
                      ยิ่งคนวิ่งเข้าเยอะมากขึ้นเท่าไหร่
                      ผลิตภัณฑ์ของคุณก็จะมีโอกาสเพิ่มยอดขายได้มากเท่านั้น
                    </p>
                    <p className="text-3xl 3xl:text-4xl font-light mt-12 leading-normal whitespace-pre-wrap">
                      อีกข้อสำคัญของการทำ SEO คือการใช้
                      <br />
                      <span className="font-normal text-in-purple-2">
                        กฎแห่งแรงดึงดูดเราเรียกสิ่งนี้ว่า Evergreen Content
                      </span>{" "}
                      การทำ Evergreen Content
                      เป็นการสร้างคอนเทนต์ที่น่าสนใจเฉพาะด้านให้เว็บไซต์เยอะ ๆ
                      เพื่อเพิ่มคำสำคัญให้ติดคำค้นหายอดฮิตสิ่งนี้จะเป็นแรงดึงดูดที่คอยช่วยดึงให้คนที่สนใจ
                      เกี่ยวกับธุรกิจของคุณได้เข้ามาค้นหาและเจอเว็บไซต์ของคุณผ่าน
                      Search Engine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-28">
          <div className="relative">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-5 mx-0 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="w-screen h-auto"
                      src="../../assets/images/service/Seo/pic-illustration-1.png"
                      alt="Infinite"
                    />
                  </div>
                </div>
                <div className="col-span-7 mx-20 text-left">
                  <h3 className="text-5xl 3xl:text-6xl mt-10 font-normal font-Prompt text-in-purple-1">
                    เพิ่มอันดับเว็บไซต์ด้วย SEO
                  </h3>
                  <p className="text-3xl 3xl:text-4xl font-light mt-2 leading-normal font-Prompt text-in-purple-1">
                    Search Engine Optimization
                  </p>
                  <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                    <hr />
                  </div>
                  <p className="text-2xl 3xl:text-3xl font-normal mt-12 leading-normal whitespace-pre-wrap">
                    <ul className="list-inside list-disc">
                      <li className="font-Prompt">
                        เพิ่มจํานวนการเข้าชมเว็บไซต์แบบออแกนิค
                      </li>
                      <li className="font-Prompt">
                        50% ของคีย์เวิร์ดที่เลือกมาติดหน้าแรก ภายใน 6 เดือน
                      </li>
                      <li className="font-Prompt">
                        เหนือกว่าคู่แข่ง ด้วยกลยุทธ์ SEO สายขาว
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-10 right-0 w-full text-right"></div>
          </div>
        </div>
        <div className="container mx-auto mt-10 3xl:mt-28">
          <div className="relative mb-28">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-6 mx-16 text-left z-10">
                  <h3 className="text-5xl 3xl:text-6xl mt-10 font-normal font-Prompt text-in-purple-1 leading-snug">
                    เพิ่มยอดผู้เข้าชมเว็บไซต์ <br />
                    ด้วยการทำ SEO
                  </h3>
                  <p className="text-2xl 3xl:text-3xl font-normal mt-12 leading-normal whitespace-pre-wrap ">
                    Seo หรือ Search Engine Optimization คือ
                    การเพิ่มประสิทธิภาพให้คอนเทนต์
                    และเว็บไซต์เป็นไปตามมาตรฐานของ Search Engine
                    เพื่อให้ติดอันดับต้น ๆ ในหน้าการค้นหาโดยใช้ Keywords
                    เป็นตัวกําหนด
                    เมื่อเว็บไซต์ติดอันดับจะทําให้มีคนเข้ามาชมมากขึ้น
                    กลายเป็นร้านค้า อันดับต้น ๆ ที่ลูกค้าจะเลือกซื้อ
                    และทําให้ยอดขายของธุรกิจคุณเพิ่มขึ้น
                    โดยที่คุณไม่ต้องเสียเงินค่าโฆษณาให้กับ Google หรือ Facebook
                  </p>
                  <div className="grid justify-items-center w-full my-16 border bg-gray-dark">
                    <hr />
                  </div>
                </div>
                <div className="col-span-6 -ml-16 text-left font-bold z-10 w-full">
                  <img
                    className="origin-cover w-full h-auto mt-28 3xl:mt-44"
                    src="../../assets/images/service/Seo/pic-illustration-2.png"
                    alt="Infinite"
                  />
                </div>

                <div className="col-span-12 z-0">
                  <div className="relative ">
                    <div>
                      <div className="max-w-full mx-auto -py-2 px-4 lg:flex lg:items-center lg:justify-end -mt-20">
                        <p className="inline-block h-96 w-full bg-white"></p>
                      </div>
                      <div className="max-w-full mx-auto -py-2 px-4 lg:flex lg:items-center lg:justify-end -mt-20">
                        <p className="inline-block h-64 w-full bg-white"></p>
                      </div>
                      <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
                        <p className="inline-block h-10 w-full bg-infinite2-4"></p>
                      </div>
                    </div>
                    <div className="absolute top-28 w-full text-right">
                      <div className="h-full w-full">
                        <div className="grid grid-cols-12 mx-5 relative">
                          <div className="col-span-5 mx-20 text-left font-bold">
                            <div className="grid justify-items-start w-full">
                              <img
                                className="origin-none origin-cover w-full h-auto"
                                src="../../assets/images/service/Seo/pic-illustration-3.png"
                                alt="Infinite"
                              />
                            </div>
                          </div>
                          <div className="col-span-7 -ml-18 text-left">
                            <h3 className="text-4xl 3xl:text-5xl mt-10 font-normal text-in-purple-1">
                              เพิ่มอันดับเว็บไซต์ด้วย SEO ดีอย่างไร?
                            </h3>
                            <p className="text-xl 3xl:text-2xl font-normal mt-12 leading-normal whitespace-pre-wrap">
                              <ul className="list-inside list-disc">
                                <li>
                                  ธุรกิจเข้าถึงผู้ใช้งานได้ง่าย
                                  ตรงตามกลุ่มเป้าหมาย ได้ทุกที่ทุกเวลา
                                </li>
                                <li>
                                  ส่งเสริมให้ธุรกิจของคุณมีความโดดเด่นเป็นที่น่าจดจำ
                                </li>
                                <li>
                                  เข้าใจผู้ใช้งานที่จะเป็นลูกค้าของธุรกิจได้มากขึ้นจากการวิเคราะห์ข้อมูล
                                </li>
                                <li>
                                  เพิ่มโอกาสให้แบรนด์หรือธุรกิจของคุณปิดการขายได้มากขึ้น
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-12 relative mt-5">
              <div className="col-span-full mx-20 text-center font-bold">
                <div className="grid justify-items-start w-full my-10">
                  <button className="in-button">
                    <img
                      className="object-none object-center"
                      src="../../assets/images/service/Seo/ปุ่ม-ผลงานของเรา.png"
                      alt="ปุ่ม6"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 relative mt-5 mb-28">
              <div className="col-span-6 mx-10 text-left font-bold">
                <div className="grid justify-items-center w-full my-10">
                  <img
                    className="object-none object-center w-5/6 h-full rounded-3xl border"
                    src="../../assets/images/service/Seo/pic-ลูกค้า-1.png"
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
                    src="../../assets/images/service/Seo/pic-ลูกค้า-2.png"
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden"></div>
    </>
  );
}
