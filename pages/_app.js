import React from 'react'
import App from 'next/app'

import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import DetectDeviceProvider from '../contexts/DetectDeviceProvider'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
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
