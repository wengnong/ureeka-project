import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projects() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <div className="text-justify p-20 w-[500px]">
                <h1>These are my current projects.</h1><br />

                <div className="flex flex-col gap-4">
                    <div className="border-1 p-4">
                        <p><a className="text-blue-500 underline" href="#" target="_blank">sleepify</a>. a sleep disorder detector using self input. <span className="text-gray-500">[react | javascript | tailwindcss | flask | jupyter | axios]</span></p>
                    </div>
                    <div className="border-1 p-4">
                        <p><a className="text-blue-500 underline" href="#" target="_blank">foodfund</a>. a money donation platform aimed at supporting food funding initiatives. <span className="text-gray-500">[react | typescript | tailwindcss | asp.net | postgresql | docker | heroku]</span></p>
                    </div>
                    <div className="border-1 p-4">
                        <p><a className="text-blue-500 underline" href="#" target="_blank">librar-e</a>. a digital library platform designed to streamline the process of borrowing and accessing e-books efficiently. <span className="text-gray-500">[next.js | typescript | supabase | auth.js | pdf.js]</span></p>
                    </div>
                    <div className="border-1 p-4">
                        <p><a className="text-blue-500 underline" href="#" target="_blank">passcheq</a>. a web-based password management tool designed to help users create and evaluate strong, secure passwords. <span className="text-gray-500">[react | typescript | tailwindcss | flask | axios | localstorage]</span></p>
                    </div>
                </div>
            </div>

            <Button variant="ghost"><Link href="/">go back to home page</Link></Button>
        </div>
    )
}