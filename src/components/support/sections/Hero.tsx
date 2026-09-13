"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Headphones, MessageCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 md:px-8 lg:px-10 lg:pb-28 lg:pt-40 xl:px-12">
            <div className="pointer-events-none absolute left-1/2 top-20 size-105 -translate-x-1/2 rounded-full bg-primarylight/12 blur-[130px] sm:size-130" />
            <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-accentlight/10 blur-[120px]" />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primarylight/30 bg-primarylight/10 px-4 py-2">
                    <Headphones size={15} className="text-primary" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primarydark sm:text-xs">
                        Central de suporte
                    </span>
                </motion.div>

                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-background-soft sm:text-5xl md:text-6xl lg:text-7xl">
                    Precisa de ajuda com o
                    <span className="text-primary"> Spendwise?</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base md:text-lg">
                    Conte com nosso suporte para tirar dúvidas, resolver problemas e aproveitar melhor todos os recursos do aplicativo. Estamos aqui para tornar sua experiência com o Spendwise mais simples e tranquila.
                </p>

                <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                    <Link href="#suporte" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-background-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primarylight hover:shadow-[0_12px_30px_rgba(16,185,129,0.2)] sm:w-auto">
                        Falar com o suporte
                        <MessageCircle size={17} strokeWidth={2.2} />
                    </Link>

                    <Link href="#duvidas" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/20 bg-white px-6 py-3.5 text-sm font-medium text-background-soft transition-all duration-300 hover:border-primarylight/60 hover:bg-primarylight/5 sm:w-auto">
                        Ver dúvidas frequentes
                        <ArrowUpRight size={16} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                    <span className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                        <ShieldCheck size={16} className="text-primary" />
                        Atendimento seguro
                    </span>

                    <span className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                        <Headphones size={16} className="text-primary" />
                        Suporte especializado
                    </span>

                    <span className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                        <MessageCircle size={16} className="text-primary" />
                        Respostas rápidas
                    </span>
                </div>
            </motion.div>
        </section>
    );
}