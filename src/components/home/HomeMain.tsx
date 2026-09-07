import Hero from "./sections/Hero"
import Services from "./sections/Services"
import TestimonialCarousel from "./sections/TestimonialCarousel"
import About from "./sections/About"

export default function HomeMain() {
    return (
        <main className='flex items-center justify-center flex-col'>
            <Hero />
            <Services />
            <About />
            <TestimonialCarousel />
        </main>
    )
}