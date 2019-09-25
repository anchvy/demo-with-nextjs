import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { ON_DESKTOP, NAVIGATION_BAR_HEIGHT, LAYOUT_SPACING } from '../utils/style'

const Wrapper = styled.header`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 16.57%, rgba(0, 0, 0, 0.4) 100%);
  height: ${NAVIGATION_BAR_HEIGHT};
  position: fixed;
  width: 100%;
  z-index: 1;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 0 32px;

  ${ON_DESKTOP`
    padding: 0 ${LAYOUT_SPACING};
    max-width: calc(1320px - (${LAYOUT_SPACING} * 2));
    margin: auto;
`}
`

const Logo = <img src="/static/images/logo.png" alt="logo" />
const MobileBarItems = <>{Logo}</>
const DesktopBarItems = <>{Logo}</>

const NavigationBar = props => {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  )
}

NavigationBar.propTypes = {}

NavigationBar.defaultProps = {}

export default NavigationBar
