import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import useDetectDevice from '../../hooks/useDetectDevice'

const NavigationBarDesktop = dynamic(import('./NavigationBarDesktop'))
const NavigationBarMobile = dynamic(import('./NavigationBarMobile'))

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBar = () => {
  const { isDesktop } = useDetectDevice()
  const [isCustomStyle, setIsCustomStyle] = useState(false)
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

  const Wrapper = isDesktop ? NavigationBarDesktop : NavigationBarMobile

  return <Wrapper isCustomStyle={isCustomStyle} />
}

export default NavigationBar
