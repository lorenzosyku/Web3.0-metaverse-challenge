import { useMoralis } from "react-moralis";
import { Menu } from "@headlessui/react";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if(!username) return;

    setUserData({
      username,
    })
  };

  return (
    <div 
      disabled={isUserUpdating} 
      onClick={setUserName}
    > 
      
        <Menu.Item>
          {({active})=>(
            <a href="#" className={`flex items-center px-4 py-2 text-sm       
            ${active ? "bg-indigo-500 text-white" : "text-gray-700"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" class={`h-5 w-5 mr-3 
                ${active ? "text-white" : "text-gray-400"}`} aria-hidden="true" fill="none" viewBox="0 0 24 24"stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 000-7-7z" />
              </svg>
              Username
              </a>
          )}
                  
        </Menu.Item>
     
    </div>
  )
}

export default ChangeUsername
