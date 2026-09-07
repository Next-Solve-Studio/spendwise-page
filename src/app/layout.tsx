import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/header/Header";

export const metadata: Metadata = {
  title: "Spendwise | Controle Financeiro Inteligente",

  description:
    "Tenha controle total das suas finanças com o Spendwise. Acompanhe receitas, despesas, saldo e movimentações financeiras por meio de dashboards e relatórios intuitivos.",

  keywords: [
    "Spendwise",
    "controle financeiro",
    "gestão financeira",
    "aplicativo financeiro",
    "controle de despesas",
    "controle de receitas",
    "dashboard financeiro",
    "relatórios financeiros",
    "fluxo de caixa",
    "saldo financeiro",
    "organização financeira",
    "finanças pessoais",
  ],

  authors: [{ name: "Spendwise" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Spendwise | Suas Finanças Sob Controle",
    description:
      "Visualize suas receitas, despesas e saldo em um só lugar. Organize suas finanças com dashboards e relatórios claros e intuitivos.",
    url: "https://spendwise.com.br",
    siteName: "Spendwise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spendwise - Controle Financeiro Inteligente",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={``}>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
