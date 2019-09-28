import React from 'react'
import styled from 'styled-components'

import { ON_DESKTOP, LAYOUT_SPACING } from '../utils/style'
import { Container } from './Layout'
import { getImagePath } from '../utils/path'
import ContentCarousel from './ContentCarousel'
import useData from '../hooks/useData'

const Wrapper = styled.div`
  background: url('${getImagePath('header.jpg')}');
  background-position: center;
  background-size: cover;
  height: 659px;
  position: relative;

  ${ON_DESKTOP`
    height: 786px;
  `}
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`
const TitleBox = styled.div`
  align-items: flex-end;
  color: white;
  display: flex;
  flex-grow: 1;
  margin-bottom: 12px;

  ${ON_DESKTOP`
    font-size: 21px;
    margin-bottom: 110px;
    width: 50%;
  `}
`
const CarouselBox = styled.div`
  height: 74px;
  margin: 12px -${LAYOUT_SPACING}px;

  ${ON_DESKTOP`
    margin: 33px 0;
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Header = () => {
  const data = useData()

  return (
    <Wrapper>
      <StyledContainer>
        <TitleBox>The past always looks better than it was. It is only pleasant because it is not here.</TitleBox>
        <CarouselBox>
          <ContentCarousel items={data} />
        </CarouselBox>
      </StyledContainer>
    </Wrapper>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
