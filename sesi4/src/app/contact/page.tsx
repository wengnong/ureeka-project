import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <div className="text-justify p-20 w-[500px] flex flex-col justify-center items-center">
                <h1>You can contact me through the links below.</h1><br />

                <div className="w-full flex justify-between mb-6">
                    <Button variant="link"><a href="https://github.com/wengnong" target="_blank">github</a></Button>
                    <Button variant="link"><a href="https://www.instagram.com/winonaptricia" target="_blank">instagram</a></Button>
                    <Button variant="link"><a href="https://www.linkedin.com/in/winonapp/" target="_blank">linkedin</a></Button>
                </div>

                <div className="flex flex-row gap-1">
                    <span>and here&apos;s my email</span><span className="text-gray-700">(not a link)</span>
                </div>
                <p className="text-xs text-gray-500">winonapkuliah@gmail.com</p>
            </div>

            <Button variant="ghost"><Link href="/">go back to home page</Link></Button>
        </div>
    )
}