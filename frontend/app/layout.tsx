import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cours du Soir Bilingue LAGECO",
  description: "École bilingue offrant des cours du soir, répétitions à domicile, langues, informatique et accompagnement visa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
