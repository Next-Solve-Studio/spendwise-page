"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Sparkles, WalletCards } from "lucide-react";

export default function About() {
    const highlights = [
        { id: "highlight-1", text: "Simples de usar", icon: Sparkles },
        { id: "highlight-2", text: "Feito para pessoas e negócios", icon: WalletCards },
        { id: "highlight-3", text: "Controle com mais clareza", icon: ShieldCheck },
    ];

    return (
        <section id="sobre" className="relative overflow-hidden bg-background-soft py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="pointer-events-none absolute -left-32 top-20 size-[420px] rounded-full bg-primary/10 blur-[140px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 size-[360px] rounded-full bg-accent/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
                    <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative order-1">
                        <div className="pointer-events-none absolute inset-8 rounded-[36px] bg-primary/15 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[28px] border border-border/50 bg-card/90 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px]">
                                <Image src="/images/userHappy.png" alt="Pessoa utilizando o Spendwise" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                            </div>

                            <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-background-soft/85 px-3 py-2 backdrop-blur-xl sm:left-5 sm:top-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-primarylight sm:text-[10px]">
                                    Spendwise Experience
                                </span>
                            </div>

                            <div className="absolute bottom-4 right-4 hidden rounded-2xl border border-white/10 bg-background-soft/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                                <span className="block text-[10px] uppercase tracking-[0.14em] text-foregroundsecondary">
                                    Controle financeiro
                                </span>
                                <span className="mt-1 block text-sm font-semibold text-foreground">
                                    Simples. Claro. Eficiente.
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="order-2 max-w-xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-primary/10 px-3.5 py-2">
                            <span className="size-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-glow)]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primarylight sm:text-xs">
                                Conheça o Spendwise
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
                            Quer entender melhor como o
                            <span className="text-primary"> Spendwise pode transformar sua rotina financeira?</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-foregroundsecondary sm:text-base md:text-lg">
                            O Spendwise foi desenvolvido para pessoas e empreendedores que buscam uma forma mais simples, leve e eficiente de organizar suas finanças. Em uma única plataforma, você acompanha receitas, despesas, saldo, relatórios e indicadores com clareza e praticidade.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-foregroundsecondary sm:text-base">
                            Com uma experiência intuitiva e recursos essenciais, o aplicativo ajuda você a entender melhor seus números e tomar decisões financeiras com mais segurança no dia a dia.
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-3">
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div key={item.id} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="group rounded-2xl border border-border/50 bg-card/70 p-4 transition-all duration-300 hover:border-borderbright hover:bg-primary/10">
                                        <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-background-soft">
                                            <Icon size={17} strokeWidth={2} />
                                        </span>

                                        <span className="mt-3 block text-xs font-medium leading-5 text-foregroundsecondary transition-colors duration-300 group-hover:text-foreground sm:text-sm">
                                            {item.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <Link href="#recursos" className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-background-soft transition-all duration-300 hover:bg-primarylight hover:shadow-[0_0_28px_rgba(16,185,129,0.22)] sm:w-fit">
                            Saiba mais sobre o Spendwise
                            <ArrowUpRight size={17} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}