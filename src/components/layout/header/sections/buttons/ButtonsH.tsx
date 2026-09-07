"use client";

import Link from "next/link";
import { Headphones, ArrowUpRight, Languages } from "lucide-react";
import { toast } from "sonner";

export default function ButtonsH() {
    const btnLinks = [
        { id: 1, text: "Suporte", href: "/suporte", primary: false, icon: Headphones },
        { id: 2, text: "Teste grátis", href: "/test", primary: true, icon: ArrowUpRight },
        { id: 3, text: "English", href: "#", primary: false, icon: Languages, isDevelopment: true },
    ];

    const handleLanguageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        toast.info("Função em desenvolvimento", {
            description: "Feature under development.",
        });
    };

    return (
        <div className="hidden items-center gap-2 lg:flex">
            {btnLinks.map((button) => {
                const Icon = button.icon;

                if (button.isDevelopment) {
                    return (
                        <Link key={button.id} href={button.href} onClick={handleLanguageClick} className="group flex items-center gap-2 rounded-xl border border-border/70 bg-card px-3.5 py-2.5 text-sm font-medium text-foregroundsecondary transition-all duration-300 hover:border-borderbright hover:bg-primary/10 hover:text-foreground">
                            <Icon size={16} strokeWidth={2} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                            <span>{button.text}</span>
                        </Link>
                    );
                }

                if (button.primary) {
                    return (
                        <Link key={button.id} href={button.href} className="group flex items-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-background-soft transition-all duration-300 hover:bg-primarylight hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                            <span>{button.text}</span>
                            <Icon size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    );
                }

                return (
                    <Link key={button.id} href={button.href} className="group flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-foregroundsecondary transition-all duration-300 hover:bg-primary/10 hover:text-foreground">
                        <Icon size={16} strokeWidth={2} className="text-muted transition-colors duration-300 group-hover:text-primary" />
                        <span>{button.text}</span>
                    </Link>
                );
            })}
        </div>
    );
}