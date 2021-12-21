import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Image from "next/image";
import { motion } from "framer-motion";

const MINS_DURATION = 4500;

function Messages() {
  const {user} = useMoralis();
  const endOfMessangesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt").greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
    [],
    {
      live: true,
    }
  );

  console.log(data)
  return (
    <div className="pb-56">
      <div className="hidden lg:flex justify-center margin-auto my-5 ">
        <motion.div 
          className="pr-6"
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{type: 'spring', duration: 1.2}}
        >
          <ByMoralis 
          variant="dark"
          style={{ marginLeft:'auto', marginRight:'auto'}}/>
        </motion.div>
        <motion.div 
          className="relative pl-6 h-14 w-14"
          initial={{
            opacity: 0,
            x: 100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{type: 'spring', duration: 1.5}}
        >
          <Image 
            src="https://links.papareact.com/3pi"
            layout="fill"
            objectFit='cover'
            className="rounded-full"
          />
        </motion.div>
      </div>
      <div className="space-y-10 p-4">
        {data.map(message => (
          <Message key={message.id} message={message}/>
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessangesRef={endOfMessangesRef}/>
      </div>
      <motion.div 
        ref={endOfMessangesRef} 
        className="text-center text-gray-400 mt-5"
        initial={{
          opacity: 0,
          x: 100
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{type: 'spring', duration: 1.5}}
        >
        <p>You are up-to-date {user.getUsername()}!</p>
      </motion.div>
    </div>
  )
}

export default Messages
