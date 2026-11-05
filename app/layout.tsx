import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema de Evaluación del Aprendizaje Real",
  description:
    "Un espacio para que estudiantes de secundaria demuestren lo que aprenden y avancen con confianza.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
