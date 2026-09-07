import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LogoH() {
    return (
        <Link href="/" aria-label="Spendwise - Página inicial" className="group inline-flex w-fit items-center gap-2.5">

            <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary transition-all duration-300 group-hover:border-borderbright group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_var(--color-glow)]">
                <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>

            <span className="text-xl font-semibold tracking-[-0.045em] text-foreground transition-colors duration-300 sm:text-[22px]">
                Spend<span className="text-primary">wise</span>
            </span>
        </Link>
    );
}