import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import emailjs from "@emailjs/browser";
import axios from "axios";

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
    type: "text",
    maxlength: "100em",
    placeholder: "กรุณากรอก งบประมาณในการลงทุน",
  },
  {
    name: "ธุรกิจอยู่ในประเภทใด*",
    id: "in-name006",
    type: "text",
    maxlength: "100em",
    placeholder: "กรุณากรอก ธุรกิจอยู่ในประเภทใด",
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [web, setWeb] = useState("");
  const [budget, setBudget] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        alert("Message sent");
        form.current.reset();
      },
      (error) => {
        alert(error.text);
      }
    );
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://script.google.com/macros/s/AKfycbzWMgsUPLDp259VHL90mXZzePxIwg9ER5RAJtcsarpSeRH8kKKGQBifvXhcIOdr8BWZSw/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            web: web,
            budget: budget,
            business: business,
          }),
        }
      );
      let resJson = await res.json();
      if (res.length) {
        setMessage("Some error occured");
      } else {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="hidden md:block">
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
                      <div className="col-span-5 3xl:mx-10 2xl:mt-48 3xl:mt-56 text-left font-bold tracking-widest">
                        <div className="grid justify-items-start w-full mx-14 ">
                          <h2 className="2xl:text-5xl 3xl:text-5xl mb-5 font-R-FLEX">
                            Infinity Digital <br /> Studio
                          </h2>
                          <p className="2xl:text-2xl 3xl:text-3xl font-light">
                            <span className="font-Prompt">33/52</span> วิลล่า
                            อัลแบโร่ พระราม
                            <span className="font-Prompt">9</span> <br />
                            ถนนกรุงเทพกรีฑา แขวงสะพานสูง <br />
                            เขตสะพานสูง กรุงเทพมหานคร <br />
                            <span className="font-Prompt">10240</span>
                          </p>
                          <div className="grid justify-items-start w-full my-10">
                            <a href="https://goo.gl/maps/nhNzrjjLY9BYbopw5">
                              <button className="in-button">
                                <img
                                  className="object-none object-center"
                                  src="../assets/images/contact/ปุ่ม-google-map.png"
                                  alt="ปุ่ม6"
                                />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto p-4 lg:flex lg:items-center lg:justify-end -mt-12">
                <p className="inline-block h-750 w-full bg-infinite2-2"></p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-full m-10 text-center font-bold">
                    <div className="grid justify-items-start w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.532632847678!2d100.6700598!3d13.7467221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3588c0710db29522!2zMTPCsDQ0JzQ5LjUiTiAxMDDCsDQwJzE0LjIiRQ!5e0!3m2!1sth!2sth!4v1655737126626!5m2!1sth!2sth"
                        className="w-full h-680"
                        display="initial"
                        position="relative"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
                <p className="inline-block h-32 w-full bg-white"></p>
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
                        <span className="font-normal text-infinite2-2">
                          ที่คุณต้องการ...
                        </span>
                      </h2>
                    </div>
                    <div className="grid justify-items-center w-32 my-10 border bg-gray-dark">
                      <hr />
                    </div>
                  </div>
                </div>
                {/*               <form ref={form} onSubmit={sendEmail}>
                      <div direction="column" spacing={2}>
                          <input type="text" name="name" label="Name" placeholder='Name' variant='outlined' fullWidth required />
                          <input type="email" name="email" label="Email" placeholder='Email Address' variant='outlined' fullWidth required />
                          <input multiline rows={4} name="message" label="Message" placeholder='Type your message here' variant='outlined' fullWidth required />
                          <button type="submit" variant="contained" color="primary">Send</button>
                      </div>
                  </form> */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-12 mx-20 text-left font-bold font-Prompt">
                      <div className="grid justify-items-start w-full">
                        <label class="block mb-5">
                          <span class=" block text-2xl font-light mb-2 text-in-purple-2">
                            ชื่อ - นามสกุล
                          </span>
                          <input
                            type="text"
                            value={name}
                            placeholder="กรอก ชื่อ - นามสกุล"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="py-3 px-5 block w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-red
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label class="block mb-5">
                          <span class=" block text-2xl font-light mb-2 text-in-purple-2">
                            อีเมล
                          </span>
                          <input
                            type="email"
                            value={email}
                            placeholder="กรอก อีเมล"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="py-3 px-5 block w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-red
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label class="block mb-5">
                          <span class=" block text-2xl font-light mb-2 text-in-purple-2">
                            เบอร์โทรศัพท์
                          </span>
                          <input
                            type="text"
                            value={mobileNumber}
                            placeholder="กรอก เบอร์โทรศัพท์"
                            maxLength={10}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                            className="py-3 px-5 block w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-red
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label class="block mb-5">
                          <span class=" block text-2xl font-light mb-2 text-in-purple-2">
                            เว็บไซต์
                          </span>
                          <input
                            type="text"
                            value={web}
                            placeholder="กรอก เว็บไซต์"
                            onChange={(e) => setWeb(e.target.value)}
                            required
                            className="py-3 px-5 block w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-red
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label class="block mb-5">
                          <span class=" block text-2xl font-light mb-2 text-in-purple-2">
                            งบประมาณในการลงทุน
                          </span>
                          <input
                            type="text"
                            value={budget}
                            placeholder="กรอก งบประมาณในการลงทุน"
                            onChange={(e) => setBudget(e.target.value)}
                            required
                            className="py-3 px-5 block w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-red
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label class="block mb-5">
                          <span class=" block text-2xl font-light mb-2 text-in-purple-2">
                            ธุรกิจอยู่ในประเภทใด
                          </span>
                          <input
                            type="text"
                            value={business}
                            placeholder="กรอก ธุรกิจอยู่ในประเภทใด"
                            onChange={(e) => setBusiness(e.target.value)}
                            required
                            className="py-3 px-5 block w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-red
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                      </div>
                      <div className="grid justify-items-start w-full mx-0 mt-6">
                        <button
                          className="in-button py-3 px-5 block w-44 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-lg mb-2"
                          type="submit"
                        >
                          <p>ส่ง</p>
                        </button>
                      </div>
                      <div className="message">
                        {message ? <p>{message}</p> : null}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden"></div>
    </>
  );
}
