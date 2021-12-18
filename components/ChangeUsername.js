import { useMoralis } from "react-moralis"

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
  }
  return (
    <div className="relative-group text-sm absolute top-5 right-5">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 hover:cursor-pointer group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button 
        disabled={isUserUpdating} 
        className="relative rounded-lg p-2 text-fuchsia-200 bg-transparent group-hover:text-purple-300 transition duration-200 "
        onClick={setUserName}
      >
      Change your username</button>
    </div>
  )
}

export default ChangeUsername
