import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import useDetectDevice from '../../hooks/useDetectDevice'
import { WITH_CUSTOM_STYLE_BG } from './styled'

const NavigationBarDesktop = dynamic(import('./NavigationBarDesktop'))
const NavigationBarMobile = dynamic(import('./NavigationBarMobile'))

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  // always padding 0
  padding: 0 !important;
  position: fixed;
  width: 100%;
  z-index: 99;

  ${WITH_CUSTOM_STYLE_BG}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBar = () => {
  const { isDesktop } = useDetectDevice()
  const [isCustomStyle, setIsCustomStyle] = useState(window.pageYOffset > 100)
  // const [shouldHideBar, setShouldHideBar] = useState(false)

  useEffect(() => {
    // let prevOffetY = window.pageYOffset

    const onScroll = () => {
      const offsetY = window.pageYOffset
      // : custom style
      // change style only when offset > 100
      if (!isCustomStyle && offsetY > 100) setIsCustomStyle(true)
      else if (isCustomStyle && offsetY < 100) setIsCustomStyle(false)

      // : navbar appearance
      // if (offsetY > 100 && prevOffetY - offsetY < 0) setShouldHideBar(true)
      // else setShouldHideBar(false)
      // prevOffetY = offsetY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCustomStyle])

  const Container = isDesktop ? NavigationBarDesktop : NavigationBarMobile

  return (
    <Wrapper isCustomStyle={isCustomStyle}>
      <Container isCustomStyle={isCustomStyle} />
    </Wrapper>
  )
}

export default NavigationBar
