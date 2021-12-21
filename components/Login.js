import Image from "next/image";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion"

function Login() {

  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-10 w-full items-center justify-center h-4/6 space-y-12">

        <motion.div 
          className="relative group"
          initial={{
            opacity: 0,
            y: -100
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{type: 'spring', duration: 2.2}}
        >
          <div className="absolute -inset-9 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button onClick={authenticate} className="bg-black relative rounded-lg p-5 font-bold text-indigo-400 group-hover:text-purple-300 transition duration-200">Login with Metamask</button>
        </motion.div>
        
      </div>
      <div className="w-full h-screen">
        <Image src={'/redblue.jpg'}
          layout='fill'
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
