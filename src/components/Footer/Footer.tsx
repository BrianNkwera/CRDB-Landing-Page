import { useState } from "react";
import patternGreen from "../../assets/images/pattern-green.svg";
import simbanking from "../../assets/images/simbanking.svg";
import googlePlayStore from "../../assets/icons/GooglePlay.webp";
import appStore from "../../assets/icons/appStore.webp";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer
      className="bg-white  px-6 py-12 my-12"
      style={{
        backgroundImage: `url(${patternGreen})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
        backgroundSize: "auto 25px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* About CRDB */}
          <div>
            <h3 className="text-green-900 font-bold mb-4 tex uppercase">
              ABOUT CRDB
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Media Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Tenders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  CRDB Sadaka
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-green-900 font-bold mb-4 text-md uppercase">
              OUR SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  For your Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  For Investors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-green-900 font-bold mb-4 text-md uppercase">
              HELP & SUPPORT
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Feedback & Complaints
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Whistle Blowing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Locate CRDB
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Social Media Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Related Information */}
          <div>
            <h3 className="text-green-900 font-bold mb-4 text-md uppercase">
              RELATED INFORMATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Loan Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Apply for Sponsorship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  Samia Infrastructure Financing
                </a>
              </li>
            </ul>
          </div>

          {/* CRDB Campaigns */}
          <div>
            <h3 className="text-green-900 font-bold mb-4 text-md uppercase">
              CRDB CAMPAIGNS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  CRDB Marathon
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and App Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Newsletter Signup */}
            <div className="lg:col-span-6">
              <h3 className="text-green-900 font-bold mb-4 text-md uppercase tracking-wide">
                SIGN UP FOR OUR NEWSLETTER
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 outline-none focus:ring-0 focus:border-green-500 border-none"
                />

                <button
                  onClick={handleSignUp}
                  className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-lg transition-colors duration-200 whitespace-nowrap"
                  disabled
                >
                  SIGN UP
                </button>
              </div>
            </div>
            <div className="lg:col-span-3 text-center">
              <div className="text-green-900 font-bold mb-2 text-md uppercase tracking-wide">
                BANK ON THE GO WITH
              </div>
              <img
                src={simbanking}
                alt="simBanking"
                style={{ height: "30px", width: "auto" }}
                className="mx-auto"
              />
            </div>

            {/* App Download Section */}
            <div className="text-center lg:col-span-3">
              <div className="text-green-900 font-bold text-xl mb-3">
                Get the App
              </div>

              <div className="mb-4 lg:col-span-6">
                <div className="flex justify-center lg:justify-end gap-3">
                  <a href="#" className="inline-block">
                    <img
                      src={googlePlayStore}
                      alt="Google Play store"
                      style={{ height: "40px", width: "120px" }}
                    />
                  </a>
                  <a href="#" className="inline-block">
                    <img
                      src={appStore}
                      alt="App store"
                      style={{ height: "40px", width: "120px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
