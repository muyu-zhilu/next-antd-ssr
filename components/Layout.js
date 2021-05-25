import Head from 'next/head';
export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>IBOS官网</title>
      {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
    </Head>
    {/* <style jsx global>{`
      body {
      }
    `}</style> */}
    {children}
  </div>
);
