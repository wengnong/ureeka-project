import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl leading-none">Hello, I&apos;m Winona.</h1>
          <p className="text-sm leading-none">This is my portfolio.</p>
        </div>

        <ul className="flex flex-row gap-8 text-gray-600">
          <li className="hover:text-gray-300 transition-all duration-300"><Link href='about'>about</Link></li>
          <li className="hover:text-gray-300 transition-all duration-300"><Link href='skills'>skills</Link></li>
          <li className="hover:text-gray-300 transition-all duration-300"><Link href='projects'>projects</Link></li>
          <li className="hover:text-gray-300 transition-all duration-300"><Link href='contact'>contact</Link></li>
        </ul>

        <p className="hover:text-blue-300 transition-all duration-300"><Link href='weather'>check the weather here!</Link></p>
    </div>
  );
}
