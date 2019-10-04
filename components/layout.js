import React from 'react'
import Head from 'next/head'
import Header from './header'
import Style from 'assets/scss/styles.scss'

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>NextJS Auth</title>
    </Head>
    <Header />

    <main>
      <div className='container'>{props.children}</div>
    </main>
  </React.Fragment>
)

export default Layout
