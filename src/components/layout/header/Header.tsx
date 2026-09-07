"use client"
import { useState, useEffect } from "react"

import LogoH from "./sections/logo/LogoH";
import NavigationH from "./sections/navigation/NavigationH";
import ButtonsH from "./sections/buttons/ButtonsH";
import SidebarH from "./sections/Sidebar/SidebarH";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };

    }, []);

    return (
        <header className={`fixed top-0 w-full h-20 z-50 transition-all duration-300 ${scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
            }`}>
            <section className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 md:px-10 lg:px-16">
                <div className="flex items-center gap-6">
                    <LogoH />

                    <div className="hidden md:flex"><NavigationH /></div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex"><ButtonsH /></div>
                    <div className="md:hidden"><SidebarH /></div>
                </div>
            </section>
        </header>
    )
}
