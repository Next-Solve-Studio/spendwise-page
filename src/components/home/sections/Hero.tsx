import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-background-soft pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-accent/5 blur-[120px]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 xl:px-12">
                <div className="max-w-2xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-primary/10 px-3.5 py-2">
                        <span className="size-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-glow)]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primarylight">
                            Controle financeiro inteligente
                        </span>
                    </div>

                    <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                        Suas finanças,
                        <span className="text-primary"> sob controle.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-foregroundsecondary sm:text-lg">
                        Acompanhe receitas, despesas, saldo e desempenho financeiro em um só lugar. Com o Spendwise, você entende para onde seu dinheiro está indo por meio de dashboards claros e relatórios intuitivos.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link href="#recursos" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-background-soft transition-all duration-300 hover:bg-primarylight hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                            Conhecer o Spendwise
                            <ArrowUpRight size={17} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>

                        <Link href="#dashboard" className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card px-5 py-3 text-sm font-medium text-foregroundsecondary transition-all duration-300 hover:border-borderbright hover:bg-primary/10 hover:text-foreground">
                            Ver dashboard
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                        <div className="flex items-center gap-2 text-sm text-foregroundsecondary">
                            <CheckCircle2 size={16} className="text-primary" />
                            Receitas e despesas
                        </div>

                        <div className="flex items-center gap-2 text-sm text-foregroundsecondary">
                            <CheckCircle2 size={16} className="text-primary" />
                            Relatórios completos
                        </div>

                        <div className="flex items-center gap-2 text-sm text-foregroundsecondary">
                            <CheckCircle2 size={16} className="text-primary" />
                            Visão mensal e anual
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                    <div className="absolute inset-0 -z-10 rounded-4xl bg-primary/10 blur-3xl" />

                    <div className="relative w-full max-w-155 rounded-[28px] border border-border/60 bg-card/80 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                        <div className="rounded-[22px] border border-border/40 bg-background-soft/80 p-2">
                            <Image
                                width={1200}
                                height={800}
                                priority
                                alt="Dashboard do aplicativo Spendwise"
                                src="/images/services.png"
                                className="h-auto w-full rounded-[18px] object-cover"
                            />
                        </div>

                        <div className="absolute -left-4 top-8 hidden rounded-2xl border border-border/60 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                            <span className="block text-[10px] uppercase tracking-[0.16em] text-foregroundsecondary">
                                Saldo atual
                            </span>
                            <strong className="mt-1 block text-lg font-semibold text-primary">
                                + R$ 8.420
                            </strong>
                        </div>

                        <div className="absolute -bottom-5 right-4 hidden rounded-2xl border border-border/60 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                            <span className="block text-[10px] uppercase tracking-[0.16em] text-foregroundsecondary">
                                Despesas do mês
                            </span>
                            <strong className="mt-1 block text-lg font-semibold text-foreground">
                                R$ 3.180
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}