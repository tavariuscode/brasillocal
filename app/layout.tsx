import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrasilLocal",
  description: "Explore passeios, hospedagens, shows e serviços locais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
