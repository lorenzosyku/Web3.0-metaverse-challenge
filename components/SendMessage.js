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
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 relative-group">
      <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-700 to-cyan-900 rounded-lg blur-xl opacity-75 hover:cursor-pointer group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <input 
        type="text" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}...`}
        className=" relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
      />
      
      <button 
        className="relative font-bold text-pink-600"
        type="submit"
        onClick={sendMessage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </form>
  )
}

export default SendMessage
