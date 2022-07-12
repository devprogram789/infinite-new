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
      <div className="hidden md:block">
        <footer
          className="text-left text-white bg-cover bg-no-repeat h-auto"
          style={{ backgroundImage: `url(${bgFooter})` }}
        >
          <div className="grid grid-rows-3 grid-flow-col tracking-widest font-light lining-nums md:h-40 lg:h-56 2xl:h-60 3xl:h-64">
            <div className="row-span-6">
              <div className="md:mx-4 lg:mx-10 2xl:mx-16 md:my-16 lg:my-20 2xl:my-24">
                <img
                  className="object-cover w-auto md:h-9 lg:h-14 2xl:h-24 3xl:h-24"
                  src="../assets/images/logo-footer.png"
                  alt="logo-footer"
                ></img>
              </div>
            </div>
            <div className="row-span-1 col-span-5">
              <div className="flex uppercase">
                <div className="basis-1/6">
                  <div className="grid justify-items-center items-center h-full w-full">
                    <h1 className="md:text-base lg:text-xl 2xl:text-4xl 3xl:text-5xl">
                      contact
                    </h1>
                  </div>
                </div>
                <div className="basis-auto md:ml-0 md:my-5 lg:ml-2 lg:my-5 m-4">
                  <div className="grid grid-cols-2 md:gap-1 lg:gap-2">
                    <div>
                      <a href="https://fb.me/InfiniteDigitalConsultants/">
                        <img
                          className="object-cover md:w-5 lg:w-10 w-14 h-auto rounded-full"
                          src="../assets/images/footer/icon-facebook.png"
                          alt="logo-footer"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="https://line.me/ti/p/%40infinitedigital">
                        <img
                          className="object-cover md:w-5 lg:w-10 w-14 h-auto rounded-full"
                          src="../assets/images/footer/icon-line.png"
                          alt="logo-footer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="basis-5/6">
                  <div className="grid justify-items-center items-center h-full w-full">
                    <div className="md:text-xs lg:text-sm 2xl:text-xl 3xl:text-2xl">
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
            <div className="row-span-4 col-span-5">
              <div className="flex flex-row md:my-2 lg:my-3 2xl:my-1 3xl:my-0 m-4">
                <div className="basis-1/2 p-2">
                  <blockquote className="md:text-xs lg:text-base 2xl:text-xl 3xl:text-2xl">
                    <ul class="list-none leading-relaxed text-left">
                      <li>
                        <div class="flex items-center">
                          <img
                            class="object-cover rounded w-6 h-6 mr-5"
                            src="../assets/images/footer/icon-footer-new-1.png"
                          />
                          <div>
                            <p>Email : Infinite.Digital.C@gmail.com</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center">
                          <img
                            class="object-cover rounded w-6 h-6 mr-5"
                            src="../assets/images/footer/icon-footer-new-2.png"
                          />
                          <div>
                            <p>
                              Tel :{" "}
                              <span className="font-Prompt">02-013-3399</span>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center">
                          <img
                            class="object-cover rounded w-6 h-6 mr-5"
                            src="../assets/images/footer/icon-footer-new-3.png"
                          />
                          <div>
                            <p>Website : TheInfiniteDigital.com</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center">
                          <img
                            class="object-cover rounded w-6 h-6 mr-5"
                            src="../assets/images/footer/icon-footer-new-4.png"
                          />
                          <div>
                            <p>Line : @infinitedigital</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </blockquote>
                </div>
                <div className="basis-1/2 p-2">
                  <blockquote className="md:text-xs lg:text-base 2xl:text-xl 3xl:text-2xl">
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
      <div className=" block md:hidden">
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
          <div className="grid grid-rows-1 grid-flow-col justify-between mx-7 my-3 mb-28">
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
          <div className="fixed bottom-0">
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
          </div>
        </footer>
      </div>
    </div>
  );
}
