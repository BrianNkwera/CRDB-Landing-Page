import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tz from "../../assets/images/tz.png";
import { Dropdown } from "../Dropdown/Dropdown";

function TopNav() {
  return (
    <div className="bg-green-900 text-white text-sm px-4 hidden md:block">
      <div
        className="max-w-8xl mx-auto flex justify-end items-center font-semibold
      text-xs"
      >
        <div className="flex">
          <a
            href="#"
            className="hover:text-green-400 transition-colors border-x px-6  py-2"
          >
            INTERNET BANKING
          </a>
          <a
            href="#"
            className="hover:text-green-200 transition-colors border-x px-6  py-2"
          >
            FORMS AND GUIDES
          </a>
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="hover:text-green-200 transition-colors border-x px-6  py-2"
            >
              GET HELP
              <FontAwesomeIcon icon="caret-down" className="ms-2" />
            </a>
          </div>
          <div className="flex items-center space-x-6 border-x px-6 py-2">
            <div className="flex items-center">
              <img
                src={tz}
                alt="Tanzania"
                className="object-cover"
                width={20}
                height={20}
              />
              <FontAwesomeIcon icon="caret-down" className="ms-2" />
            </div>
            <span className="text-slate-500">|</span>
            <div className="flex items-center space-x-1">
              <span>EN</span>
              <Dropdown />
              {/* <ChevronRight className="h-3 w-3" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TopNav };
