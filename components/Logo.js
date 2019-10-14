import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import IconLogo from '../static/images/logo.png'

const Wrapper = styled.img`
  width: ${props => props.width}px;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Logo = props => <Wrapper src={IconLogo} alt="Site logo" {...props} />

Logo.propTypes = {
  width: PropTypes.number,
}

Logo.defaultProps = {
  width: 88,
}

export default Logo
