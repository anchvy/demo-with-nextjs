import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import NavigationBar from './NavigationBar'
import { ON_DESKTOP, LAYOUT_SPACING } from '../utils/style'

export const Container = styled.div`
  padding: 0 ${LAYOUT_SPACING};

  ${ON_DESKTOP`
    margin: auto;
    max-width: calc(1175px - (${LAYOUT_SPACING} * 2));
  `}
`

const Layout = props => {
  return (
    <div>
      <NavigationBar />
      <div>{props.children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

Layout.defaultProps = {
  children: null,
}

export default Layout
