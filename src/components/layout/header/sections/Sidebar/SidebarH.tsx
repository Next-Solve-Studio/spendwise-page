"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Languages, Headphones, ChartNoAxesCombined, WalletCards, ReceiptText, LayoutDashboard } from "lucide-react";
import { toast } from "sonner";

export default function SidebarH() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sidebarRef = useRef<HTMLElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleLanguageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    toast.info("Função em desenvolvimento", {
      description: "Feature under development.",
    });
  };

  const mainLinks = [
    { id: 1, label: "Sobre", href: "#sobre" },
    { id: 2, label: "Recursos", href: "#recursos" },
    { id: 3, label: "Como Funciona", href: "#como-funciona" },
    { id: 4, label: "Benefícios", href: "#beneficios" },
  ];

  const featureLinks = [
    { id: 1, label: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
    { id: 2, label: "Receitas", href: "#receitas", icon: ChartNoAxesCombined },
    { id: 3, label: "Despesas", href: "#despesas", icon: ReceiptText },
    { id: 4, label: "Saldo", href: "#saldo", icon: WalletCards },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && event.target instanceof Node && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <button type="button" onClick={toggleMenu} aria-label="Abrir menu" aria-expanded={isOpen} className="group flex size-10 items-center justify-center rounded-xl border border-border/70 bg-card/70 text-foregroundsecondary backdrop-blur-md transition-all duration-300 hover:border-borderbright hover:bg-primary/10 hover:text-primary">
        <Menu size={19} strokeWidth={2} className="transition-transform duration-300 group-hover:scale-110" />
      </button>

      {mounted &&
        createPortal(
          <>
            <button type="button" aria-label="Fechar menu" onClick={closeMenu} className={`fixed inset-0 z-998 min-h-screen bg-background-soft/70 backdrop-blur-sm transition-all duration-300 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} />

            <aside ref={sidebarRef} className={`fixed right-0 top-0 z-999 flex h-dvh w-[88%] max-w-90 flex-col border-l border-border/60 bg-background-soft/95 shadow-[-25px_0_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex items-center justify-between border-b border-border/40 px-5 py-5">
                <Link href="/" onClick={closeMenu} className="group flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary transition-all duration-300 group-hover:border-borderbright group-hover:shadow-[0_0_20px_var(--color-glow)]">
                    <ArrowUpRight size={19} strokeWidth={2.4} />
                  </span>

                  <span className="text-xl font-semibold tracking-[-0.045em] text-foreground">
                    Spend<span className="text-primary">wise</span>
                  </span>
                </Link>

                <button type="button" onClick={closeMenu} aria-label="Fechar menu" className="flex size-9 items-center justify-center rounded-xl border border-border/50 text-foregroundsecondary transition-all duration-300 hover:border-borderbright hover:bg-primary/10 hover:text-primary">
                  <X size={17} strokeWidth={2} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="mb-6">
                  <span className="mb-3 block px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Navegação
                  </span>

                  <nav className="flex flex-col gap-1">
                    {mainLinks.map((link) => (
                      <Link key={link.id} href={link.href} onClick={closeMenu} className="group flex items-center justify-between rounded-xl border border-transparent px-3.5 py-3 text-sm font-medium text-foregroundsecondary transition-all duration-300 hover:border-border/60 hover:bg-primary/10 hover:text-foreground">
                        <span>{link.label}</span>
                        <ArrowUpRight size={15} strokeWidth={1.8} className="text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100" />
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <span className="mb-3 block px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Recursos
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {featureLinks.map((link) => {
                      const Icon = link.icon;

                      return (
                        <Link key={link.id} href={link.href} onClick={closeMenu} className="group flex flex-col gap-3 rounded-2xl border border-border/50 bg-card p-3.5 transition-all duration-300 hover:border-borderbright hover:bg-primary/10">
                          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-background-soft">
                            <Icon size={16} strokeWidth={2} />
                          </span>

                          <span className="text-xs font-medium text-foregroundsecondary transition-colors duration-300 group-hover:text-foreground">
                            {link.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="border-t border-border/40 p-4">
                <div className="flex flex-col gap-2">
                  <Link href="/test" onClick={closeMenu} className="group flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-4 py-3 text-sm font-semibold text-background-soft transition-all duration-300 hover:bg-primarylight hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                    <span>Teste grátis</span>
                    <ArrowUpRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/suporte" onClick={closeMenu} className="flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card px-3 py-2.5 text-xs font-medium text-foregroundsecondary transition-all duration-300 hover:border-borderbright hover:bg-primary/10 hover:text-foreground">
                      <Headphones size={15} className="text-primary" />
                      Suporte
                    </Link>

                    <Link href="#" onClick={handleLanguageClick} className="flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card px-3 py-2.5 text-xs font-medium text-foregroundsecondary transition-all duration-300 hover:border-borderbright hover:bg-primary/10 hover:text-foreground">
                      <Languages size={15} className="text-primary" />
                      English
                    </Link>
                  </div>
                </div>

                <div className="mt-5 border-t border-border/30 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                      Spendwise
                    </span>

                    <span className="flex items-center gap-1.5 text-[10px] text-foregroundsecondary">
                      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-glow)]" />
                      Finanças sob controle</span>
                  </div>
                </div>
              </div>
            </aside>
          </>,
          document.body
        )}
    </>
  );
}