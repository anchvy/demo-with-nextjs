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
          <title>Woravan</title>
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
