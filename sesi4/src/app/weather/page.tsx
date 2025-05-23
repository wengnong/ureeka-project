import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Post {
    request: {
        type: string,
        query: string,
        language: string,
        unit: string,
    },
    location: {
        name: string,
        country: string,
        region: string,
        lat: string,
        lon: string,
        timezone_id: string,
        localtime: string,
        localtime_epoch: number,
        utc_offset: string,
    },
    current: {
        observation_time: string,
        temperature: number,
        weather_code: number,
        weather_icons: [
            string,
        ],
        weather_descriptions: [
            string,
        ]
        astro: {
            sunrise: string,
            sunset: string,
            moonrise: string,
            moonset: string,
            moon_phase: string,
            moon_illumination: number,
        },
        air_quality: {
            co: string,
            no2: string,
            o3: string,
            so2: string,
            pm2_5: string,
            pm10: string,
            "us-epa-index": string,
            "gb-defra-index": string,
        },
        wind_speed: number,
        wind_degree: number,
        wind_dir: string,
        pressure: number,
        precip: number,
        humidity: number,
        cloudcover: number,
        feelslike: number,
        uv_index: number,
        visibility: number,
        is_day: string,
    },
}

export default async function WeatherPage() {
    const data = await fetch('https://api.weatherstack.com/current?access_key=246391101c588568904ba23608394ab6&query=Tangerang')
    const post: Post = await data.json()

    if (!data.ok) {
        return { message: "Failed to create post. "}
    }

    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center border-2 px-12 py-18 border-white text-center">
                <h1 className="text-xl">Weather in <br /> <span className="text-4xl text-blue-500 font-semibold uppercase">{post.location.name}</span></h1>
                <p className="text-blue-300">{post.location.region}, {post.location.country}</p>

                <Image 
                    src={post.current.weather_icons[0]}
                    width={100}
                    height={100}
                    alt="Weather Icon"
                    className="rounded-full my-4"
                />
                <p className="text-md uppercase font-bold text-blue-200">{post.current.weather_descriptions}</p>

                <p className="text-xs">Local Time and Timezone <br /> {post.location.localtime} <br /> {post.location.timezone_id}</p>

                <p className="text-4xl my-4 font-bold text-blue-200">{post.current.temperature}&deg;C</p>
                <p className="uppercase font-light text-sm">Humidity {post.current.humidity}</p>

                <div className="mt-6 text-sm">
                    <div className="flex flex-row gap-20 justify-between">
                        <span>Latitude</span>
                        <span>{post.location.lat}</span>
                    </div>
                    <div className="flex flex-row gap-20 justify-between">
                        <span>Longitude</span>
                        <span>{post.location.lon}</span>
                    </div>
                    <br />
                    <div className="flex flex-row gap-20 justify-between">
                        <span>Sunrise</span>
                        <span>{post.current.astro.sunrise}</span>
                    </div>
                    <div className="flex flex-row gap-20 justify-between">
                        <span>Sunset</span>
                        <span>{post.current.astro.sunset}</span>
                    </div>
                    <div className="flex flex-row gap-20 justify-between">
                        <span>Moonrise</span>
                        <span>{post.current.astro.moonrise}</span>
                    </div>
                    <div className="flex flex-row gap-20 justify-between">
                        <span>Moonset</span>
                        <span>{post.current.astro.moonset}</span>
                    </div>
                </div>
            </div>

            <Button className="mt-10" variant="ghost"><Link href="/">go back to home page</Link></Button>
        </div>
    )
}