import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import { Container } from './Layout'
import ArticleSection from './ArticleSection'

import useData from '../hooks/useData'
import { ON_DESKTOP } from '../utils/style'
import ShareBox from './ShareBox'

const StyledArticleSection = styled(ArticleSection)`
  padding: 44px 0;
`
const StyledContainer = styled(Container)`
  background: white;
  border-radius: 15px 15px 0 0;
  position: relative;
  top: -15px;

  ${ON_DESKTOP`
    border-radius: 0;
    top: 0;
  `}
`

const HomeComponent = () => {
  const data = useData()

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledArticleSection items={data} title="recommended articles" seeMoreUrl="#" />
        <StyledArticleSection items={data} title="latest posts" seeMoreUrl="#" />
        <ShareBox />
      </StyledContainer>
    </>
  )
}

export default HomeComponent
