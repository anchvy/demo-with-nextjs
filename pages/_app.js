import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import DetectDeviceProvider from '../contexts/DetectDeviceProvider'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>by Woravan Suthatar</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="with nextjs" />
        </Head>
        <GlobalStyle />
        <DetectDeviceProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DetectDeviceProvider>
      </>
    )
  }
}

export default MyApp
