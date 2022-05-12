import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="iDZx5sULjkE1tF-0L7obgyBVrr0-0QmcHYfFsbEkv7M"
          />
          <meta
            name="google-site-verification"
            content="EC9S-WNG3Yl_bjQfBsTY779nMxm1MPnGQMdlXufZwlk"
          />
          <link rel="icon" href="/static/favicon/favicon.ico" />
          <script
            async
            defer
            data-website-id="d3ea84e3-0932-4197-ad9f-6919de67a19e"
            src="https://umami-production-e355.up.railway.app/umami.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
