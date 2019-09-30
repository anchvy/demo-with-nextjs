import React, { useContext } from 'react'
import styled from 'styled-components'

import { FLEX_CENTER } from '../../utils/style'
import { ReactComponent as IconChevronDown } from '../../static/images/icon-chevron-down.svg'
import { DetectDeviceContext } from '../../contexts/DetectDeviceProvider'

const Wrapper = styled.div`
  color: white;
  font-size: 10px;
  flex-direction: column;
  margin-bottom: 15px;
  opacity: 0.5;

  ${FLEX_CENTER}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const MoreInfoBox = () => {
  const { isDesktop } = useContext(DetectDeviceContext)
  if (isDesktop) return null

  return (
    <Wrapper>
      <span>Scroll Down for more</span>
      <IconChevronDown width={28} height={28} fill="white" opacity="0.5" />
    </Wrapper>
  )
}

export default MoreInfoBox
