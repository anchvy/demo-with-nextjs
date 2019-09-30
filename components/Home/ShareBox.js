import React from 'react'
import styled from 'styled-components'
import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'
import ButtonLink from '../ButtonLink'
import COLORS from '../../utils/color'

const Wrapper = styled.div`
  align-items: center;
  background: ${COLORS.LIGHT_GRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 -${LAYOUT_SPACING}px;
  padding: 40px 10px;

  ${ON_DESKTOP`
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 40px 60px;
  `}
`
const InfoBox = styled.div`
  text-align: center;
  margin-bottom: 34px;

  ${ON_DESKTOP`
    text-align: unset;
    margin-bottom: 0;
  `}
`
const Title = styled.p`
  color: ${COLORS.DARK_BLUE};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 9px;

  ${ON_DESKTOP`
    font-size: 36px;
  `}
`
const SubTitle = styled.p`
  color: ${COLORS.LIGHT_BLUE};
  font-size: 24px;
`
const ActionBox = styled.div`
  display: grid;
  grid-gap: 12px;
  width: 100%;

  ${ON_DESKTOP`
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    width: unset;
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ShareBox = () => (
  <Wrapper>
    <InfoBox>
      <Title>Are you Ready?</Title>
      <SubTitle>Let's start sharing your experience</SubTitle>
    </InfoBox>
    <ActionBox>
      <ButtonLink type="primary">Create a Post</ButtonLink>
      <ButtonLink type="secondary">Join Community</ButtonLink>
    </ActionBox>
  </Wrapper>
)

export default ShareBox