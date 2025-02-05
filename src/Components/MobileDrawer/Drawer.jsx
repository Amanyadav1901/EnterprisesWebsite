import { Disclosure, DisclosureButton } from "@headlessui/react";
import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export default function Drawer({ isOpen, setIsOpen }) {
  const cat = useParams();
  const filters = [
    {
      title: "Cleaning Machinery",
    },
    {
      title: "Uniforms",
    },
    {
      title: "Dispensers",
    },
    {
      title: "Housekeeping Chemicals",
    },
    {
      title: "Accessories",
    },
    {
      title: "Trolley & Buckets",
    },
    {
      title: "Cleaning Tools",
    },
    {
      title: "Cleaning Products",
    },
  ];
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [cat]);

  return (
    <main
      className={
        "content-evenly fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-3/5 max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-auto max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg border-b">Menu</header>
          <div className="border-b pb-4">
            <Link to={`/`}>
              <button className=" bg-black py-3 px-8 otline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                <h2>Home</h2>
              </button>
            </Link>
          </div>

          {filters.map((section) => (
            <Disclosure as="div" className="border-b border-gray-200 py-2">
              <h3 className="-my-3 flow-root hover:shadow-lg">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-1 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900  text-sm ">
                    <Link
                      to={`/product/${section.title}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      replace
                    >
                      {section.title}
                    </Link>
                  </span>
                </DisclosureButton>
              </h3>
            </Disclosure>
          ))}
          <div className="border-t py-4">
            <Link to={`/contact`}>
              <button className=" bg-black py-3 px-8 otline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                <h2>Contact Us</h2>
              </button>
            </Link>
          </div>
        </article>
      </section>

      <section
        className=" w-screen h-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
