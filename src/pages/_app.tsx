import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Damaris AI"
        themeColor="var(--body-bg-color)"
        description="Damaris AI, es tu asistente virtual y te ayudará a planificar tus viajes turísticos."
        canonical="https://damarisai.com/"
        additionalLinkTags={[
          {
            rel: "icon",
            type: "image/x-icon",
            href: "https://damarisai.com/favicon.ico",
          },
        ]}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; IE=7; chrome=1",
          },
          {
            name: "keywords",
            content: "damaris, damaris ai, asistente virtual",
          },
          {
            name: "application-name",
            content: "Damaris ai",
          },
          {
            name: "audience",
            content: "all",
          },
          {
            name: "copyright",
            content: "damarisai.com",
          },
          {
            name: "author",
            content: "Damaris",
          },
          {
            property: "dc:creator",
            content: "Damaris",
          },
        ]}
        openGraph={{
          url: "https://damarisai.com/",
          title: "Damaris AI | Asistente Virtual",
          description:
            "¡Damaris AI! es tu asistente virtual y te ayudará a planificar tus viajes turísticos.",
          images: [
            {
              url: "https://damarisai.com/logo.png",
              type: "image/png",
              height: 300,
              width: 300,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@handle",
          site: "@site",
        }}
      />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, Helvetica, Arial, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
