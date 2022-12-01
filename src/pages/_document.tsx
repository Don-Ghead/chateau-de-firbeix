import { Head, Html, Main, NextScript } from 'next/document'

export const _document = () => {
  return (
    <>
      <Html className='scroll-smooth'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Cinzel&family=Gwendolyn:wght@700&display=swap'
            rel='stylesheet'
          />
          <title>Chateau de Firbeix</title>
          <meta name='description' content='Chateau de firbeix' />
          <link rel='icon' href='/favicon_alt.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}

export default _document
