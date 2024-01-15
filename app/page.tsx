import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { open_sans } from "./fonts";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center text-[#f0f0f0]">
        <div className="w-[90%] h-[90%] flex flex-col md:flex-row">
          <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex flex-col justify-center items-start gap-10 md:ml-[10%]">
            <h1 className={`${open_sans.className} text-7xl md:text-9xl`}>Anurag Angal</h1>
            <div className="flex justify-between text-xl md:text-2xl gap-5 font-extralight">
              <Link href="/projects" className="px-4 py-2 bg-gray-600 hover:bg-[#FB2576] rounded-sm ">Projects</Link>
              <Link href="/about" className="px-4 py-2 bg-gray-600 hover:bg-[#FB2576] rounded-sm ">About</Link>
            </div>
          </div>
          <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex flex-col md:justify-center items-stretch gap-10">
            <p className={`${open_sans.className} md:w-[75%] text-md md:text-2xl font-light`}>
              I like to build simple and functional sites.
              I&apos;m a CS enthusiast and in my free time learn about mathematics, philosophy, psychology and economics.
            </p>
            <Link href="/about" className="underline text-xl font-extralight">Read More</Link>
          </div>
        </div>
      </div >
      <div className="flex gap-5 absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <Link href="https://github.com/anuragcsangal" target="_blank">
          <FaGithub size={40} className="text-zinc-500" />
        </Link>
        <Link href="https://linkedin.com/in/anurag-angal" target="_blank">
          <FaLinkedin size={40} className="text-zinc-500" />
        </Link>
        <Link href="https://twitter.com/angal_anurag" target="_blank">
          <FaTwitter size={40} className="text-zinc-500" />
        </Link>
        <Link href="mailto:anurag.angalcs@gmail.com" target="_blank">
          <IoMdMail size={40} className="text-zinc-500" />
        </Link>
      </div>
    </>
  )
}
