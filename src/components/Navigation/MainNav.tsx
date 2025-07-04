import { useState } from "react";
import crdbLogo from "../../assets/images/CRDB.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapPointer from "../../assets/icons/mapPointer.svg"
import searchIcon from "../../assets/icons/searchIcon.svg"

function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
       
               {/* Desktop Navigation */}
          <div className="flex items-center">
               <img
            src={crdbLogo}
            className="object-contain"
            width={105}
            height={40}
          />
            <div className="ms-16 hidden md:flex items-baseline space-x-8">
              <a
                href="#"
                className="text-green-600 hover:text-green-700 px-3 py-2 font-medium border-b-2 border-green-600"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 px-3 py-2 font-medium"
              >
                FOR YOU
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 px-3 py-2 font-medium"
              >
                FOR YOUR BUSINESS
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 px-3 py-2 font-medium"
              >
                FOR INVESTORS
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 px-3 py-2 font-medium"
              >
                ABOUT CRDB
              </a>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-700">
                <img src={mapPointer} alt="Location"/>
              <span>FIND US</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-700">
               <img src={searchIcon} alt="Location"/>
              <span>SEARCH</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
             {isMenuOpen ? <span>X</span> : <FontAwesomeIcon icon="bars" className="h-6 w-6" />} 
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a
              href="#"
              className="text-green-600 block px-3 py-2 text-base font-medium"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-700 block px-3 py-2 text-base font-medium"
            >
              FOR YOU
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-700 block px-3 py-2 text-base font-medium"
            >
              FOR YOUR BUSINESS
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-700 block px-3 py-2 text-base font-medium"
            >
              FOR INVESTORS
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-green-700 block px-3 py-2 text-base font-medium"
            >
              ABOUT CRDB
            </a>
            <div className="border-t border-gray-200 pt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 block px-3 py-2 text-base font-medium"
              >
                FIND US
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 block px-3 py-2 text-base font-medium"
              >
                SEARCH
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export { MainNav };
