import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico"></link>

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"></link>
      </Head>
      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
