import { Archivo, DM_Sans, Parisienne } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Family Phys. Ed. — Childhood P.E. Games, Coached For Families",
  description:
    "True fun. Real play. All welcome. Energetic coaches bring your favorite childhood P.E. games to life for families, kids and grown-ups. Book a session or find a local coach.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Family Phys. Ed. — Childhood P.E. Games, Coached For Families",
    description:
      "True fun. Real play. All welcome. Energetic coaches bring your favorite childhood P.E. games to life for families, kids and grown-ups. Book a session or find a local coach.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${dmSans.variable} ${parisienne.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground"
      >
        {children}
      </body>
    </html>
  );
}

