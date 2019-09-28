import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import NavigationBarDesktop from './NavigationBarDesktop'
import NavigationBarMobile from './NavigationBarMobile'

import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'
import useDetectDevice from '../../hooks/useDetectDevice'

const Wrapper = styled.header`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 16.57%, rgba(0, 0, 0, 0.4) 100%);
  position: fixed;
  width: 100%;
  z-index: 1;
`
const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 24px ${LAYOUT_SPACING}px;

  ${ON_DESKTOP`
    max-width: calc(1320px - (${LAYOUT_SPACING}px * 2));
    margin: auto;
`}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBar = () => {
  if (!process.browser) return null

  const { isDesktop } = useDetectDevice()
  const Content = isDesktop ? NavigationBarDesktop : NavigationBarMobile

  return (
    <Wrapper>
      <Container>
        <Content />
      </Container>
    </Wrapper>
  )
}

NavigationBar.propTypes = {}

NavigationBar.defaultProps = {}

export default NavigationBar
