import React, { useMemo } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'
import Container from '../styled/Container'
import { getImagePath } from '../../utils/path'
import { fetchMockData, QUERY_TYPE } from '../../utils/fetch'

const ContentCarousel = dynamic(import('./ArticleCarousel'))
const MoreInfoBox = dynamic(import('./MoreInfoBox'), { ssr: false })

const Wrapper = styled.div`
  background: url('${getImagePath('header.jpg')}');
  background-position: center;
  background-size: cover;
  color: white;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: bold;
  justify-content: flex-end;
  margin-bottom: 12px;

  ${ON_DESKTOP`
    margin-bottom: 110px;
    width: 50%;
  `}
`
const Title = styled.h1`
  font-size: 56px;
  line-height: 60px;
  margin-bottom: 18px;

  ${ON_DESKTOP`
    font-size: 84px;
    line-height: 92px;
    margin-bottom: 33px;
  `}
`
const SubTitle = styled.span`
  font-style: italic;

  ${ON_DESKTOP`
    font-size: 21px;
  `}
`
const CarouselBox = styled.aside`
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
  const articles = useMemo(() => fetchMockData(QUERY_TYPE.LATEST), [])

  return (
    <Wrapper>
      <StyledContainer>
        <TitleBox>
          <Title>Explore the world!</Title>
          <SubTitle>The past always looks better than it was. It is only pleasant because it is not here.</SubTitle>
        </TitleBox>
        <CarouselBox>
          <ContentCarousel items={articles} />
        </CarouselBox>
        <MoreInfoBox />
      </StyledContainer>
    </Wrapper>
  )
}

export default Header
