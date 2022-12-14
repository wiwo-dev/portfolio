import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Wojciech Wieclawski"
        description="Web Developer with corporate experience"
        openGraph={{
          url: "https://wiwoproduction.com",
          title: "Wojciech Wieclawski",
          description: "Web Developer with corporate experience",
          images: [
            {
              url: "https://wiwoproduction.com/seo/ogimage.jpg",
              width: 1200,
              height: 627,
              alt: "Wojciech Wieclawski | wiwoproduction.com",
              type: "image/jpeg",
            },
          ],
          siteName: "wiwoproduction.com",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
