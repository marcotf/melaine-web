import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Melaine Nieuwjaer - Etiopathe - Dunkerque",
  description:
    "L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc).",
  openGraph: {
    url: "https://etiopathedunkerque.fr",
    images: ["/images/melaine.jpg"],
    type: "website",
    siteName: "Mélaine Nieuwjaer",
    locale: "fr_FR",
  },
  twitter: {
    site: "https://etiopathedunkerque.fr",
    images: ["/images/melaine.jpg"],
    card: "summary",
  },
  icons: [{ rel: "icon", type: "image/x-icon", url: "/favicon.ico" }],
};

const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "LocalBusiness",
  name: "Mélaine Nieuwjaer",
  telephone: "+33777149098",
  url: "https://etiopathedunkerque.fr/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "574 avenue du stade",
    postalCode: "59240",
    addressLocality: "Dunkerque",
    addressCountry: "France",
  },
  openingHours: "Mo, Tu, We, Th, Fr 08:00-19:30 Sa 08:00-12:30",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33777149098",
    email: "mnieuwjaer.etiopathe@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
