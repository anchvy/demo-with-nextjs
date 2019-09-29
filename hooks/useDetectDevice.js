import { useState, useEffect, useCallback, useRef } from 'react'
import { MOBILE_MAX_WIDTH } from '../utils/style'

const isMobile = innerWidth => innerWidth <= MOBILE_MAX_WIDTH
const isDesktop = innerWidth => innerWidth > MOBILE_MAX_WIDTH

const useDetectDevice = () => {
  const isClientRendered = useRef(false)
  const [state, setState] = useState({
    isMobile: process.browser ? isMobile(window.innerWidth) : true,
    isDesktop: process.browser ? isDesktop(window.innerWidth) : false,
  })

  const onResize = useCallback(() => {
    if (!state.isMobile && isMobile(window.innerWidth)) {
      setState({ isMobile: true, isDesktop: false })
    } else if (!state.isDesktop && isDesktop(window.innerWidth)) {
      setState({ isMobile: false, isDesktop: true })
    }
  }, [state])

  useEffect(() => {
    // trigger with new state when client rendered
    if (!isClientRendered.current) {
      isClientRendered.current = true
      onResize()
    }
  })

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  return state
}

export default useDetectDevice
