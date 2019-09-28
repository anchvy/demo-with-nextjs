import React from 'react'
import App from 'next/app'

import GlobalStyle from '../components/GlobalStyle'

import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
