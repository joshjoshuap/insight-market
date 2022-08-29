import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Insight Market API | Joshua Pautanes </title>

        <meta name="title" content="Insight Market API | Josh Josh" />
        <meta
          name="description"
          content="My personal project, Its all about market price of crypto and currency exchange."
        />
        <meta name="keywords" content="Insight Market API, joshjoshuap, Joshua Pautanes" />
        <meta name="author" content="Joshua Pautanes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
