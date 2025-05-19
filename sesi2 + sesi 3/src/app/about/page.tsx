import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <div className="text-justify p-20 w-[500px]">
                <h1>Hi. My name is Winona Patricia Pangestu, <br /> <span className="italic">but you can call me Winona.</span></h1><br />

                <p>I am an undergraduate computer science student who is passionate about <span className="text-green-800">cybersecurity</span> and <span className="text-red-800">full-stack development</span>.</p><br />

                <p>I have experience in network security and identifying vulnerabilities. I also strive to build high-quality applications that is minimal yet functional.</p><br />

                <p>Always excited to dive into new technologies and tackle challenging problems.</p>
            </div>

            <Button variant="ghost"><Link href="/">go back to home page</Link></Button>
        </div>
    )
}