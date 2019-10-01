import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import DetectDeviceProvider from '../contexts/DetectDeviceProvider'
import { fetchConfig } from '../utils/fetch'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>{fetchConfig('title')}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={fetchConfig('description')} />
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
