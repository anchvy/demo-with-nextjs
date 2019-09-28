import { useState, useEffect } from 'react'
import { MOBILE_MAX_WIDTH } from '../utils/style'

const isMobile = innerWidth => innerWidth <= MOBILE_MAX_WIDTH
const isDesktop = innerWidth => innerWidth > MOBILE_MAX_WIDTH

const useDetectDevice = () => {
  const [state, setState] = useState({
    isMobile: isMobile(window.innerWidth),
    isDesktop: isDesktop(window.innerWidth),
  })

  useEffect(() => {
    const onResize = () => {
      if (!state.isMobile && isMobile(window.innerWidth)) {
        setState({ isMobile: true, isDesktop: false })
      } else if (!state.isDesktop && isDesktop(window.innerWidth)) {
        setState({ isMobile: false, isDesktop: true })
      }
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [state])

  return state
}

export default useDetectDevice
