import { TopNav } from "./components/Navigation/TopNav";
import { MainNav } from "./components/Navigation/MainNav";
import { Carousel } from "./components/Carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import { Card } from "./components/Card/Card";
import { Chatbot } from "./components/Chatbot/Chatbot";
import poultry from "./assets/images/poultry.webp";
import arrowRight from "./assets/icons/arrow-right.svg";
import { ServicesTabs } from "./components/Tab/tab";
import { useState } from "react";

function CRDBBankClone() {
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <MainNav />
      <Carousel />
      <ServicesTabs />

      <div className="max-w-8xl mx-auto py-8 my-8">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          What's new
        </h1>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Image Section */}
          <div className="rounded-4xl overflow-hidden shadow-md col-span-12 md:col-span-7">
            <img src={poultry} alt="Imbeju Story" className="w-full" />
            <div className="p-8">
              <h3 className="text-sm font-bold uppercase text-black mb-4">
                CRDB Bank in News,Customer Stories,Supporting Communities
              </h3>
              <h2 className="text-2xl font-bold text-green-800">
                From Small Farm to Big Success: Shantale’s Imbeju Story
              </h2>
              <a href="#" className="text-green-500 mt-4 flex">
                Continue Reading
                <img src={arrowRight} alt="continue Reading" className="ms-2" />
              </a>
            </div>
          </div>

          {/* Right Cards Section */}
          <div className="col-span-12 md:col-span-5">
            <Card
              title="More feedback from you online"
              subtitle="Customer Stories"
              description="The program is focused on empowering women and youth economically by providing them with capital and support to develop..."
            />
            <Card
              title="CRDB Bank Secures TZS 790 Billion investment in Mahenge Graphite Mining Project"
              subtitle=""
              description=""
            />
            <Card
              title="CRDB Bank partners for IMBEJU Youth Startup Empowerment Program"
              subtitle="Beyond Banking"
              description="CRDB Bank supports economic inclusion by partnering with ICTC and COSTECH for the ‘IMBEJU’ program. The program empowers women..."
            />
          </div>
        </div>
      </div>

      <Footer />

      {/* Cookie Notice */}

      {showCookieNotice && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex-1 text-sm mb-4 sm:mb-0">
              <p>
                We use cookies to enhance your experience on our website. By
                continuing to use this website, you consent to the use of
                cookies in accordance with our Privacy Policy.{" "}
                <a
                  href="#"
                  className="text-green-400 hover:text-green-300 underline"
                >
                  Our privacy policy
                </a>
              </p>
            </div>
            <button
              onClick={() => setShowCookieNotice(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <Chatbot />
    </div>
  );
}

export default CRDBBankClone;
