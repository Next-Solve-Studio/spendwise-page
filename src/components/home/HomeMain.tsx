import Hero from "./sections/Hero"
import Services from "./sections/Services"
import TestimonialCarousel from "./sections/TestimonialCarousel"
import About from "./sections/About"
import CTA from "./sections/CTA"

export default function HomeMain() {
    return (
        <main className='flex items-center justify-center flex-col'>
            <Hero />
            <Services />
            <About />
            <TestimonialCarousel />
            <CTA />
        </main>
    )
}