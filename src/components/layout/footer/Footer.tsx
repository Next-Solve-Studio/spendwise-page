"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Headphones, ShieldCheck } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

type LinkItem = {
    id: string;
    label: string;
    href: string;
};

type SocialItem = LinkItem & {
    icon: React.ElementType;
};

export default function Footer() {
    const productLinks: LinkItem[] = [
        { id: "product-1", label: "Sobre o Spendwise", href: "#sobre" },
        { id: "product-2", label: "Recursos", href: "#recursos" },
        { id: "product-3", label: "Como Funciona", href: "#como-funciona" },
        { id: "product-4", label: "Benefícios", href: "#beneficios" },
    ];

    const supportLinks: LinkItem[] = [
        { id: "support-1", label: "Suporte", href: "/suporte" },
        { id: "support-2", label: "Fale Conosco", href: "/contato" },
        { id: "support-3", label: "Política de Privacidade", href: "/policy" },
        { id: "support-4", label: "Termos de Uso", href: "/terms" },
    ];

    const socialNetwork: SocialItem[] = [
        { id: "social-1", label: "Instagram", href: "#", icon: FaInstagram },
        { id: "social-2", label: "LinkedIn", href: "#", icon: FaLinkedinIn },
        { id: "social-3", label: "YouTube", href: "#", icon: FaYoutube },
        { id: "social-4", label: "Facebook", href: "#", icon: FaFacebookF },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-border/30 bg-background-soft">
            <div className="pointer-events-none absolute -left-32 bottom-0 size-90 rounded-full bg-primary/10 blur-[130px]" />
            <div className="pointer-events-none absolute -right-32 top-0 size-80 rounded-full bg-accent/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20 xl:px-12">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
                    <div className="max-w-sm">
                        <Link href="/" aria-label="Spendwise - Página inicial" className="group inline-flex items-center gap-2.5">
                            <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary transition-all duration-300 group-hover:border-borderbright group-hover:shadow-[0_0_20px_var(--color-glow)]">
                                <ArrowUpRight size={20} strokeWidth={2.4} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>

                            <span className="text-2xl font-semibold tracking-[-0.045em] text-foreground">
                                Spend<span className="text-primary">wise</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-foregroundsecondary">
                            Controle suas receitas, despesas e resultados em um só lugar. Mais clareza para suas finanças, seja no uso pessoal ou nos seus negócios.
                        </p>

                        <Link href="/test" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primarylight">
                            Comece agora
                            <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    <FooterColumn title="Produto">
                        {productLinks.map((item) => (
                            <FooterLink key={item.id} href={item.href}>
                                {item.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Suporte">
                        {supportLinks.map((item) => (
                            <FooterLink key={item.id} href={item.href}>
                                {item.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Redes Sociais">
                        {socialNetwork.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link key={item.id} href={item.href} className="group flex items-center gap-2.5 text-sm text-foregroundsecondary transition-all duration-300 hover:text-primary">
                                    <span className="flex size-7 items-center justify-center rounded-lg border border-border/40 bg-card text-muted transition-all duration-300 group-hover:border-borderbright group-hover:bg-primary/10 group-hover:text-primary">
                                        <Icon size={13} strokeWidth={2} />
                                    </span>

                                    {item.label}
                                </Link>
                            );
                        })}
                    </FooterColumn>
                </div>

                <div className="mt-12 border-t border-border/30 pt-6 lg:mt-16">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                            <span className="flex items-center gap-2 text-xs text-foregroundsecondary">
                                <ShieldCheck size={14} className="text-primary" />
                                Segurança e privacidade
                            </span>

                            <span className="flex items-center gap-2 text-xs text-foregroundsecondary">
                                <Headphones size={14} className="text-primary" />
                                Suporte ao usuário
                            </span>

                            <span className="flex items-center gap-2 text-xs text-foregroundsecondary">
                                <Mail size={14} className="text-primary" />
                                contato@spendwise.com
                            </span>
                        </div>

                        <p className="text-xs text-muted">
                            © 2026 Spendwise. Todos os direitos reservados | Nextsolve.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children, }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-w-36 flex-col gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {title}
            </h3>

            <div className="flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
}

function FooterLink({ href, children, }: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link href={href} className="w-fit text-sm text-foregroundsecondary transition-all duration-300 hover:translate-x-0.5 hover:text-primary">
            {children}
        </Link>
    );
}