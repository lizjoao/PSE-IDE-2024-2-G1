import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Netlify Widget ... spoliers com que trabalhamos?*/}
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="shortcut icon" type="imagex/png" href="/Assets/Cat_Skull.png"></link>
          <title>Cine IDE</title>
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