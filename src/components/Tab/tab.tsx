import { useState } from 'react';
import openAccountIcon from "../../assets/icons/open_account.svg";
import presentationIcon from "../../assets/icons/presentationIcon.svg"
import weighingScale from "../../assets/icons/weighingScale.svg"; 
import patternWhite from "../../assets/images/pattern-white.svg";
import handBelowHouse from "../../assets/icons/handBelowHouse.svg";
import safeIcon from "../../assets/icons/safeIcon.svg"
import pencilPaper from "../../assets/icons/PencilPaper.svg"
import creditCardIcon from "../../assets/icons/creditCardIcon.svg";
import diamondIcon from "../../assets/icons/DiamondIcon.svg"
import cashIcon from "../../assets/icons/cashIcon.svg";
import mobilePhoneIcon from "../../assets/icons/MobilePhoneIcon.svg"



interface ServiceType {
    icon: string;
    title: string;
    description: string;
}

function ServicesTabs () {
  const [activeTab, setActiveTab] = useState('ACCOUNTS');

  const tabs = [
    'ACCOUNTS',
    'INVEST',
    'BORROW',
    'INSURE',
    'TRANSACT',
    'DIASPORA'
  ];

  const tabContent = {
    ACCOUNTS: {
      services: [
        {
          icon: openAccountIcon,
          title: 'Open An Account',
          description: 'Start your banking journey with us'
        },
        {
          icon: presentationIcon,
          title: 'Standing orders',
          description: 'Automate your regular payments'
        },
        {
          icon: weighingScale,
          title: 'Compare Accounts',
          description: 'Find the right account for you'
        }
      ]
    },
    INVEST: {
      services: [
        {
          icon: openAccountIcon,
          title: 'Investment Plans',
          description: 'Grow your wealth with our investment options'
        },
        {
          icon: pencilPaper,
          title: 'Portfolio Management',
          description: 'Professional portfolio management services'
        },
        {
          icon: safeIcon,
          title: 'Fixed Deposits',
          description: 'Secure your future with fixed deposits'
        }
      ]
    },
    BORROW: {
      services: [
        {
          icon: handBelowHouse,
          title: 'Home Loans',
          description: 'Make your dream home a reality'
        },
        {
          icon: creditCardIcon,
          title: 'Personal Loans',
          description: 'Quick and easy personal financing'
        },
        {
          icon: pencilPaper,
          title: 'Business Loans',
          description: 'Fuel your business growth'
        }
      ]
    },
    INSURE: {
      services: [
        {
          icon: diamondIcon,
          title: 'Life Insurance',
          description: 'Protect your loved ones future'
        },
        {
          icon: handBelowHouse,
          title: 'Home Insurance',
          description: 'Comprehensive home protection'
        },
        {
          icon: pencilPaper,
          title: 'Health Insurance',
          description: 'Complete healthcare coverage'
        }
      ]
    },
    TRANSACT: {
      services: [
        {
          icon: cashIcon,
          title: 'Money Transfer',
          description: 'Send and receive money instantly'
        },
        {
          icon: mobilePhoneIcon,
          title: 'Mobile Banking',
          description: 'Bank on the go with our mobile app'
        },
        {
          icon: creditCardIcon,
          title: 'Bill Payments',
          description: 'Pay your bills conveniently'
        }
      ]
    },
    DIASPORA: {
      services: [
        {
          icon: diamondIcon,
          title: 'Diaspora Account',
          description: 'Special accounts for diaspora customers'
        },
        {
          icon: handBelowHouse,
          title: 'Foreign Exchange',
          description: 'Competitive exchange rates'
        }
      ]
    }
  };

  return (
    <div className='pt-5 bg-green-600'
     style={{
        backgroundImage: `url(${patternWhite}), url(${patternWhite})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center, bottom center",
        backgroundSize: "auto 25px, auto 25px",
      }}
      
      >   
      <div className=" px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Welcome! How can we help you?
          </h1>
          
          {/* Tab Navigation */}
          <div className="flex max-w-8xl justify-center gap-4 md:gap-8 mb-16 overflow-x-scroll lg:overflow-x-hidden border-b border-white mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold text-sm md:text-base transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? 'text-white border-white'
                    : 'text-green-100 border-transparent hover:text-white hover:border-green-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabContent[activeTab].services.map((service: ServiceType, index: number) => (
              <div
                key={index}
                className="bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-8 bg-opacity-20 border rounded-full text-white group-hover:bg-opacity-30 transition-all duration-300">
                    <img src={service.icon} alt={service.title} style={{width: "90px", height: "90px"}}/>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-green-100 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
  );
};

export {ServicesTabs};