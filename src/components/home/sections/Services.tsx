"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Services() {
    const services = [
        { id: 1, text: "Controle financeiro semanal, mensal e anual" },
        { id: 2, text: "Dashboards e relatórios personalizados" },
        { id: 3, text: "Integração com bancos online" },
        { id: 4, text: "Acompanhamento de investimentos" },
    ];

    return (
        <section id="recursos" className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="pointer-events-none absolute -left-32 top-24 size-105 rounded-full bg-primary/10 blur-[140px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 size-95 rounded-full bg-accent/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
                    
                    <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative order-1 w-full">
                        <div className="pointer-events-none absolute inset-6 rounded-[36px] bg-primary/15 blur-3xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:rounded-[28px]">
                            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[18px] bg-background-soft sm:rounded-[22px]">
                                <Image src="/images/Spendwisehome.png" alt="Dashboard financeiro do Spendwise" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            </div>

                            <div className="absolute left-4 top-4 z-20 rounded-xl border border-white/10 bg-background-soft/85 px-3 py-2 backdrop-blur-xl sm:left-5 sm:top-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-primarylight sm:text-[10px]">
                                    Spendwise Dashboard
                                </span>
                            </div>

                            <div className="absolute bottom-4 right-4 z-20 hidden rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:block">
                                <span className="block text-[10px] uppercase tracking-[0.14em] text-muted">
                                    Visão financeira
                                </span>

                                <span className="mt-1 block text-sm font-semibold text-background-soft">
                                    Tudo em um só lugar
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="order-2 max-w-xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/30 bg-primary/10 px-3.5 py-2">
                            <Sparkles size={15} className="text-primary" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primarydark sm:text-xs">
                                Organização financeira simplificada
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-background-soft sm:text-4xl md:text-5xl">
                            Problemas com organização financeira?
                            <span className="text-primary"> O Spendwise simplifica.</span>
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base md:text-lg">
                            Centralize suas movimentações, acompanhe resultados e visualize seus dados financeiros de forma simples, clara e inteligente.
                        </p>

                        <ul className="mt-7 flex flex-col gap-3 sm:mt-8">
                            {services.map((item, index) => (
                                <motion.li key={item.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border/40 hover:shadow-md">
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </span>

                                    <span className="text-sm font-medium text-background-soft sm:text-[15px]">
                                        {item.text}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        <Link href="#dashboard" className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-background-soft transition-all duration-300 hover:bg-primarylight hover:shadow-[0_0_28px_rgba(16,185,129,0.2)] sm:w-fit">
                            Conhecer os recursos
                            <ArrowUpRight size={17} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}   