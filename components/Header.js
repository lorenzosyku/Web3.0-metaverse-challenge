import { motion } from "framer-motion";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import Dropmenu from "./Dropmenu";



function Header() {
  const { user, data} = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          {/**/}
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress/>
          </div>

          <motion.h1
           className="text-3xl"
           initial={{
            opacity: 0,
            y: -100
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{type: 'spring', duration: 1.2}}
          >Username:</motion.h1>
          <motion.h2 
            className="text-5xl font-bold truncate"
            initial={{
              opacity: 0,
              y: -100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{type: 'spring', duration: 2.3}}
          >{user.getUsername()}</motion.h2>
          <motion.h2 className="font-bold truncate"
            initial={{
              opacity: 0,
              y: -100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{type: 'spring', duration: 2.3}}
          >
            Public Wallet Address:
            {user.get('ethAddress')}

          </motion.h2>
          <Dropmenu logoutOnPress/>
          
        </div>
      </div>
    </div>
  )
}

export default Header
