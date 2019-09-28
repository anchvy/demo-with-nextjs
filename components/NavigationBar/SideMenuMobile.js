import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CONTAINER_WIDTH = 305
const Wrapper = styled.div`
  left: -${CONTAINER_WIDTH}px;
  position: fixed;
  top: 0;

  background: white;
  height: 100vh;
  overflow: scroll;
  width: ${CONTAINER_WIDTH}px;
`

const SideMenuMobile = props => {
  const { isOpen } = props

  useEffect(() => {
    const { body } = document

    body.style.overflow = isOpen ? 'hidden' : 'initial'
  }, [isOpen])

  return <Wrapper isOpen={isOpen}>test</Wrapper>
}

SideMenuMobile.propTypes = {
  isOpen: PropTypes.bool,
}

SideMenuMobile.defaultProps = {
  isOpen: false,
}

export default SideMenuMobile
