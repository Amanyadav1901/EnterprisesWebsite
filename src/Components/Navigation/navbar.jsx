import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { image3301, menuBtn } from "../../assets";
import Drawer from "../MobileDrawer/Drawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const DropOptions = [
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white bg-opacity-100 shadow-md fixed top-0 left-0 w-screen z-50 p-4 flex justify-between items-center gap-10">
        {/* Logo and Enterprise Name */}
        <div className="flex flex-row items-center ">
          <Link to="/">
            <img src={image3301} alt="Logo" className="h-14 md:h-10 mr-3  " />
          </Link>
          <Link to="/">
            <h1 className="text-xl font-bold text-gray-800 md:block hidden">
              V+ Enterprises
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-wrap gap-4 mx-5 ">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-600 hover:text-blue-500"
              >
                Products
              </button>
              {dropdownOpen && (
                <ul className="absolute rounded-lg left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg">
                  {DropOptions.map((option, index) => (
                    <li key={index}>
                      <Link
                        to={`/product/${option.title}`}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {option.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-500">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <header className="md:hidden flex justify-between p-4 ">
          <button
            className=" text-white rounded px-4 py-1"
            onClick={() => setOpen(true)}
          >
            <img src={menuBtn} alt="menu Button" />
          </button>
        </header>

        <Drawer isOpen={open} setIsOpen={setOpen} />
      </nav>
    </>
  );
};

export default Navbar;
