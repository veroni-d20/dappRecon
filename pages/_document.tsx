import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="dapprecon - Index your dapp">
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        {/* Twitter Embeds https://i.ibb.co/vxskxt2/photo-2023-08-12-23-44-44.jpg */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dapprecon" />
        <meta name="twitter:creator" content="@veronishwetha" />
        <meta name="twitter:title" content="dapprecon" />
        <meta
          name="twitter:description"
          content="A tool to get all index your dapp"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/vxskxt2/photo-2023-08-12-23-44-44.jpg"
        />
        {/* Open Graph */}
        <meta property="og:url" content="https://dapprecon.tbh.ninja" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dapprecon" />
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
        <meta property="og:image:alt" content="dapprecon" />
        <meta property="og:site_name" content="dapprecon" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
