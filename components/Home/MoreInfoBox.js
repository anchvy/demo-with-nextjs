import React from 'react'
import styled from 'styled-components'

import { FLEX_CENTER } from '../../utils/style'
import useDetectDevice from '../../hooks/useDetectDevice'
import { ReactComponent as IconChevronDown } from '../../static/images/icon-chevron-down.svg'

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
  const { isDesktop } = useDetectDevice()
  if (isDesktop) return null

  return (
    <Wrapper>
      <span>Scroll Down for more</span>
      <IconChevronDown width={28} height={28} fill="white" opacity="0.5" />
    </Wrapper>
  )
}

export default MoreInfoBox
