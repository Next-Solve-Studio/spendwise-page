import Hero from "./sections/Hero"
import Services from "./sections/Services"

export default function HomeMain() {
    return (
        <main className='flex items-center justify-center flex-col'>
            <Hero />
            <Services />
        </main>
    )
}