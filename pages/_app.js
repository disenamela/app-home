import '../styles/globals.css'
import '../styles/bootstrap-grid.scss'
import '../styles/home.scss'
// import '../styles/nav-tabs.scss'

import 'react-pill-switcher/dist/index.css'

import React from 'react';

function Disenamela({ Component, pageProps }) {
  return <>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
    <Component {...pageProps} />
  </>
}

export default Disenamela

