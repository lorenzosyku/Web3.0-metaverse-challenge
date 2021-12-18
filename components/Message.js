import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import TimeAgo from "timeago-react"
import { motion } from "framer-motion";


function Message({ message }) {
  const {user} = useMoralis();

  const isUserMessage = message.get('ethAddress') === user.get("ethAddress")

  return (
    <div className={`flex items-end space-x-2 relative ${
      isUserMessage && 'justify-end'
    }`}>
      <div className={`relative h-8 w-8 ${
        isUserMessage && 'order-last ml-2'
      }`}>
        <Avatar username={message.get('username')}/>
      </div>
        <motion.div
        initial={{
          opacity: 0,
          y: -15
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{type: 'spring', duration: 1.8}}
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage ? 'rounded-br-none bg-gradient-to-r from-pink-500 to-indigo-200 backdrop-filter backdrop-blur-xl bg-opacity-40 ' : "rounded-bl-none bg-gradient-to-l from-indigo-500 to-indigo-200 backdrop-filter backdrop-blur-xl bg-opacity-40"
        }`}>
          <p>{message.get('message')}</p>
        </motion.div>
        <TimeAgo 
          datetime={message.createdAt}
          className={`text-[10px] italic text-gray-400 ${
            isUserMessage && "order-first pr-1"
          }`}
        />
        <p className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300" : "text-blue-400"
        }`}>
          {message.get("username")}
        </p>
    </div>
  )
}

export default Message
