import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

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
              <p className="inline-block h-48 w-full bg-white"></p>
            </div>
          </div>
          <div className="absolute top-10 right-0 w-full text-right">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-6 ml-20 mr-5 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <h2 className="text-9xl mt-5 text-in-purple-1 font-R-FLEX">
                      Web Design
                    </h2>
                    <h3 className="text-5xl font-normal mt-5 text-infinite2-3 leading-normal">
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
                  <h3 className="text-3xl mt-10 font-normal text-in-purple-2 leading-normal whitespace-pre-wrap">
                    <span className="font-R-FLEX">Infinity Digital Agency</span>{" "}
                    ให้บริการออกแบบและพัฒนาเว็บไซต์ เว็บแอปพลิเคชันและ
                  </h3>
                  <p className="text-3xl font-light leading-normal whitespace-pre-wrap">
                    <span className="font-normal text-in-purple-2">
                      แอปพลิเคชันมือถือครบวงจร
                    </span>{" "}
                    เราเริ่มต้นทุกงานด้วยการวิจัยและการวางแผน การออกแบบ{" "}
                    <span className="font-R-FLEX">UX UI</span> การออกแบบเว็บไซต์
                    การพัฒนาเว็บไซต์ การ{" "}
                    <span className="font-R-FLEX">deploy</span> ขึ้น{" "}
                    <span className="font-R-FLEX">server</span>{" "}
                    และบริการดูแลหลังการขาย
                  </p>
                  <p className="text-3xl font-light mt-12 leading-normal whitespace-pre-wrap">
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
                <h3 className="text-6xl mt-10 font-medium text-in-purple-1">
                  ออกแบบ <span className="font-R-FLEX">UX UI</span>
                </h3>
                <p className="text-3xl font-light mt-2 leading-normal text-in-purple-1">
                  เราคือผู้เชี่ยวชาญด้านการออกแบบ{" "}
                  <span className="font-R-FLEX">UX </span> &{" "}
                  <span className="font-R-FLEX">UI</span>
                  <br />
                  สำหรับเว็บไซต์และแอปมือถือ
                </p>
                <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                  <hr />
                </div>
                <p className="text-3xl font-normal mt-12 leading-normal whitespace-pre-wrap">
                  <ul className="list-inside list-disc">
                    <li>
                      การออกแบบ <span className="font-R-FLEX">UX </span> &{" "}
                      <span className="font-R-FLEX">UI</span>
                    </li>
                    <li>การออกแบบกราฟฟิก / ระบบสีและภาพ</li>
                    <li>
                      การออกแบบ{" "}
                      <span className="font-R-FLEX">Transitions </span> และ{" "}
                      <span className="font-R-FLEX">Animations</span>
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
                <h3 className="text-6xl mt-10 font-medium leading-tight text-in-purple-1">
                  ออกแบบเว็บไซต์อย่างไร
                  <br /> ให้เหมาะกับธุรกิจของคุณ ?
                </h3>
                <p className="text-3xl font-light mt-8 leading-normal">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
