import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import NavigationBarDesktop from './NavigationBarDesktop'
import NavigationBarMobile from './NavigationBarMobile'
import useDetectDevice from '../../hooks/useDetectDevice'

const Wrapper = styled.header`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 16.57%, rgba(0, 0, 0, 0.4) 100%);
  position: fixed;
  width: 100%;
  z-index: 1;

  ${props =>
    props.isCustomStyle &&
    css`
      background: white;
      box-shadow: 1px 1px 26px -1px rgba(0, 0, 0, 0.7);
    `}

  ${props =>
    props.isHidden &&
    css`
      display: none;
    `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBar = () => {
  const { isDesktop } = useDetectDevice()
  const [isCustomStyle, setIsCustomStyle] = useState(false)
  const [shouldHideBar, setShouldHideBar] = useState(false)

  useEffect(() => {
    let prevOffetY = window.pageYOffset

    const onScroll = () => {
      const offsetY = window.pageYOffset
      // : custom style
      // change style only when offset > 100
      if (!isCustomStyle && offsetY > 100) setIsCustomStyle(true)
      else if (isCustomStyle && offsetY < 100) setIsCustomStyle(false)
      // : navbar appearance
      if (offsetY > 100 && prevOffetY - offsetY < 0) setShouldHideBar(true)
      else setShouldHideBar(false)

      prevOffetY = offsetY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCustomStyle])

  if (!process.browser) return null
  const Container = isDesktop ? NavigationBarDesktop : NavigationBarMobile

  return (
    <Wrapper isCustomStyle={isCustomStyle} isHidden={shouldHideBar}>
      <Container isCustomStyle={isCustomStyle} />
    </Wrapper>
  )
}

export default NavigationBar
