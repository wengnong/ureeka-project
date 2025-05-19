import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Skills() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <div className="text-justify p-20 w-[500px]">
                <h1>Here are what I am most proficient in.</h1><br />
                <hr />
                <br />
                <p>
                    c | c++ | java | python | go | javascript | typescript | html | css | powershell | git | cisco
                </p>
                <br />
                <p  className="text-gray-400">
                    react | next.js | tailwindcss | postgresql | mysql | anaconda | postman | figma | vercel | github
                </p>
                <br />
                <p>
                    kali | wireshark | burpsuite | metasploit | nmap | sqlmap | bash
                </p>
                <br />
                <hr />
            </div>

            <Button variant="ghost"><Link href="/">go back to home page</Link></Button>
        </div>
    )
}