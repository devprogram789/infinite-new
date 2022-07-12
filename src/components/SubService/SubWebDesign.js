import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Slider from "../../components/Slider/Slider";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SubWebDesign() {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-infinite1-100 h-screen">
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between">
            <div className="relative">
              <img
                className="w-screen h-auto"
                src="../../assets/images/service/WebDesign/pic-illustration-head-1.png"
                alt="Infinite"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-28">
        <div className="relative">
          <div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-screen w-full bg-white"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-4 w-full bg-white"></p>
            </div>
          </div>
          <div className="absolute top-10 right-0 w-full text-right">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-6 ml-20 mr-5 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <h2 className="2xl:text-8xl 3xl:text-9xl mt-5 text-in-purple-1">
                      Web Design
                    </h2>
                    <h3 className="2xl:text-4xl 3xl:text-5xl font-normal mt-5 text-infinite2-3 leading-normal">
                      ออกแบบพัฒนาเว็บไซต์ <br />
                      ครบวงจร
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
                  <h3 className="2xl:text-2xl 3xl:text-3xl mt-10 font-normal text-in-purple-2 leading-normal whitespace-pre-wrap">
                    Infinity Digital Agency ให้บริการออกแบบและพัฒนาเว็บไซต์ เว็บแอปพลิเคชันและ
                  </h3>
                  <p className="2xl:text-2xl 3xl:text-3xl font-light leading-normal whitespace-pre-wrap">
                    <span className="font-normal text-in-purple-2">
                      แอปพลิเคชันมือถือครบวงจร
                    </span>{" "}
                    เราเริ่มต้นทุกงานด้วยการวิจัยและการวางแผน การออกแบบ UX UI การออกแบบเว็บไซต์
                    การพัฒนาเว็บไซต์ การ deploy ขึ้น server
                    และบริการดูแลหลังการขาย
                  </p>
                  <p className="2xl:text-2xl 3xl:text-3xl font-light mt-12 leading-normal whitespace-pre-wrap">
                    <span className="font-normal text-in-purple-2">
                      เราออกแบบเว็บไซต์และแอปพลิเคชันมือถือเฉพาะเจาะจงเพื่อธุรกิจของคุณเท่านั่น
                    </span>{" "}
                    เราไม่ใช้เทมเพลต
                    หรือธีมในการออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชันมือถือของคุณ
                    เราออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชันมือถือของคุณตั้งแต่เริ่มต้น!
                    ดังนั้นคุณสามารถมั่นใจได้ว่าเว็บไซต์หรือแอปพลิเคชันมือถือของคุณจะไม่เหมือนใครและดีที่สุดสำหรับธุรกิจของคุณเท่านั้น
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
              <div className="col-span-6 mx-20 text-left">
                <h3 className="2xl:text-5xl 3xl:text-6xl mt-10 font-medium text-in-purple-1">
                  ออกแบบ UX UI
                </h3>
                <p className="2xl:text-2xl 3xl:text-3xl font-light mt-2 leading-normal text-in-purple-1">
                  เราคือผู้เชี่ยวชาญด้านการออกแบบ UX & UI
                  <br />
                  สำหรับเว็บไซต์และแอปมือถือ
                </p>
                <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                  <hr />
                </div>
                <p className="2xl:text-2xl 3xl:text-3xl font-normal mt-12 leading-normal whitespace-pre-wrap">
                  <ul className="list-inside list-disc">
                    <li>
                      การออกแบบ UX & UI
                    </li>
                    <li>การออกแบบกราฟฟิก / ระบบสีและภาพ</li>
                    <li>
                      การออกแบบ Transitions และ Animations
                    </li>
                  </ul>
                </p>
                <div className="grid justify-items-start w-full mt-10">
                  <img
                    className="w-auto h-24"
                    src="../../assets/images/service/WebDesign/pic-icon-01.png"
                    alt="Infinite"
                  />
                </div>
              </div>
              <div className="col-span-6 mx-0 text-left font-bold">
                <div className="grid justify-items-start w-full">
                  <img
                    className="object-contain w-screen h-auto"
                    src="../../assets/images/service/WebDesign/pic-illustration-01.png"
                    alt="Infinite"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 relative mt-40">
              <div className="col-span-6 mx-0 text-left font-bold">
                <div className="grid justify-items-start w-full">
                  <img
                    className="object-contain w-screen h-auto"
                    src="../../assets/images/service/WebDesign/pic-illustration-02.png"
                    alt="Infinite"
                  />
                </div>
              </div>
              <div className="col-span-6 mx-5 text-left">
                <h3 className="2xl:text-5xl 3xl:text-6xl mt-10 font-medium leading-tight text-in-purple-1">
                  ออกแบบเว็บไซต์อย่างไร
                  <br /> ให้เหมาะกับธุรกิจของคุณ ?
                </h3>
                <p className="2xl:text-2xl 3xl:text-3xl font-light mt-8 leading-normal">
                  รูปแบบการทำเว็บไซต์หรือออกแบบเว็บไซต์นั้น
                  จะขึ้นอยู่กับเป้าหมายของคุณเป็นหลัก
                  ถ้าหากคุณต้องการให้ลูกค้าสามารถเข้ามาเลือกซื้อสินค้า
                  และจ่ายเงินที่เว็บไซต์ การทำเว็บไซต์แบบ E-commerce website
                  จะตอบโจทย์ได้อย่างมากที่สุด ลองคิดถึงการซื้อของ
                  ถ้าหากคุณเลือกสินค้าได้แล้ว
                  แต่ไม่สามารถสั่งซื้อได้ในขณะนั้นเลย คุณอาจจะหมดความต้องการ
                  และไม่อยากได้สินค้าชิ้นนั้นไปแล้ว
                  แต่ถ้าเราออกแบบเว็บไซต์ให้ตรงกับความต้องการ ใช้งานง่าย
                  แน่นอนว่าลูกค้าของคุณจะได้รับประสบการณ์ที่ดีจากการใช้บริการ
                  ส่งผลให้ภาพลักษณ์ของแบรนด์ดีขึ้นตามด้วยเช่นกัน
                </p>
                <div className="grid justify-items-start w-full my-10">
                  <button className="in-button">
                    <img
                      className="object-none object-center"
                      src="../../assets/images/service/WebDesign/ปุ่ม-ปรึกษาเราตอนนี้.png"
                      alt="ปุ่ม6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end">
            <p className="inline-block h-10 w-full bg-infinite2-4"></p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <div className="relative mb-28">
          <div className="h-full w-full">
            <div className="grid grid-cols-12 relative">
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
              <div className="col-span-12">
                <div>
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
