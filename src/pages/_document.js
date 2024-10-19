import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>Cine IDE</title>
        <Head>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="shortcut icon" type="imagex/png" href="/Assets/Cat_Skull.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument