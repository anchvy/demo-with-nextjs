import React from 'react'
import PropTypes from 'prop-types'

import NavigationBar from './NavigationBar'
import Footer from './Footer'

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
