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
export default function CookiesPolicySection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="hidden md:block">
          <div className="bg-infinite1-100 px-4">
            <div className="columns-1">
              <div className="relative">
                <div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-screen w-screen bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                  </div>
                  <div className="max-w-full flex items-center justify-end">
                    <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 mx-10 my-8">
                      <blockquote className="p-10">
                        <h1 className="2xl:text-4xl 3xl:text-5xl font-semibold leading-loose mb-10 text-center">
                          นโยบายข้อมูลส่วนบุคคลการใช้คุกกี้
                        </h1>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                          บริษัท อินฟินิท ดิจิทัล คอนซัลแต้นส์ จำกัด (“บริษัท”)
                          แจ้งให้ท่านผู้ใช้บริการเว็บไซต์{" "}
                          <a href="https://theinfinitedigital.com/">
                            https://theinfinitedigital.com/
                          </a>{" "}
                          (“เว็บไซต์”) ทราบว่า บริษัทมีความจำเป็นต้องใช้ Cookies
                          ในการทำงานหลายส่วนของเว็บไซต์ของบริษัทเพื่อรับประกันการให้บริการให้สมบูรณ์แบบ
                          รวมถึงเพื่อความสะดวกในการเข้าถึงและใช้บริการเว็บไซต์ของท่าน
                          และด้วยเหตุที่การใช้ Cookies
                          ถือว่าเป็นหนึ่งในการประมวลผลข้อมูลส่วนบุคคลภายใต้กฎหมายที่เกี่ยวข้อง
                          บริษัทจึงมีจุดประสงค์แจ้งให้ท่านทราบเกี่ยวกับการใช้
                          Cookies ดังกล่าว โดยบริษัทรับประกันการใช้ Cookies
                          ด้วยจุดประสงค์ที่จำกัดเท่าที่จำเป็น
                          และรับประกันมาตรการรักษาความมั่นคงปลอดภัยที่เหมาะสมอย่างดีที่สุดโดยสอดคล้องกับเงื่อนไขและมาตร
                          ฐานที่กำหนดไว้ในกฎหมายที่เกี่ยวข้อง
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                          เมื่อท่านในฐานะผู้ใช้บริการ
                          ไม่ว่าในนามส่วนบุคคลหรือบริษัท
                          เข้าถึงเว็บไซต์ของทางบริษัท บริษัทจะถือว่า
                          ท่านตกลงและรับทราบนโยบายข้อมูลส่วนบุคคลฉบับนี้แล้ว
                          ทั้งนี้
                          นโยบายความเป็นส่วนตัวฉบับนี้มีผลใช้บังคับกับเว็บไซต์ของบริษัทเท่านั้น
                          ไม่มีผลใช้บังคับกับบริการหรือเว็บไซต์อื่นๆ
                          ที่อาจเชื่อมต่อกับเว็บไซต์ของบริษัทซึ่งเป็นของบุคคลภายนอก
                          โดยผู้ใช้บริการต้องศึกษาเกี่ยวกับนโยบายข้อมูลส่วนบุคคลที่บังคับใช้และประกาศโดยบุคคลภายนอกดังกล่าวแยกต่างหาก
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed">
                          ทางบริษัทอาจปรับปรุงนโยบายฉบับนี้ตามแต่ละระยะเวลา
                          เพื่อให้สอดคล้องกับแนวปฏิบัติและกฎหมายที่เกี่ยวข้อง
                          และให้สอดคล้องกับการใช้ Cookies แบบต่างๆ ของบริษัท
                          ทั้งนี้
                          บริษัทจะแจ้งให้ท่านทราบถึงการเปลี่ยนแปลงด้วยการประกาศนโยบายฉบับแก้ไขปรับปรุงผ่านทางเว็บไซต์นั้น
                        </p>
                      </blockquote>
                      <blockquote className="p-10">
                        <p className="text-2xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-loose mb-5">
                        Cookies ที่บริษัทใช้ในการให้บริการแก่ท่าน
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        Cookies คือ text files ที่อยู่ใน Browser ของผู้ใช้บริการ เพื่อให้บริษัทจัดเก็บรายละเอียดข้อมูล รวมถึงบันทึกการใช้งานอินเตอร์เน็ตหรือพฤติกรรมการเยี่ยมชมเว็บไซต์ของผู้ใช้บริการ ทั้งนี้ เพื่อรับประกันประสิทธิภาพในการทำงานของเว็บไซต์แก่ผู้ใช้บริการ บริษัทมีความจำเป็นต้องใช้ Cookies หลายประเภท เพื่อจุดประสงค์ต่างกันไป โดยแบ่งออกเป็น <span className="font-Prompt">4</span> ประเภท ดังต่อไปนี้
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        <span className="font-Prompt">1</span>. Strictly Necessary Cookies ซึ่งเป็น Cookies ประเภทที่มีความจำเป็นอย่างมากต่อการทำงานของเว็บไซต์และการให้บริการแก่ผู้ใช้งานในการเข้าถึงข้อมูลได้อย่างทั่วถึงและปลอดภัย
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        <span className="font-Prompt">2</span>. Functionality Cookies ซึ่งเป็น Cookies ที่ทำหน้าที่จดจำสิ่งที่ผู้ใช้บริการเลือกหรือตั้งค่าบนเว็บไซต์ เช่น ชื่อบัญชีผู้ใช้ ภาษา ฟ้อนต์ และรูปแบบการนำเสนอข้อมูลต่างๆ ที่ตรงความต้องการเฉพาะบุคคลให้แก่ผู้ใช้บริการได้มากขึ้นตามการตั้งค่าที่เลือกไว้
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        <span className="font-Prompt">3</span>. Performance Cookies ซึ่งเป็น Cookies ที่ทำหน้าที่ประเมินประสิทธิภาพในการทำงานแต่ละส่วนของเว็บไซต์ ทั้งนี้ ข้อมูลดังกล่าวอาจดำเนินการโดยผู้ให้บริการภายนอกที่จะทำหน้าที่ให้บริการประเมินวิเคราะห์การทำงานของบริษัท และ
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        <span className="font-Prompt">4</span>. Advertising Cookies ซึ่งเป็น Cookies ที่ทำหน้าที่ในการจดจำสิ่งที่ท่านเคยเยี่ยมชม รวมถึงลักษณะการใช้เว็บไซต์ของผู้ใช้บริการ เพื่อนำเสนอสินค้าหรือบริการที่เกี่ยวข้องและตรงกับความสนใจของผู้ใช้บริการ ทั้งนี้ ข้อมูลดังกล่าวอาจดำเนินการโดยผู้ให้บริการภายนอกที่จะทำหน้าที่ให้บริการให้แก่บริษัท
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        สำหรับ Cookies ประเภท Strictly Necessary Cookies นั้น บริษัทขอชี้แจงให้ท่านผู้ใช้บริการทราบว่าทางบริษัทมีความจำเป็นในการใช้ Cookies ดังกล่าว เพื่อการให้บริการของเว็บไซต์ได้อย่างเต็มประสิทธิภาพ หากบริษัทไม่ใช้ Cookies ประเภทดังกล่าว บริษัทย่อมไม่สามารถให้บริการแก่ท่านผู้ใช้บริการได้
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        ในส่วนของ Cookies ประเภทอื่นนั้น หากได้รับความยินยอมจากท่านให้บริษัทใช้แต่ละประเภทของ Cookies ดังกล่าว บริษัทจะใช้ Cookies ดังกล่าวเพื่อจุดประสงค์เฉพาะที่ได้ระบุไว้สำหรับ Cookies แต่ละประเภท 
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        แม้ว่าการใช้ Cookies จะมีประโยชน์ในการเสริมประสิทธิภาพในการให้บริการและการทำงานของเว็บไซต์แก่ท่านผู้ใช้บริการ แต่หากผู้ใช้บริการต้องการ ท่านสามารถลบการตั้งค่า Cookies บน Browser ของตนเองได้ อย่างไรก็ตาม ผู้ใช้บริการต้องรับทราบและยอมรับว่า การลบการตั้งค่าดังกล่าวอาจส่งผลกระทบต่อประสิทธิภาพในการทำงานให้บริการของเว็บไซต์ได้ในบางส่วน
                        </p>
                      </blockquote>
                      <blockquote className="p-10">
                        <p className="text-2xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-loose mb-5">
                        สิทธิของเจ้าของข้อมูล
                        </p>
                        <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-normal 3xl:leading-relaxed mb-5">
                        บริษัทรับทราบและเคารพสิทธิในฐานะเจ้าของข้อมูลตามกฎหมายของผู้ใช้บริการในส่วนที่เกี่ยวข้องกับข้อมูลส่วนบุคคลของท่าน โดยเฉพาะ Cookies ที่บริษัทเป็นผู้ใช้ ซึ่งท่านสามารถใช้สิทธิตามกฎหมายกำหนดได้นอกเหนือจากการกำหนดการตั้งค่าได้ด้วยตนเองอย่างอิสระโดยเฉพาะสิทธิถอนความยินยอมในการใช้ Functionality Cookies / Performance Cookies หรือ Advertising Cookies ที่ท่านอาจเคยให้แก่บริษัท
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <img
                className="object-cover object-bottom w-screen h-auto"
                src="../../assets/images/mobile/about/pic1-about-us.jpg"
                alt="Infinite"
              />
            </div>
            <div className="max-w-full mx-auto flex items-center justify-center">
              <div className="relative">
                <div>
                  <div className="max-w-full flex items-center justify-center">
                    <img
                      className="object-cover object-bottom w-screen h-44"
                      src="../../assets/images/mobile/about/bg1.png"
                      alt="Infinite"
                    />
                  </div>
                </div>
                <div className="absolute top-0 left-0">
                  <div className="grid grid-cols-12 items-center text-center">
                    <div className="col-span-12">
                      <blockquote className="mx-10 my-5">
                        <h1 className="text-3xl font-semibold leading-10 mb-5">
                          เราช่วยธุรกิจให้เติบโตในยุคดิจิทัลได้มั่นคง
                        </h1>
                        <div className="grid items-center text-center my-1">
                          <div>
                            <p className="leading-3">
                              <span className="inline-block h-1 w-14 rounded bg-infinite1-900"></span>
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns-1 grid items-center text-center justify-center">
              <blockquote className="m-5">
                <p className="text-base mb-5">
                  Infinity Digital Agency ก่อตั้งขึ้นในปี 2565 โดยผู้ร่วมก่อตั้ง
                  2 คนที่มีจุดมุ่งหมายที่จะเปลี่ยนแปลงความเป็นไปของ Digital
                  Agency ในขณะนั้น เป้าหมายของเราคือการช่วยเหลือ ปรับปรุง
                  เปลี่ยนแปลง
                  และยกระดับธุรกิจที่ต้องการประสบความสำเร็จในโลกดิจิทัล
                  ตั้งแต่นั้นมา
                  ทีมงานของเราก็เติบโตอย่างรวดเร็วและกลายเป็นหนึ่งในดิจิทัลเอเจนซี่ชั้นนำของประเทศไทย
                  แม้ว่าเราจะประสบความสำเร็จในช่วงเวลาสั้นๆ
                  แต่เรายังคงเรียนรู้และพัฒนาทักษะ
                  และประสบการณ์ของเราทุกวันเพื่อเป็นพันธมิตรที่เป็นประโยชน์กับลูกค้าของเรา
                </p>
              </blockquote>
            </div>
          </div>
          <div className="columns-1 mx-5">
            <img
              className="object-cover object-top w-screen h-72"
              src="../../assets/images/mobile/about/pic-1.png"
              alt="Infinite-pic1"
            />
          </div>
          <div className=" bg-infinite1-100 max-h-screen mt-5">
            <div className="max-w-full mx-auto flex items-center justify-center z-10">
              <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-start-1 col-end-7">
                    <div className="w-screen left-0">
                      <img
                        className="object-cover object-left-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element1.png"
                        alt="Infinite-bg-element1"
                      />
                    </div>
                  </div>
                  <div className="col-end-7 col-span-2">
                    <div className="w-screen right-0">
                      <img
                        className="object-cover object-right-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element2.png"
                        alt="Infinite-bg-element2"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0">
                  <blockquote className="m-10">
                    <h1 className="text-3xl font-bold leading-9 mb-5">
                      รับทำเว็บไชต์ wordpress และ รับทำ seo
                      ออกแบบเว็บไชต์ให้รองรับระบบของ Google
                    </h1>
                    <p className="text-base mb-5">
                      อินฟินิท ดิจิทัล คอนซัลแต้นส์ รับทำเว็บไชต์ รับทำ
                      wordpress รับปรึกษาดูแลด้านเว็บไซต์ให้รองรับด้าน SEO ของ
                      google และ รับเขียนโปรแกรม ทุกประเภทธุรกิจ
                      รวมถึงสื่อดิจิทัลออนไลน์
                    </p>
                    <p className="text-base">
                      เราเป็นทีมออกแบบเว็บไซต์ที่สร้างสรรค์ผลงานคุณภาพไม่เหมือนใคร
                      และตอบโจทย์ตามความต้องการของลูกค้า
                      เพื่อสร้างเอกลักษณ์เฉพาะตัวของแบรนด์รวมถึงการสร้างประสบการณ์ที่ดีต่อผู้ใช้งานเว็บไซต์
                      และรับทำ seo เพื่อรองรับเว็บไชต์ของคุณให้ติดหน้า 1 ของ
                      Google ทุก Platform
                    </p>
                  </blockquote>
                  <a href="/about">
                    <button className="in-button m-10">
                      <img
                        className="object-scale-down h-full w-32"
                        src="../../assets/images/mobile/home/button-about.png"
                        alt="button-about"
                      />
                    </button>
                  </a>
                  <div className="max-w-full mx-auto flex items-center justify-start mt-5 z-0">
                    <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen -mt-48">
            <div className="max-w-full mx-auto flex items-center justify-center">
              <div className="relative">
                <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                  <div className="col-start-1 col-end-7">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/pic2.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-1 col-end-5">
                    <blockquote>
                      <p className="text-xl leading-10 text-in-purple-1">
                        วางกลยุทธ์การตลาด SEO
                      </p>
                    </blockquote>
                  </div>
                  <div className="col-start-5 col-end-7">
                    <blockquote className="mx-1">
                      <hr />
                    </blockquote>
                  </div>
                  <div className="col-start-1 col-end-2">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/icon1.png"
                      alt="Infinite-icon1"
                    />
                  </div>
                  <div className="col-start-2 col-end-7 mx-5">
                    <span className="box-decoration-clone text-in-purple-3 font-bold">
                      <p className="text-2xl">
                        SEO Digital <br />
                        Marketing
                      </p>
                    </span>
                  </div>
                  <div className="col-start-1 col-end-7">
                    <h2 className="text-sm mt-2">
                      รับทำ seo บริษัทธุรกิจทุกประเภท
                    </h2>
                    <button className="in-button mt-2">
                      <img
                        className="object-scale-down h-full w-32"
                        src="../../assets/images/mobile/home/button-service.png"
                        alt="ปุ่ม1"
                      />
                    </button>
                  </div>
                </div>
                <div className="max-w-full mx-auto flex items-center justify-end mt-5 z-0">
                  <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mt-5">
            <div className="max-w-full mx-auto flex items-center justify-center">
              <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-end-7 col-span-2">
                    <div className="w-screen right-0">
                      <img
                        className="object-cover object-right-bottom w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element3.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0">
                  <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                    <div className="col-start-1 col-end-7">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/pic3.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-1 col-end-4">
                      <blockquote>
                        <p className="text-xl leading-10 text-in-purple-1">
                          รับออกแบบเว็บไซต์
                        </p>
                      </blockquote>
                    </div>
                    <div className="col-start-4 col-end-7">
                      <blockquote className="mx-1">
                        <hr />
                      </blockquote>
                    </div>
                    <div className="col-start-1 col-end-2">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/icon2.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-2 col-end-7 mx-5">
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <p className="text-2xl">
                          Web
                          <br />
                          designs
                        </p>
                      </span>
                    </div>
                    <div className="col-start-1 col-end-7">
                      <h3 className="text-sm mt-2">
                        ออกแบบเว็บไซต์ พร้อมรองรับ ux/ui
                      </h3>
                      <button className="in-button mt-2">
                        <img
                          className="object-scale-down h-full w-32"
                          src="../../assets/images/mobile/home/button-service.png"
                          alt="ปุ่ม1"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="max-w-full mx-auto flex items-center justify-start mt-5 z-0">
                    <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mt-56">
            <div className="max-w-full mx-auto flex items-center justify-center">
              <div className="relative">
                <div className="grid grid-cols-6 gap-0 mx-10 mt-24 items-center justify-center">
                  <div className="col-start-1 col-end-7">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/pic4.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-1 col-end-5">
                    <blockquote>
                      <h2 className="text-xl leading-10 text-in-purple-1">
                        สร้างคอนเทนท์บนโซเชียล
                      </h2>
                    </blockquote>
                  </div>
                  <div className="col-start-5 col-end-7">
                    <blockquote className="mx-1">
                      <hr />
                    </blockquote>
                  </div>
                  <div className="col-start-1 col-end-2">
                    <img
                      className="object-cover object-bottom w-full h-auto"
                      src="../../assets/images/mobile/home/icon3.png"
                      alt="Infinite"
                    />
                  </div>
                  <div className="col-start-2 col-end-7 mx-5">
                    <span className="box-decoration-clone text-in-purple-3 font-bold">
                      <p className="text-2xl">
                        Creative Online
                        <br />
                        and Printing
                      </p>
                    </span>
                  </div>
                  <div className="col-start-1 col-end-7">
                    <h4 className="text-sm mt-2">
                      สร้างคอนเทนท์บนโซเชียล รับเขียนคอนเทนท์
                    </h4>
                    <button className="in-button mt-2">
                      <img
                        className="object-scale-down h-full w-32"
                        src="../../assets/images/mobile/home/button-service.png"
                        alt="ปุ่ม1"
                      />
                    </button>
                  </div>
                </div>
                <div className="max-w-full mx-auto flex items-center justify-end mt-5 z-0">
                  <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen mb-56">
            <div className="max-w-full mx-auto flex items-center justify-center">
              <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-start-1 col-end-7">
                    <div className="w-screen left-0">
                      <img
                        className="object-cover object-left-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element4.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                  <div className="col-end-7 col-span-2">
                    <div className="w-screen right-0">
                      <img
                        className="object-cover object-right-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element5.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                  <div className="col-start-1 col-end-7">
                    <div className="w-screen left-0">
                      <img
                        className="object-cover object-left-top w-48 h-auto z-20"
                        src="../../assets/images/mobile/home/bg-element6.png"
                        alt="Infinite"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0">
                  <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                    <div className="col-start-1 col-end-7 mb-5">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/pic5.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-1 col-end-5">
                      <blockquote>
                        <p className="text-xl leading-10 text-in-purple-1">
                          รับเขียนโปรแกรมทุกประเภท
                        </p>
                      </blockquote>
                    </div>
                    <div className="col-start-5 col-end-7">
                      <blockquote className="mx-1">
                        <hr />
                      </blockquote>
                    </div>
                    <div className="col-start-1 col-end-2">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/icon4.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-2 col-end-7 mx-5">
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <p className="text-2xl">
                          Expert
                          <br />
                          Programming
                        </p>
                      </span>
                    </div>
                    <div className="col-start-1 col-end-7 mt-2">
                      <h5 className="text-sm mt-2">
                        สร้างคอนเทนท์บนโซเชียล รับเขียนคอนเทนท์
                      </h5>
                      <button className="in-button mt-2">
                        <img
                          className="object-scale-down h-full w-32"
                          src="../../assets/images/mobile/home/button-service.png"
                          alt="ปุ่ม1"
                        />
                      </button>
                    </div>
                    <div className="col-start-1 col-end-7 mt-20">
                      <h2 className="text-center text-3xl font-bold">
                        Have a project?
                        <br />
                        Let's chat.
                      </h2>
                      <div className="grid justify-items-center w-full">
                        <button className="in-button mt-2">
                          <img
                            className="object-scale-down h-full w-32"
                            src="../../assets/images/mobile/home/button-click-here.png"
                            alt="ปุ่ม1"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
