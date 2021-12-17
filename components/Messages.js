import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

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

 
  return (
    <div className="pb-56">
      <div className="my-5 ">
        <ByMoralis 
          variant="dark"
          style={{ marginLeft:'auto', marginRight:'auto'}}/>
      </div>
      <div className="space-y-10 p-4">
        {data.map(message => (
          <Message key={message.id} message={message}/>
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessangesRef={endOfMessangesRef}/>
      </div>
      <div ref={endOfMessangesRef} className="text-center text-gray-400 mt-5">
        <p>You are uptodate {user.getUsername()}!</p>
      </div>
    </div>
  )
}

export default Messages
