import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useMoralis } from "react-moralis";
import ChangeUsername from "./ChangeUsername";

function Dropmenu({logoutOnPress}) {
  const { user, logout } = useMoralis();


  
  return (
    <div>
      <div className="relative-group cursor-pointer absolute top-5 right-5 hover:opacity-75">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 to-purple-300 rounded-lg blur-xl opacity-75 hover:cursor-pointer group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

        <Menu as="div" className="relative">
          {({open}) => (
            <Fragment>
          <Menu.Button className=" z-50 bg-transparent group-hover:text-purple-300 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Menu.Button>
            <Transition 
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            <Menu.Items 
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divede-gray-100 focus:outline-none"
              static
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active })=>(
                    <a href="#" className={`flex items-center px-4 py-2 text-sm 
                    
                    ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                    
                     `}>
                      <svg xmlns="http://www.w3.org/2000/svg" class={`h-5 w-5 mr-3 
                      ${active ? "text-white" : "text-gray-400"}
                       `} aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                      </svg>
                      Swap Crypto
                    </a>
                  )}
                  
                </Menu.Item>
                
              </div>
              <div className="py-1">
                <ChangeUsername/>
              </div>
              <div className="py-1">
                <Menu.Item onClick={()=> logoutOnPress && logout()}>
                  {({active})=>(
                    <a href="#" className={`flex items-center px-4 py-2 text-sm

                    ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                    
                    `}>
                      <svg xmlns="http://www.w3.org/2000/svg" class={`h-5 w-5 mr-3 
                      ${active ? "text-white" : "text-gray-400"}
                       `} aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </a>
                  )}
                  
                </Menu.Item>
                
              </div>
            </Menu.Items>
            </Transition>
            </Fragment>
          )}
        {/*</div>*/}
        </Menu>
      </div>
    </div>
  )
}

export default Dropmenu
