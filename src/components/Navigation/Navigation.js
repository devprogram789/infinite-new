import React, { useRef, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer";
import { Disclosure } from "@headlessui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
//import SidebarNav from "./NavNew";
import "./NavNew.css";
gsap.registerPlugin(ScrollTrigger, CustomEase);

const navigation = [
  {
    name: "Home",
    id: "menuHome",
    href: "/",
    current: true,
  },
  {
    name: "About",
    id: "menuAbout",
    href: "/about",
    current: true,
  },
  {
    name: "Work",
    id: "menuWork",
    href: "/work",
    current: true,
  },
  {
    name: "Service",
    id: "menuService",
    href: "",
    current: false,
  },
  {
    name: "Contact",
    id: "menuContact",
    href: "/contact",
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
    name: "Creative Online and Printing",
    id: "sub04",
    to: "/services/digital",
  },
];

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
    gsap.fromTo(
      "#navbarService",
      {
        opacity: 0,
        x: "200%",
        duration: 0.1,
      },
      {
        opacity: 1,
        x: "150%",
        duration: 0.1,
      }
    );
  });

  useEffect(() => {
    gsap.fromTo(
      "#navbarMenu",
      {
        opacity: 0,
        x: "100%",
        duration: 0.1,
      },
      {
        opacity: 1,
        x: "0%",
        duration: 0.1,
      }
    );
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsSubOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Disclosure as="nav" className="container-full mx-auto">
        <>
          <div className="grid grid-cols-12 gap-0">
            {isOpen ? (
              <div
                className="col-start-1 col-span-12 z-30 sidebar-block"
                id="navbarService"
              >
                <div className="fixed right-5 cursor-pointer">
                  <XIcon
                    className="h-8 w-8 border rounded-md my-12"
                    aria-hidden="true"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                <div className="mt-12">
                  {navService.map((item) => (
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(!isOpen)}
                      className="sidebar-text"
                    >
                      <span className="text-xl md:text-xl lg:text-3xl 2xl:text-4xl font-bold text-in-purple-3 font-R-FLEX border-b-4 border-infinite2-2 ml-10 leading-normal">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {isOpenMenu ? (
              <div
                className="col-start-1 col-span-12 z-30 sidebar-block"
                id="navbarMenu"
              >
                <div className="fixed right-5">
                  <XIcon
                    className="h-8 w-8 md:h-6 md:w-6 border rounded-md my-10"
                    aria-hidden="true"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                  />
                </div>
                <div className="mt-12">
                  {navigation.map((item) =>
                    item.current ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                        className="sidebar-text"
                      >
                        <span className="text-3xl md:text-5xl font-bold text-in-purple-3 border-b-2 border-infinite2-2 ml-5 leading-relaxed">
                          {item.name}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <Link to={item.href} className="sidebar-text">
                          <span
                            className="text-3xl md:text-5xl font-bold text-in-purple-3 border-b-2 border-infinite2-2 ml-5 leading-relaxed"
                            onClick={() => setIsSubOpen(!isOpenSub)}
                          >
                            {item.name}
                          </span>
                        </Link>
                        <ul
                          role="list"
                          className="marker:text-sky-400 list-disc pl-10 space-y-3 text-slate-400"
                        >
                          {navService.map((item) =>
                            isOpenSub ? (
                              <Link
                                to={item.to}
                                onClick={() => setIsOpenMenu(!isOpenMenu)}
                                className="sidebar-textsub"
                              >
                                <li className="pt-2">
                                  <span className="text-xl font-bold text-in-purple-3 font-R-FLEX">
                                    {item.name}
                                    <br />
                                  </span>
                                </li>
                              </Link>
                            ) : null
                          )}
                        </ul>
                      </>
                    )
                  )}
                </div>
              </div>
            ) : null}
            <div className="col-start-1 col-end-1 z-0">
              <div className="bg-gray-50">
                <div
                  className="fixed flex items-center h-screen w-1/12"
                  ref={addLogoToRefs}
                >
                  <a
                    href="/"
                    className="hidden md:block "
                  >
                    <img
                      className="flex items-center origin-center max-w-full -h-screen -rotate-90 "
                      src="../assets/images/AW-Logo-Infinite-png.png"
                      alt="Infinite"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-span-12 bg-infinite2-1 z-20 shadow-md">
              <div className="max-w-full mx-auto overflow-hidden">
                <div className="hidden md:block">
                  <div className="grid grid-cols-12">
                    <header className="col-start-1 col-span-11">
                      <div className="max-w-full mx-auto overflow-hidden">
                        <nav className="flex justify-between items-center md:h-16 lg:h-28 mx-3">
                          <div className="grid justify-items-start">
                            <a href="/">
                              <img
                                className="object-cover md:h-32 lg:h-48 w-auto"
                                src="../assets/images/AW-Logo-Infinite-1.png"
                                alt="Infinite"
                              />
                            </a>
                          </div>
                          <div className="grid justify-items-end w-3/4 h-auto">
                            <div className="flex items-end">
                              {navigation.map((item) =>
                                item.current ? (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="border-t-0 border-t-infinite2-1 md:rounded-xl lg:rounded-2xl text-sm font-medium in-wave001 md:w-16 md:h-7 md:pt-0 lg:w-28 lg:h-10 lg:pt-2 text-center cursor-pointer"
                                    aria-current={
                                      item.current ? "page" : undefined
                                    }
                                  >
                                    <span className="md:text-base lg:text-2xl font-bold text-in-purple-3 font-R-FLEX leading-none">
                                      {item.name}
                                    </span>
                                    <div className="in-wave002 md:w-24 md:h-24 lg:w-32 lg:h-32"></div>
                                  </a>
                                ) : (
                                  <div className="border-t-0 border-t-infinite2-1 md:rounded-xl lg:rounded-2xl text-sm font-medium in-wave001 md:w-16 md:h-7 md:pt-0 lg:w-28 lg:h-10 lg:pt-2 text-center cursor-pointer">
                                    <span
                                      className="md:text-base lg:text-2xl font-bold text-in-purple-3 font-R-FLEX leading-none"
                                      onClick={() =>
                                        setIsOpen((isOpen) => !isOpen)
                                      }
                                    >
                                      {item.name}
                                    </span>
                                    <div className="in-wave002 md:w-24 md:h-24 lg:w-32 lg:h-32"></div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </nav>
                      </div>
                    </header>
                  </div>
                </div>
                <div className="block md:hidden">
                  <div className="grid grid-cols-12">
                    <header className="col-start-1 col-span-12">
                      <div className="max-w-full mx-auto overflow-hidden">
                        <nav className="flex justify-between items-center h-28 mx-5">
                          <div className="grid justify-items-start">
                            <a href="/">
                              <img
                                className="object-cover h-40 w-auto"
                                src="../assets/images/AW-Logo-Infinite-1.png"
                                alt="Infinite"
                              />
                            </a>
                          </div>
                          <div className="grid justify-items-end w-3/4 h-auto">
                            <div className="flex items-end">
                              <MenuIcon
                                className="h-8 w-8 md:h-5 md:w-5 border rounded-md"
                                aria-hidden="true"
                                onClick={() => setIsOpenMenu(!isOpenMenu)}
                              />
                            </div>
                          </div>
                        </nav>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-10 z-15">
              <Outlet />
            </div>
            <div className="col-start-1 col-span-12 z-10">
              <div class="mx-auto overflow-hidden max-w-full">
                <Footer />
              </div>
            </div>
          </div>
        </>
    </Disclosure>
  );
}
