import React from 'react'
import styled from 'styled-components'
import { ON_DESKTOP, LAYOUT_SPACING } from '../utils/style'
import useDetectDevice from '../hooks/useDetectDevice'
import ButtonLink from './ButtonLink'
import COLORS from '../utils/color'

const Wrapper = styled.div`
  align-items: center;
  background: ${COLORS.LIGHT_GRAY};
  display: flex;
  flex-direction: column;
  height: 295px;
  justify-content: center;
  margin: 0 -${LAYOUT_SPACING}px;
  padding: 40px 10px;

  ${ON_DESKTOP`
    flex-direction: row;
    height: 160px;
    justify-content: space-between;
    margin: 0;
    padding: 40px 60px;
  `}
`
const Title = styled.span`
  color: ${COLORS.LIGHT_BLUE};
  font-size: 24px;
`
const ActionBox = styled.div``
const StyledButtonLink = styled(ButtonLink)``

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ShareBox = () => {
  const { isDesktop } = useDetectDevice()

  return (
    <Wrapper>
      <Title>Let's start sharing your experience</Title>
      <ActionBox>
        <StyledButtonLink type="primary">Create a Post</StyledButtonLink>
        <StyledButtonLink type="secondary">Join Community</StyledButtonLink>
      </ActionBox>
    </Wrapper>
  )
}

export default ShareBox
