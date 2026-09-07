"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CTA() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="comece-agora" className="relative overflow-hidden w-full bg-white py-20 sm:py-24 lg:py-32">
            <div className="pointer-events-none absolute -left-32 top-1/2 size-100 -translate-y-1/2 rounded-full bg-primarylight/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 top-0 size-87.5 rounded-full bg-accentlight/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primarylight/30 bg-primarylight/10 px-4 py-2">
                        <Sparkles size={15} className="text-primarydark" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primarydark sm:text-xs">
                            Comece sua jornada financeira
                        </span>
                    </div>

                    <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-background-soft sm:text-4xl md:text-5xl lg:text-6xl">
                        Seu dinheiro merece
                        <span className="block text-primary"> mais clareza e controle.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base md:text-lg">
                        Dê o próximo passo para uma vida financeira mais organizada. Acompanhe suas receitas, despesas e resultados em um só lugar, com a simplicidade que você precisa para tomar decisões melhores.
                    </p>

                    <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                        <Link href="/test" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primarylight bg-primarylight px-7 py-3.5 text-sm font-semibold text-background-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accentlight hover:shadow-[0_12px_30px_rgba(52,211,153,0.2)] sm:w-auto">
                            Comece agora
                            <ArrowUpRight size={18} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>

                        <Link href="#recursos" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/20 bg-white px-7 py-3.5 text-sm font-medium text-background-soft transition-all duration-300 hover:border-primarylight/60 hover:bg-primarylight/5 sm:w-auto">
                            Conhecer os recursos
                            <ArrowUpRight size={16} className="text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                        <span className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                            <CheckCircle2 size={16} className="text-primary" />
                            Simples e intuitivo
                        </span>

                        <span className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                            <CheckCircle2 size={16} className="text-primary" />
                            Dashboards e relatórios
                        </span>

                        <span className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                            <CheckCircle2 size={16} className="text-primary" />
                            Para pessoas e negócios
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}