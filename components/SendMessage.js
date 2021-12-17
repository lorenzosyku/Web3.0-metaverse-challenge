import { useState } from "react";
import { useMoralis } from "react-moralis"


function SendMessage({ endOfMessangesRef }) {
  const {user, Moralis} = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if(!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages.save({
      message: message,
      username: user.getUsername(),
      ethAddress: user.get("ethAddress"),
    })
    .then(
      (message)=>{

      },
      (error)=>{
        console.log(error.message)
      }
    );

    endOfMessangesRef.current.scrollIntoView({ behavior: "smooth"});
    setMessage("")
  }
  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input 
        type="text" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}...`}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
      />
      
      <button 
        className="font-bold text-pink-500"
        type="submit"
        onClick={sendMessage}
      >
        send</button>
    </form>
  )
}

export default SendMessage
