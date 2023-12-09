import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="pougoncif - Index your dapp">
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        {/* Twitter Embeds https://i.ibb.co/vxskxt2/photo-2023-08-12-23-44-44.jpg */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@polygoncif" />
        <meta name="twitter:creator" content="@fabianferno" />
        <meta name="twitter:title" content="polygoncif" />
        <meta
          name="twitter:description"
          content="A tool to get all index your dapp"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/vxskxt2/photo-2023-08-12-23-44-44.jpg"
        />
        {/* Open Graph */}
        <meta property="og:url" content="https://polygoncif.tbh.ninja" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="polygoncif" />
        <meta
          property="og:description"
          content="A tool to get all index your dapp"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/vxskxt2/photo-2023-08-12-23-44-44.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="polygoncif" />
        <meta property="og:site_name" content="polygoncif" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
