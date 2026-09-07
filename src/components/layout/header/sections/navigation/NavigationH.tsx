import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavigationH() {
    const navLinks = [
        { id: 1, text: "Sobre", href: "#sobre" },
        {
            id: 2,
            text: "Recursos",
            href: "#recursos",
            drop: [
                { id: 1, text: "Controle de Receitas", href: "#receitas" },
                { id: 2, text: "Controle de Despesas", href: "#despesas" },
                { id: 3, text: "Dashboard Financeiro", href: "#dashboard" },
                { id: 4, text: "Relatórios", href: "#relatorios" },
                { id: 5, text: "Categorias Financeiras", href: "#categorias" },
            ],
        },
        { id: 3, text: "Como Funciona", href: "#como-funciona" },
        { id: 4, text: "Benefícios", href: "#beneficios" },
    ];

    return (
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 overflow-visible lg:flex">
            {navLinks.map((link) => {
                const hasDropdown = link.drop && link.drop.length > 0;

                return (
                    <div key={link.id} className="group relative overflow-visible">
                        <Link href={link.href} className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-foregroundsecondary transition-all duration-300 hover:bg-primary/10 hover:text-foreground">
                            <span>{link.text}</span>

                            {hasDropdown && (
                                <ChevronDown size={15} strokeWidth={2} className="text-muted transition-all duration-300 group-hover:rotate-180 group-hover:text-primary" />
                            )}
                        </Link>

                        {hasDropdown && (
                            <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[320px] min-w-[320px] max-w-none -translate-x-1/2 -translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="w-full overflow-visible rounded-2xl border border-border bg-card/95 p-2 shadow-2xl shadow-background-soft/50 backdrop-blur-xl">
                                    <div className="mb-1 px-3 pb-2 pt-2">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                            Recursos
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        {link.drop?.map((dropItem) => (
                                            <Link key={dropItem.id} href={dropItem.href} className="group/item flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm text-foregroundsecondary transition-all duration-300 hover:bg-primary/10 hover:text-foreground">
                                                <span className="whitespace-nowrap">
                                                    {dropItem.text}
                                                </span>

                                                <span className="size-1.5 shrink-0 rounded-full bg-border transition-all duration-300 group-hover/item:bg-primary group-hover/item:shadow-[0_0_10px_var(--color-glow)]" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}