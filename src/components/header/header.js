import React, {useState} from "react";
import data from "./data";
import Profiles from "./profiles"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 
return (
 <header className="flex flex-col justify-between">
   <div className="p-2 items-start">
     <Profiles />
   </div>
   <span className="w-full block bg-black border drop-shadow-md  border-gray-3500"></span>
   <div className="flex flex-row justify-between p-4">
  <h1 className="text-xl font-black text-white font-mono">
   Ciragane Nicole
  </h1>

  <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-gray-300"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-gray-300"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-gray-300"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
               className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
               onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[200px]">
                {data.map(({id, name, url}) => (
                  <li className="border-b border-gray-400 my-4 uppercase">
                     <a href={url} id={id}>{name}</a>
                  </li>
                ))}
            </ul>
          </div>
        </section>

  <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
   {data.map(({id, name, url}) => (
    <li className="ml-10 text-white font-semibold">
     <a href={url} id={id}>{name}</a>
     </li>
   ))}
  </ul>
  </nav>
  </div>
 </header>
)
}

export default Header;
