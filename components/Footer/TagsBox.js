import React from 'react'
import styled from 'styled-components'
import COLORS from '../../utils/color'
import { ON_DESKTOP } from '../../utils/style'

const Wrapper = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 21px;

  ${ON_DESKTOP`
    font-size: 22px;
    margin-bottom: 25px;
  `}
`
const TagsContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
`
const TagItem = styled.a`
  border: 1px solid ${COLORS.LIGHT_GREEN};
  border-radius: 4px;
  font-size: 13px;
  margin-bottom: 13px;
  cursor: pointer;
  padding: 6px 12px;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: ${COLORS.DARK_GREEN};
  }

  ${ON_DESKTOP`
    padding: 8px 20px 10px 12px;
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const TAGS_CONFIG = ['travel', 'bangkok', 'beach', 'city', 'night market']

const TagsBox = () => (
  <Wrapper>
    <Title>Popular Tag</Title>
    <TagsContainer>
      {TAGS_CONFIG.map(item => (
        <TagItem key={item} url="#" aria-label={item}>
          {item}
        </TagItem>
      ))}
    </TagsContainer>
  </Wrapper>
)

export default TagsBox
