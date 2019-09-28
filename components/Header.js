import React from 'react'
import styled from 'styled-components'

import { ON_DESKTOP } from '../utils/style'
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
`
const TitleBox = styled.div`
  color: white;

  ${ON_DESKTOP`
    font-size: 21px;
    max-width: 521px;
  `}
`
const CarouselBox = styled.div`
  align-self: flex-end;
  height: 74px;
  margin-bottom: 12px;
  width: 100%;

  ${ON_DESKTOP`margin-bottom: 33px;`}
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
