import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memória Viva+ | Tecnologia Afetiva para 60+",
  description:
    "Plataforma digital que combina IA, conexões sociais e serviços públicos de Goiás para ampliar o bem-estar mental e inclusão social de pessoas 60+",
  keywords: [
    "idosos",
    "bem-estar mental",
    "inclusão social",
    "Goiás",
    "tecnologia afetiva",
    "IA",
    "memórias",
  ],
  authors: [{ name: "Equipe Memória Viva+" }],
  openGraph: {
    title: "Memória Viva+ | Tecnologia Afetiva para 60+",
    description:
      "Ecossistema digital de bem-estar mental e inclusão social para pessoas 60+ em Goiás",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
