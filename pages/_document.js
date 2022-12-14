import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7WS6CV2006" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-7WS6CV2006');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
