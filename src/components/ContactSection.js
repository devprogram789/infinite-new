import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const formContact = [
  {
    name: "ชื่อ - นามสกุล*",
    id: "in-name001",
    type: "text",
    maxlength: "200em",
    placeholder: "กรุณากรอก ชื่อ - นามสกุล",
  },
  {
    name: "อีเมล*",
    id: "in-name002",
    type: "email",
    maxlength: "200em",
    placeholder: "กรุณากรอก อีเมล",
  },
  {
    name: "เบอร์โทรศัพท์*",
    id: "in-name003",
    type: "number",
    maxlength: "10em",
    placeholder: "กรุณากรอก เบอร์โทรศัพท์",
  },
  {
    name: "เว็บไซต์",
    id: "in-name004",
    type: "text",
    maxlength: "100em",
    placeholder: "กรุณากรอก เว็บไซต์",
  },
  {
    name: "งบประมาณในการลงทุน*",
    id: "in-name005",
    type: "number",
    maxlength: "100em",
    placeholder: "กรุณากรอก งบประมาณในการลงทุน",
  },
];

export default function Contact() {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-infinite1-100 h-screen">
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between">
            <div className="relative">
              <img
                className="object-cover w-screen h-full"
                src="../assets/images/contact/pic-contact.jpg"
                alt="Infinite"
              />
            </div>
          </div>
        </div>
        <div className="bg-infinite1-100 h-screen">
          <div className="max-w-full mx-auto px-4 lg:items-center lg:justify-center">
            <div className="relative bg-infinite1-100">
              <div>
                <div className="max-w-full mx-auto -py-4 lg:flex lg:items-center lg:justify-between -mt-12">
                  <p className="inline-block h-screen w-1/6 bg-in-purple-3"></p>
                  <p className="inline-block h-screen w-5/12 bg-white"></p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-full text-right">
                <div className="h-full w-full ">
                  <div className="grid grid-cols-12 relative h-screen">
                    <div className="col-span-7 lg:flex lg:items-center">
                      <img
                        className="object-cover w-full h-auto"
                        src="../assets/images/contact/pic-infinity-studio.jpg"
                        alt="Work-pic-illustration-1"
                      />
                    </div>
                    <div className="col-span-5 mx-10 mt-56 text-left font-bold tracking-widest">
                      <div className="grid justify-items-start w-full mx-14 ">
                        <h2 className="text-5xl mb-5">
                          Infinity Digital <br /> Studio
                        </h2>
                        <p className="text-3xl font-light">
                          33/52 วิลล่า อัลแบโร่ พระราม9 <br />
                          ถนนกรุงเทพกรีฑา แขวงสะพานสูง <br />
                          เขตสะพานสูง กรุงเทพมหานคร <br />
                          10240
                        </p>
                        <div className="grid justify-items-start w-full my-10">
                          <button className="in-button">
                            <img
                              className="object-none object-center"
                              src="../assets/images/contact/ปุ่ม-google-map.png"
                              alt="ปุ่ม6"
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
        <div className="bg-infinite1-100 h-screen">
          <div className="max-w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between ">
            <div className="relative bg-infinite2-2">
              <img
                className="object-cover w-screen h-full"
                src="../assets/images/contact/map.png"
                alt="Infinite"
              />
            </div>
            <div></div>
          </div>
          <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-ne lg:justify-between -mt-12">
            <p className="inline-block h-48 w-5/5 bg-infinite1-300"></p>
            <p className="inline-block h-48 w-5/12 bg-white"></p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="relative">
          <div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-screen w-full bg-white"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
              <p className="inline-block h-96 w-full bg-white"></p>
            </div>
            <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-between">
              <p className="inline-block h-32 w-2/5 bg-infinite1-200"></p>
              <p className="inline-block h-32 w-1/5 bg-infinite2-2"></p>
            </div>
          </div>
          <div className="absolute top-10 right-0 w-full text-right">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-full m-16 text-center font-bold">
                  <div className="grid justify-items-start w-full">
                    <h2 className="text-5xl font-normal">
                      ปรึกษาเราได้ในทุกเรื่องธุรกิจ
                      <span className="font-normal text-in-purple-1">
                        ที่คุณต้องการ...
                      </span>
                    </h2>
                  </div>
                  <div className="grid justify-items-center w-32 my-10 border bg-gray-dark">
                    <hr />
                  </div>
                </div>
              </div>
              <form>
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-8 mx-20 text-left font-bold">
                    {formContact.map((item) => (
                      <div className="grid justify-items-start w-full mb-5">
                        <label
                          for={item.id}
                          className="block text-2xl font-light mb-2 text-in-purple-2"
                        >
                          {item.name}
                        </label>
                        <input
                          id={item.id}
                          type={item.type}
                          maxlength={item.maxlength}
                          className="py-3 px-5 block w-4/6 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg focus:border-infinite2-2  focus:ring-blue-500 mb-2 "
                          placeholder={item.placeholder}
                        />
                      </div>
                    ))}
                    <label for="in-name006" className="block text-2xl font-light mb-2 text-in-purple-2">
                      ธุรกิจอยู่ในประเภทใด*
                    </label>
                    <select
                      id="in-name006"
                      className="py-3 px-5 block w-4/6 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg focus:border-infinite2-2  focus:ring-blue-500 mb-2"
                    >
                      <option>สุขภาพและยา</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>

                    <div className="grid justify-items-start w-full mx-0 mt-10">
                      <button className="in-button">
                        <img
                          className="object-none object-center"
                          src="../assets/images/home/section6/ปุ่ม6.png"
                          alt="ปุ่ม6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
