import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
  ${props => props.w && `width: ${props.w}px;`}
  ${props => props.h && `height: ${props.h}px;`}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Image = props => <StyledImage {...props} />

Image.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
}

Image.defaultProps = {
  w: null,
  h: null,
}

export default Image
