import React from "react";
const navigationMo = [
  {
    name: "About",
    id: "menuAboutMo",
    href: "/about",
    img: "../assets/images/mobile/home/ปุ่มทางลัดล่าง1.png",
    current: true,
  },
  {
    name: "Work",
    id: "menuWorkMo",
    href: "/work",
    img: "../assets/images/mobile/home/ปุ่มทางลัดล่าง2.png",
    current: true,
  },
  {
    name: "Service",
    id: "menuServiceMo",
    href: "/",
    img: "../assets/images/mobile/home/ปุ่มทางลัดล่าง3.png",
    current: true,
  },
  {
    name: "Contact",
    id: "menuContactMo",
    href: "/contact",
    img: "../assets/images/mobile/home/ปุ่มทางลัดล่าง4.png",
    current: true,
  },
];

export default function Footer() {
  const bgFooter = "../assets/images/footer/footer-new.png";
  const bgFooterMo = "../assets/images/mobile/home/bg-footer.png";
  const bgFooterMoBottom =
    "../assets/images/mobile/home/BG-บาร์ทางลัดด่านล่าง.png";
  return (
    <div className="container-full mx-auto h-1/3">
      <div className="hidden xldesktop:block desktop:block xllaptop:block laptop:block tablet:block">
        <footer
          className="text-left text-white bg-cover bg-no-repeat h-auto"
          style={{ backgroundImage: `url(${bgFooter})` }}
        >
          <div className="grid grid-rows-3 grid-flow-col tracking-widest font-light lining-nums xldesktop:h-80 desktop:h-64 xllaptop:h-64 laptop:h-48 tablet:h-40">
            <div className="row-span-6 ">
              <div className="xldesktop:mx-20 xldesktop:my-28 xllaptop:mx-14 laptop:mx-8 tablet:mx-5 mx-16 tablet:my-16 my-20">
                <img
                  className="object-cover w-auto tablet:w-auto xldesktop:h-36 xllaptop:h-16 laptop:h-16 tablet:h-10 h-24"
                  src="../assets/images/logo-footer.png"
                  alt="logo-footer"
                ></img>
              </div>
            </div>
            <div className="row-span-1 col-span-5 tablet:col-span-3">
              <div className="flex uppercase">
                <div className="basis-1/6">
                  <div className="grid justify-items-center items-center h-full w-full">
                    <h1 className="xldesktop:text-5xl xllaptop:text-3xl laptop:text-2xl tablet:text-base text-4xl">contact</h1>
                  </div>
                </div>
                <div className="basis-auto xldesktop:m-6 laptop:m-2 tablet:ml-2 tablet:my-3 m-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <a href="https://fb.me/InfiniteDigitalConsultants/">
                        <img
                          className="object-cover xldesktop:w-16 laptop:w-10 tablet:w-8 w-14 h-auto rounded-full"
                          src="../assets/images/footer/icon-facebook.png"
                          alt="logo-footer"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="https://line.me/ti/p/%40infinitedigital">
                        <img
                          className="object-cover xldesktop:w-16 laptop:w-10 tablet:w-8 w-14 h-auto rounded-full"
                          src="../assets/images/footer/icon-line.png"
                          alt="logo-footer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="basis-5/6">
                  <div className="grid justify-items-center items-center h-full w-full">
                    <div className="xldesktop:text-2xl laptop:text-sm tablet:text-xs text-xl">
                      <p>
                        เลขประจำตัวผู้เสียภาษี :{" "}
                        <span className="font-Prompt">0105559190160</span>{" "}
                        บริษัท อินฟินิท ดิจิทัล คอนซัลแต้นส์ จำกัด
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="row-span-4 col-span-5 tablet:col-span-3">
              <div className="flex flex-row xldesktop:m-5 laptop:m-2 tablet:ml-2 tablet:my-3 m-4">
                <div className="basis-1/2 p-2 tablet:p-1">
                  <blockquote className="xldesktop:text-2xl xllaptop:text-lg laptop:text-sm tablet:text-xs text-xl">
                    <ul class="list-none leading-relaxed text-left">
                      <li>Email : Infinite.Digital.C@gmail.com</li>
                      <li>
                        Tel : <span className="font-Prompt">02-013-3399</span>
                      </li>
                      <li>Website : TheInfiniteDigital.com</li>
                      <li>Line : @infinitedigital</li>
                    </ul>
                  </blockquote>
                </div>
                <div className="basis-1/2 p-2 tablet:p-1">
                  <blockquote className="xldesktop:text-2xl xllaptop:text-lg laptop:text-sm tablet:text-xs text-xl">
                    <ul class="list-none leading-relaxed text-left">
                      <li>
                        Address : <span className="font-Prompt">33/52</span>{" "}
                        วิลล่า อัลแบโร่
                      </li>
                      <li>
                        พระราม <span className="font-Prompt">9</span> ถนน
                        กรุงเทพกรีฑา
                      </li>
                      <li>แขวงสะพานสูง เขตสะพานสูง</li>
                      <li>
                        กรุงเทพมหานคร <span className="font-Prompt">11240</span>
                      </li>
                    </ul>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className=" block xldesktop:hidden desktop:hidden xllaptop:hidden laptop:hidden tablet:hidden">
        <footer
          className="text-left text-white bg-cover bg-no-repeat h-auto"
          style={{ backgroundImage: `url(${bgFooterMo})` }}
        >
          <div className="grid grid-rows-1 grid-flow-col justify-center">
            <div className="row-span-6 m-5">
              <img
                className="object-cover w-auto h-16"
                src="../assets/images/logo-footer.png"
                alt="logo-footer"
              ></img>
            </div>
          </div>

          <div className="grid grid-rows-1 grid-flow-col justify-between mx-6 mb-2 border-b">
            <h1 className="text-xl uppercase font-bold">contact</h1>
            <a href="https://fb.me/InfiniteDigitalConsultants/">
              <img
                className="object-cover w-8 h-auto rounded-full"
                src="../assets/images/footer/icon-facebook.png"
                alt="logo-footer"
              />
            </a>
            <a href="https://line.me/ti/p/%40infinitedigital">
              <img
                className="object-cover w-8 h-auto rounded-full"
                src="../assets/images/footer/icon-line.png"
                alt="logo-footer"
              />
            </a>
            <div className="text-sm font-extralight pb-3">
              <p>
                เลขประจำตัวผู้เสียภาษี :{" "}
                <span className="font-Prompt">0105559190160</span>
                <br />
                บริษัท อินฟินิท ดิจิทัล คอนซัลแต้นส์ จำกัด
              </p>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col justify-between mx-7 my-3">
            <div>
              <blockquote className="text-xs font-extralight">
                <ul class="list-none leading-relaxed text-left">
                  <li>Email : Infinite.Digital.C@gmail.com</li>
                  <li>
                    Tel : <span className="font-Prompt">02-013-3399</span>
                  </li>
                  <li>Website : TheInfiniteDigital.com</li>
                  <li>Line : @infinitedigital</li>
                </ul>
              </blockquote>
            </div>
            <div>
              <blockquote className="text-xs font-extralight">
                <ul class="list-none leading-relaxed text-left">
                  <li>
                    Address : <span className="font-Prompt">33/52</span> วิลล่า
                    อัลแบโร่
                  </li>
                  <li>
                    พระราม <span className="font-Prompt">9</span> ถนน
                    กรุงเทพกรีฑา
                  </li>
                  <li>แขวงสะพานสูง เขตสะพานสูง</li>
                  <li>
                    กรุงเทพมหานคร <span className="font-Prompt">11240</span>
                  </li>
                </ul>
              </blockquote>
            </div>
          </div>
          <div
            className="grid grid-rows-1 grid-flow-col h-28 w-screen rounded-t-2xl bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${bgFooterMoBottom})` }}
          >
            <div className="row-span-6 mx-10 my-4">
              <div className="grid grid-rows-1 grid-flow-col justify-between">
                {navigationMo.map((item) => (
                  <a href={item.href}>
                    <img
                      className="object-cover w-16 h-16 "
                      src={item.img}
                      alt="logo-footer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
