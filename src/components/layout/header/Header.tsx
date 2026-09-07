"use client";

import { useEffect, useState } from "react";

import LogoH from "./sections/logo/LogoH";
import NavigationH from "./sections/navigation/NavigationH";
import ButtonsH from "./sections/buttons/ButtonsH";
import SidebarH from "./sections/Sidebar/SidebarH";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 ${scrolled ? "border-b border-border/40 bg-background-soft/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl" : "bg-transparent"}`}>
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="flex items-center gap-8">
                    <LogoH />

                    <div className="hidden lg:block">
                        <NavigationH />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden lg:block">
                        <ButtonsH />
                    </div>

                    <div className="lg:hidden">
                        <SidebarH />
                    </div>
                </div>
            </div>
        </header>
    );
}