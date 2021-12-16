import Image from "next/image";
import { useMoralis } from "react-moralis"

function Login() {

  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-10 w-full items-center justify-center h-4/6 space-y-4">
        {/*papafam logo */}
        <Image src="https://links.papareact.com/3pi"
          height={200}
          width={200}
          className=" object-cover rounded-full"
        />

        {/*login btn */}
        <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 animate-pulse font-bold">Login into the METAVERSE</button>
      </div>
      <div className="w-full h-screen">
        <Image src='https://links.papareact.com/55n'
          layout='fill'
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
