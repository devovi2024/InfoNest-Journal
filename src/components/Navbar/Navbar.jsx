import { FaSearch, FaTwitter, FaFacebookF, FaYoutube, FaRegUser, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import data from '../../assets/data.json';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  useEffect(() => {
    const uniqueCategories = [...new Set(data.map(item => item.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="w-full text-sm font-[Mukta] bg-[#fffdf5]">
      {/* Top Bar */}
      <div className="bg-[#fcd34d] text-black flex justify-between items-center px-4 py-1 border-b border-yellow-500">
        <div className="flex items-center">
          <span className="bg-[#d97706] text-white px-2 py-0.5 rounded-sm mr-3 text-xs">Breaking</span>
          <p className="truncate">Africa Rising: Tech Hubs Driving Change Across the Continent</p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-sm">
          <p>Wednesday, April 23, 2025</p>
          <FaTwitter />
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10" />
          <h1 className="text-2xl font-extrabold text-[#10b981]">AfriNews</h1>
        </div>

        <div className="hidden lg:flex bg-[#1f2937] text-white px-6 py-2 text-sm rounded-md items-center justify-between w-[40%] shadow-md">
          <div>
            <h2 className="font-bold text-lg">Explore Africa</h2>
            <p className="text-gray-300 text-xs">Bold Stories | Real Culture | True Africa</p>
          </div>
          <div className="text-center ml-4">
            <span className="text-yellow-400">ADS</span>
            <p className="text-sm">728x90 Banner</p>
          </div>
        </div>

        <FaBars className="lg:hidden text-2xl text-gray-800 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Navbar */}
      <div className={`border-t border-b py-2 px-4 flex flex-col lg:flex-row lg:justify-between lg:items-center text-base transition-all duration-300 ${menuOpen ? "block" : "hidden"} lg:flex`}>
        <div className="flex flex-col lg:flex-row gap-4">
          {["Home", "Pages", "Posts"].map((item) => (
            <div key={item} className="flex items-center gap-1 cursor-pointer">{item} <IoIosArrowDown /></div>
          ))}

          {/* Category Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Category <IoIosArrowDown />
            </div>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                {categories.map((category) => (
                  <div key={category} className="py-2 px-4 hover:bg-gray-200 cursor-pointer">{category}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 items-center mt-2 lg:mt-0">
          <FaRegUser className="cursor-pointer" />
          <FaSearch className="cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">EN <IoIosArrowDown /></div>
          <div className="flex items-center gap-1">
            <img src="/weather-icon.png" alt="weather" className="h-5 w-5" />
            <span>30°C</span>
            <span className="text-xs text-gray-500">Lagos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
