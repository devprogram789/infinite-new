import React from "react";

export default function Footer() {
  const bgFooter = "../assets/images/footer/footer-new.png";
  return (
    <div className="container-full mx-auto h-96">
      <footer
        className="text-center lg:text-left text-white bg-cover bg-no-repeat h-full"
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
        <div className="grid grid-rows-3 grid-flow-col tracking-widest font-light lining-nums h-full">
          <div className="row-span-6 mx-10 py-32">
            <div className="px-10 w-6/6 h-auto">
              <img
                className="w-auto h-42"
                src="../assets/images/logo-footer.png"
                alt="logo-footer"
              ></img>
            </div>
          </div>
          <div className="row-span-1 col-span-5 justify-center">
            <div className="flex flex-row my-5 mt-10">
              <div className="basis-1/6">
                <div className="grid justify-items-center items-center h-full w-full">
                  <h1 className="text-5xl uppercase font-R-FLEX text-white">contact</h1>
                </div>
              </div>
              <div className="w-20 ml-5">
                <a href="#">
                  <div className="grid justify-items-end items-center">
                    <img
                      className="object-cover w-auto h-14 rounded-full"
                      src="../assets/images/footer/icon-facebook.png"
                      alt="logo-footer"
                    />
                  </div>
                </a>
              </div>
              <div className="basis-20 ml-5 mr-5">
                <a href="#">
                  <div className="grid justify-items-start items-center">
                    <img
                      className="object-cover w-auto h-14 rounded-full"
                      src="../assets/images/footer/icon-line.png"
                      alt="logo-footer"
                    />
                  </div>
                </a>
              </div>
              <div className="basis-5/6">
                <div className="grid justify-items-start items-center h-full w-full">
                  <h2 className="text-2xl text-white">
                    เลขประจำตัวผู้เสียภาษี: <span className="font-Gotham">0105559190160</span> บริษัท อินฟินิท
                    ดิจิทัล คอนซัลแต้นส์ จำกัด
                  </h2>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="row-span-4 col-span-5">
            <div className="flex flex-row ">
              <div className="basis-1/2 p-2 pl-14">
                <div className="grid justify-items-start items-center h-full w-full">
                  <p className="my-2 text-2xl font-R-FLEX text-white">
                    Email : Infinite.Digital.C@gmail.com
                  </p>
                  <p className="my-2 text-2xl"><span className="font-R-FLEX">Tel</span> : <span className="font-Gotham">02-789-5678-2</span></p>
                  <p className="my-2 text-2xl font-R-FLEX text-white">
                    Website : TheInfiniteDigital.com
                  </p>
                  <p className="my-2 text-2xl font-R-FLEX text-white">Line : @infinitedigital</p>
                </div>
              </div>
              <div className="basis-1/2 p-2">
                <div className="grid justify-items-start items-center h-full w-full">
                  <p className="my-2 text-2xl text-white">
                    <span className="font-R-FLEX text-white">Address</span> : <span className="font-Gotham">33/52</span> วิลล่า อัลแบโร่
                  </p>
                  <p className="my-2 text-2xl text-white">พระราม <span className="font-Gotham">9</span> ถนน กรุงเทพกรีฑา</p>
                  <p className="my-2 text-2xl text-white">แขวงสะพานสูง เขตสะพานสูง</p>
                  <p className="my-2 text-2xl text-white">กรุงเทพมหานคร <span className="font-Gotham">11240</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
