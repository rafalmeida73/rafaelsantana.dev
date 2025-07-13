import { ReactNode } from "react";
import { Metadata } from "next";
import { Inconsolata, Inter, Montserrat } from "next/font/google";
import Script from "next/script";

import { ColorProvider } from "@/hooks/useColor";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-Inconsolata",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const description =
  "Mobile Developer, passionate about technology, always looking for challenges and project to have constant learning.";
export const metadata: Metadata = {
  title: "Rafael Santana",
  description,
  keywords:
    "Mobile, React Js, React Native, Rafael Santana, developer, mobile developer, web developer, front-end developer, back-end developer, full-stack developer",
  openGraph: {
    type: "website",
    url: "https://rafaelsantana.dev/",
    title: "Rafael Santana",
    description,
    images: [
      {
        url: "https://rafaelsantana.dev/img/index.webp",
        width: 800,
        height: 600,
        alt: "Rafael Santana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Santana",
    description,
    images: [
      {
        url: "https://rafaelsantana.dev/img/index.webp",
        width: 800,
        height: 600,
        alt: "Rafael Santana",
      },
    ],
  },
  icons: "/favicon.ico",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${inconsolata.variable} ${montserrat.variable} bg-custom bg-background scrollbar bg-cover bg-fixed font-[var(--font-inter)] text-[optimizelegibility]`}
      >
        <ColorProvider>{children}</ColorProvider>
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "${clarityId}");`,
          }}
        />
      </body>
    </html>
  );
}
