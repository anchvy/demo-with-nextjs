import React from 'react'
import styled from 'styled-components'

import { ON_DESKTOP, LAYOUT_SPACING, FLEX_CENTER } from '../utils/style'
import { Container } from './Layout'
import { getImagePath } from '../utils/path'
import ContentCarousel from './ContentCarousel'
import { ReactComponent as IconChevronDown } from '../static/images/icon-chevron-down.svg'

import useData from '../hooks/useData'
import useDetectDevice from '../hooks/useDetectDevice'

const Wrapper = styled.div`
  background: url('${getImagePath('header.jpg')}');
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
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
const MoreInfoBox = styled.div`
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

const Header = () => {
  const { isMobile } = useDetectDevice()
  const data = useData()

  return (
    <Wrapper>
      <StyledContainer>
        <TitleBox>The past always looks better than it was. It is only pleasant because it is not here.</TitleBox>
        <CarouselBox>
          <ContentCarousel items={data} />
        </CarouselBox>
        {isMobile && (
          <MoreInfoBox>
            <span>Scroll Down for more</span>
            <IconChevronDown width={28} height={28} fill="white" opacity="0.5" />
          </MoreInfoBox>
        )}
      </StyledContainer>
    </Wrapper>
  )
}

export default Header
