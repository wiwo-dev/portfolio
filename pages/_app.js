import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Wojciech Wieclawski"
        description="Web Developer with corporate experience"
        openGraph={{
          url: "https://wiwo.dev",
          title: "Wojciech Wieclawski",
          description: "Web Developer with corporate experience",
          images: [
            {
              url: "https://wiwo.dev/seo/ogimage.jpg",
              width: 1200,
              height: 627,
              alt: "Wojciech Wieclawski | wiwo.dev",
              type: "image/jpeg",
            },
          ],
          siteName: "wiwo.dev",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
