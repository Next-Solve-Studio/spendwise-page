"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, CircleHelp, ShieldCheck } from "lucide-react";

export default function FAQ() {
    const [openItem, setOpenItem] = useState<string | null>("seguranca-dados");

    const faqItems = [
        {
            id: "seguranca-dados",
            question: "Meus dados estão seguros?",
            answer:
                "Sim. O Spendwise utiliza boas práticas de segurança para proteger suas informações e garantir uma experiência mais confiável durante o uso da plataforma.",
        },
        {
            id: "usar-celular",
            question: "Posso usar o Spendwise pelo celular?",
            answer:
                "Sim. O Spendwise foi desenvolvido com uma interface responsiva, permitindo o uso em computadores, tablets e smartphones com conforto e praticidade.",
        },
        {
            id: "suporte",
            question: "O Spendwise oferece suporte?",
            answer:
                "Sim. Nossa equipe está disponível para ajudar com dúvidas, dificuldades de uso e orientações relacionadas aos recursos do aplicativo.",
        },
    ];

    const handleToggle = (id: string) => {
        setOpenItem((current) => (current === id ? null : id));
    };

    return (
        <section
            id="duvidas"
            className="relative flex min-h-screen w-full items-center overflow-hidden bg-white py-16 sm:py-20 md:py-24"
        >
            <div className="pointer-events-none absolute -left-24 top-20 size-[340px] rounded-full bg-primarylight/10 blur-[130px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 size-[320px] rounded-full bg-accentlight/10 blur-[120px]" />

            <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primarylight/30 bg-primarylight/10 px-3.5 py-2">
                        <CircleHelp size={15} className="text-primary" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primarydark sm:text-xs">
                            Dúvidas frequentes
                        </span>
                    </div>

                    <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-background-soft sm:text-4xl md:text-5xl">
                        Encontre respostas de forma
                        <span className="text-primary"> rápida e simples.</span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                        Reunimos algumas das dúvidas mais comuns para ajudar você a entender melhor o funcionamento do Spendwise.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="mt-10 flex min-h-[360px] flex-col gap-3 sm:mt-12"
                >
                    {faqItems.map((item) => {
                        const isOpen = openItem === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                transition={{
                                    layout: {
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    },
                                }}
                                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${isOpen
                                        ? "min-h-[150px] border-primarylight/50 shadow-[0_12px_35px_rgba(16,185,129,0.08)]"
                                        : "h-[72px] border-black/5 hover:border-primarylight/30"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={isOpen}
                                    className="group flex h-[72px] w-full items-center justify-between gap-5 px-5 text-left sm:px-6"
                                >
                                    <span className="flex items-center gap-3">
                                        <span
                                            className={`flex size-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen
                                                    ? "bg-primary text-background-soft"
                                                    : "bg-primary/10 text-primary group-hover:bg-primary/15"
                                                }`}
                                        >
                                            <ShieldCheck size={17} strokeWidth={2} />
                                        </span>

                                        <span className="text-sm font-semibold text-background-soft sm:text-base">
                                            {item.question}
                                        </span>
                                    </span>

                                    <span
                                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${isOpen
                                                ? "rotate-180 border-primarylight/40 bg-primarylight/10 text-primary"
                                                : "border-black/5 text-muted group-hover:border-primarylight/40 group-hover:text-primary"
                                            }`}
                                    >
                                        <ChevronDown size={17} strokeWidth={2} />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key={`${item.id}-answer`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="px-5 pb-5 sm:px-6"
                                        >
                                            <div className="ml-12 border-l border-primarylight/30 pl-4">
                                                <p className="text-sm leading-7 text-muted sm:text-[15px]">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}