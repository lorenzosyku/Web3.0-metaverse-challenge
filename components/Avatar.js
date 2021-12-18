import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <div className="relative-group">
      <div className="absolute -inset-2.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <Image className="rounded-full bg-black relative cursor-pointer hover:opacity-75"
        src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}.svg`}
        layout="fill"
        onClick={()=> logoutOnPress && logout()}
      />
    </div>
    
  )
}

export default Avatar;
