import React, { useRef, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer";
import { Disclosure } from "@headlessui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
//import SidebarNav from "./NavNew";
import "./NavNew.css";
gsap.registerPlugin(ScrollTrigger, CustomEase);

const navigation = [
  {
    name: "Home",
    id: "",
    href: "/",
    src: "../assets/images/menu/ปุ่มกด1.png",
    current: true,
  },
  {
    name: "Work",
    id: "",
    href: "/work",
    src: "../assets/images/menu/ปุ่มกด2.png",
    current: true,
  },
  {
    name: "Service",
    id: "active",
    href: "",
    src: "../assets/images/menu/ปุ่มกด3.png",
    current: false,
  },
  {
    name: "Contact",
    id: "",
    href: "/contact",
    src: "../assets/images/menu/ปุ่มกด4.png",
    current: true,
  },
];

const navService = [
  {
    name: "Seo Digital Marketing",
    id: "sub01",
    to: "/services/seo",
  },
  {
    name: "Web Design",
    id: "sub02",
    to: "/services/design",
  },
  {
    name: "Expert Programming",
    id: "sub03",
    to: "/services/code",
  },
  {
    name: "Social Media Experience",
    id: "sub04",
    to: "/services/digital",
  },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

export default function Navigation() {
  const reLogoRefs = useRef([]);
  reLogoRefs.current = [];
  useEffect(() => {
    reLogoRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "none",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `sectionLogo-${index + 1}`,
            trigger: el,
            start: "top end+=-100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addLogoToRefs = (el) => {
    if (el && !reLogoRefs.current.includes(el)) {
      reLogoRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(".sidebar-block", {
      opacity: 0,
      x: "100%",
      duration: 0.1,
    });
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="container-full mx-auto">
      {({ open }) => (
        <>
          <div className="grid grid-cols-12 gap-0">
            {isOpen ? (
              <div className="col-start-1 col-span-12 z-30 sidebar-block">
                <div
                  className="button_container mb-10"
                  id="toggle"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="top"></span>
                </div>
                <div className="mt-20">
                  {navService.map((item) => (
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(!isOpen)}
                      className="sidebar-text"
                    >
                      <span className="text-6xl font-bold text-in-purple-3 font-R-FLEX">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="col-start-1 col-end-1 z-0">
              <div className="bg-gray-50">
                <div
                  className="fixed flex items-center h-screen w-1/12"
                  ref={addLogoToRefs}
                >
                  <a href="/">
                    <img
                      className="flex items-center origin-center max-w-full -h-screen -rotate-90"
                      src="../assets/images/AW-Logo-Infinite-png.png"
                      alt="Infinite"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-span-11 z-20">
              <header className="box-content h-20 my-5 p-4">
                <nav className="flex justify-between h-full items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="grid justify-items-start w-80 pl-5">
                        <a href="/">
                          <img
                            className="object-center h-full w-auto"
                            src="../assets/images/AW-Logo-Infinite-1.png"
                            alt="Infinite"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-end md:ml-6">
                      {navigation.map((item) =>
                        item.current ? (
                          <a
                            key={item.name}
                            href={item.href}
                            className="border-t-0 border-t-infinite2-1 rounded-t-3xl rounded-b-3xl text-sm font-medium in-wave001 text-center pt-4 cursor-pointer"
                            aria-current={item.current ? "page" : undefined}
                          >
                            <span className="text-3xl font-bold text-in-purple-3 font-R-FLEX">
                              {item.name}
                            </span>
                            <div className="in-wave002"></div>
                          </a>
                        ) : (
                          <div className="border-t-0 border-t-infinite2-1 rounded-t-3xl rounded-b-3xl text-sm font-medium in-wave001 text-center pt-4 cursor-pointer">
                            <span
                              className="text-3xl font-bold text-in-purple-3 font-R-FLEX"
                              onClick={() => setIsOpen((isOpen) => !isOpen)}
                            >
                              {item.name}
                            </span>
                            <div className="in-wave002"></div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </nav>
              </header>
            </div>
            <div className="col-start-2 col-span-10 z-15">
              <Outlet />
            </div>
            <div className="col-start-1 col-span-12 z-10">
              <Footer />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
