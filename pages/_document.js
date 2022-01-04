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
            data-website-id="4c7be5a7-a528-4a39-bc08-862d279e58e7"
            src="https://umami.saurish.com/umami.js"
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
