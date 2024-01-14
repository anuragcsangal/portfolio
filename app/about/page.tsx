import Link from "next/link"
type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-9xl px-1">ABOUT</h1>
      <Link href="/" className="fixed right-0 top-[5%] text-4xl px-2 underline font-extralight">HOME</Link>
      <div></div>
    </div>
  )
}

export default page
