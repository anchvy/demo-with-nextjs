import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const NavigationBar = dynamic(import('./NavigationBar'), { ssr: false })
const Footer = dynamic(import('./Footer'))

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Layout = props => {
  return (
    <>
      <NavigationBar />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

Layout.defaultProps = {
  children: null,
}

export default Layout
