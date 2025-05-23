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

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="flex justify-center items-center">
                <h1 className="text-xl text-center">Weather in <br /> <span className="text-4xl text-blue-500 font-semibold uppercase">{post.location.name}</span></h1>
                
            </div>
        </div>
    )
}