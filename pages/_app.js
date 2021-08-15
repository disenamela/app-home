import '../styles/globals.css'
import '../styles/bootstrap-grid.scss'
import '../styles/home.scss'
import '../styles/pill-switcher.scss'

// import 'react-pill-switcher/dist/index.css'

import React from 'react';

function Disenamela({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment
  return (
    <>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Disenamela

