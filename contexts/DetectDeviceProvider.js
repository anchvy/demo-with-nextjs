import React from 'react'
import PropTypes from 'prop-types'
import useDetectDevice from '../hooks/useDetectDevice'

export const DetectDeviceContext = React.createContext(null)

const DetectDeviceProvider = props => {
  const { isMobile, isDesktop } = useDetectDevice()
  return <DetectDeviceContext.Provider value={{ isMobile, isDesktop }}>{props.children}</DetectDeviceContext.Provider>
}

DetectDeviceProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DetectDeviceProvider
