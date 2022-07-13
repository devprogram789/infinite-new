import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SubProGramming() {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-infinite1-100 h-screen">
          <div className="columns-1 mb-10">
            <div className="grid justify-items-center">
              <img
                className="object-cover object-center w-auto h-[650px] 2xl:h-[650px]"
                src="../../assets/images/service/ProGramming/pic-illustration-head-1.png"
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
              <p className="inline-block h-28 3xl:h-28 w-full bg-white"></p>
            </div>
          </div>
          <div className="absolute top-10 right-0 w-full text-right">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-6 mx-16 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <h2 className="text-8xl 3xl:text-9xl mt-5 text-in-purple-1 font-R-FLEX">
                      Expert
                      <br />
                      Program-
                      <br />
                      ming
                      <br />
                    </h2>
                    <h3 className="text-4xl 3xl:text-5xl font-normal mt-5 text-infinite2-3 leading-normal">
                      รับเขียนโปรแกรม
                      <br />
                      พัฒนาระบบตาม
                      <br />
                      ความต้องการของลูกค้า
                    </h3>
                  </div>
                  <div className="grid justify-items-start w-full my-10">
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
                <div className="col-span-6 -ml-10 mr-16 text-left">
                  <p className="text-3xl 3xl:text-4xl font-light mt-12 leading-normal 3xl:leading-relaxed whitespace-pre-wrap">
                    ทีมงานรับเขียนโปรแกรมและพัฒนาระบบตามความต้องการของท่านอย่างมืออาชีพรองรับทุกการใช้งานกับทุกธุรกิจ
                    เราพัฒนาโปรแกรมและรับทำเว็บไซต์ทุกรูปแบบและหลากหลายเพื่อให้เหมาะกับการใช้งานของท่าน
                    ด้วยประสบการณ์ที่เรามีมามากกว่า 10 ปี
                    ทำให้ท่านมั่นใจได้ว่าท่านจะได้รับโปรแกรมและเว็บไซต์ที่มีประสิทธิภาพตรงความต้องการ
                    เหมาะสมกับธุรกิจของท่านมากที่สุด พร้อมประกันงานฟรี 1 ปีเต็ม
                    โดยไม่มีค่าใช้จ่ายและทีมงานของเรายังสามารถพัฒนาโปรแกรมได้หลากหลายรูปแบบ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 3xl:mt-20">
        <div className="relative">
          <div className="h-full w-full">
            <div className="grid grid-cols-12 relative">
              <div className="col-span-5 ml-4 text-left font-bold">
                <div className="grid justify-items-start w-full">
                  <img
                    className="w-screen h-auto"
                    src="../../assets/images/service/ProGramming/pic-illustration-01.png"
                    alt="Infinite"
                  />
                </div>
              </div>
              <div className="col-span-7 mr-4 ml-10 text-left">
                <h3 className="text-5xl 3xl:text-6xl mt-10 font-normal font-Prompt text-in-purple-1">
                  รับเขียนโปรแกรมมืออาชีพ
                </h3>
                <p className="text-3xl 3xl:text-4xl font-normal mt-12 leading-normal 3xl:leading-relaxed whitespace-pre-wrap">
                  ท่านจะไม่ผิดหวังกับโปรแกรมหรือระบบที่เราส่งมอบให้
                  เรามีทีมงานที่พัฒนาโปรแกรมได้หลายหลายรูปแบบ
                  ทั้งโปรแกรมขนาดเล็ก หรือ โปรแกรมขนาดใหญ่ ด้วยทีมงานมืออาชีพ
                  ด้วย .Net, Java, Php, Nodejs, React, Angular และ อื่นๆ
                </p>
                <div className="grid justify-items-start w-full my-10">
                  <a href="/contact">
                    <button className="in-button">
                      <img
                        className="object-none object-center"
                        src="../../assets/images/service/ProGramming/ปุ่ม-ปรึกษาเราตอนนี้.png"
                        alt="ปุ่ม6"
                      />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-span-12 mx-4 text-left font-bold">
                <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                  <hr />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 relative mt-28">
              <div className="col-span-6 mx-4 text-left">
                <h3 className="text-5xl 3xl:text-6xl mt-10 font-normal leading-tight text-in-purple-1">
                  รับเขียนโปรแกรมเว็บ
                  <br />
                  แอพพลิเคชั่น
                </h3>
                <p className="text-3xl 3xl:text-4xl font-normal mt-12 leading-normal 3xl:leading-relaxed whitespace-pre-wrap">
                  รับเขียนโปรแกรมเว็บแอพพลิเคชั่น สำหรับธุรกิจต่างๆ
                  ตามความต้องการของลูกค้า สามารถแสดงผลได้ทั้งบน PC, Notebook,
                  Smartphone
                </p>
              </div>
              <div className="col-span-6 mx-0 text-left font-bold">
                <div className="grid justify-items-start w-full">
                  <img
                    className="w-screen h-auto"
                    src="../../assets/images/service/ProGramming/pic-illustration-head-2.png"
                    alt="Infinite"
                  />
                </div>
              </div>
              <div className="col-span-12 mx-0 text-left font-bold">
                <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <div className="relative mb-28">
          <div className="h-full w-full">
            <div className="grid grid-cols-12 relative">
              <div className="col-span-12 z-0">
                <div className="relative">
                  <div>
                    <div className="max-w-full mx-auto -py-2 lg:flex lg:items-center lg:justify-end ">
                      <p className="inline-block h-96 w-full bg-white"></p>
                    </div>
                    <div className="max-w-full mx-auto -py-2 lg:flex lg:items-center lg:justify-end">
                      <p className="inline-block h-64 w-full bg-white"></p>
                    </div>
                    <div className="max-w-full mx-auto -py-4 lg:flex lg:items-center lg:justify-end">
                      <p className="inline-block h-10 w-full bg-infinite2-4"></p>
                    </div>
                  </div>
                  <div className="absolute top-10 w-full text-right">
                    <div className="h-full w-full">
                      <div className="grid grid-cols-12 mx-5 relative">
                        <div className="col-span-12 mx-20 text-center mb-10">
                          <h3 className="text-4xl 3xl:text-5xl mt-10 font-normal leading-normal italic text-in-purple-1">
                            " ผู้ใช้จะสามารถเข้าถึงเว็บไซต์คุณได้ <br />
                            ไม่ว่าจะใช้คอมพิวเตอร์ มือถือ และเบราว์เซอร์ใดก็ตาม
                            "
                          </h3>
                          <p className="text-2xl 3xl:text-3xl font-light mt-12 leading-normal whitespace-pre-wrap">
                            Infinity Digital เราคำนึงถึงความสำคัญของการเข้าใช้
                            เรารับรองว่าเว็บไซต์และเว็บแอปพลิเคชั่น
                            เว็บของคุณจะสามารถเข้าถึงได้จากทุกๆอุปกรณ์
                            และเบราว์เซอร์ ที่สำคัญเราคำนึงถึงหลักการ " Mobile
                            First " ในการออกแบบและพัฒนาของเรา
                            เราเดาว่าคุณกำลังอ่านเว็บไซค์ของเราบนมือถือของคุณใช่หรือไม่
                            ?
                          </p>
                        </div>
                        <div className="col-span-12 mx-20 text-left font-bold">
                          <div className="grid justify-items-center w-full">
                            <img
                              className="object-contain w-full h-20"
                              src="../../assets/images/service/ProGramming/pic-icon-คำคม.png"
                              alt="Infinite"
                            />
                          </div>
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
            <div className="grid grid-cols-12 relative">
              <div className="col-span-6 mx-10 text-left font-bold">
                <div className="grid justify-items-center w-full my-10">
                  <img
                    className="object-none object-center w-5/6 h-full rounded-3xl border"
                    src="../../assets/images/service/WebDesign/pic-ลูกค้า-01.png"
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
                    src="../../assets/images/service/WebDesign/pic-ลูกค้า-02.png"
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
            <div className="grid grid-cols-12 relative">
              <div className="col-span-6 mx-10 text-left font-bold">
                <div className="grid justify-items-center w-full my-10">
                  <img
                    className="object-none object-center w-5/6 h-full rounded-3xl border"
                    src="../../assets/images/service/WebDesign/pic-ลูกค้า-03.png"
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
                    src="../../assets/images/service/WebDesign/pic-ลูกค้า-04.png"
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
    </>
  );
}
