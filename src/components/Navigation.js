import React, { useRef, useEffect, useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

gsap.registerPlugin(ScrollTrigger);

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
    current: false,
  },
  {
    name: "Service",
    id: "active",
    href: "#service",
    src: "../assets/images/menu/ปุ่มกด3.png",
    current: false,
  },
  {
    name: "Contact",
    id: "",
    href: "/contact",
    src: "../assets/images/menu/ปุ่มกด4.png",
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState();
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
  return (
    <Disclosure as="nav" className="container-full mx-auto">
      {({ open }) => (
        <>
          <div class="grid grid-cols-12 gap-4">
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
            <div class="col-start-1 col-span-11 z-0">
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
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? "" : "",
                            "border-t-0 border-t-infinite2-1 rounded-t-3xl bo rounded-b-3xl text-sm font-medium in-wave001 text-center pt-4"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className="text-3xl font-bold text-in-purple-3">
                            {item.name}
                          </span>
                          <div className="in-wave002"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </nav>
              </header>
            </div>

            <div class="col-start-2 col-span-10 z-15">
              <Outlet />
            </div>
            <div class="col-start-1 col-span-12 z-10">
              <Footer />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
