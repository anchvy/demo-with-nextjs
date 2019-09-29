import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Container from './styled/Container'
import ArticleSection from './ArticleSection'
import ArticleMenu from './ArticleMenu'
import ShareBox from './ShareBox'

import useData from '../hooks/useData'
import { ON_DESKTOP } from '../utils/style'
import COLORS from '../utils/color'

const StyledArticleSection = styled(ArticleSection)`
  padding: 25px 0;
  ${ON_DESKTOP`
    padding: 44px 0;
  `}
`
const StyledContainer = styled(Container)`
  background: white;
  border-radius: 15px 15px 0 0;
  padding-top: 25px;
  position: relative;
  top: -15px;

  ${ON_DESKTOP`
    border-radius: 0;
    padding-top: 60px;
    padding-bottom: 50px;
    top: 0;
  `}
`
const SectionHeader = styled.div`
  color: ${COLORS.DARK_BLUE};
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  ${ON_DESKTOP`
    font-size: 36px;
  `}
`
const StyledArticleMenu = styled(ArticleMenu)`
  margin-top: 15px;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ALL_CATEGORY_ITEM = 'All'

const HomeComponent = () => {
  const [activeCategoryName, setActiveCategoryName] = useState(ALL_CATEGORY_ITEM)
  const data = useData(activeCategoryName)

  const onClickMenuItem = event => {
    const categoryName = event.currentTarget.getAttribute('data-item')
    setActiveCategoryName(categoryName)
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <SectionHeader>Recommended</SectionHeader>
        <StyledArticleMenu
          activeItem={activeCategoryName}
          items={[ALL_CATEGORY_ITEM, 'Casad', 'Dasdasd', 'asdasd', 'sdasd']}
          onClickMenuItem={onClickMenuItem}
        />
        <StyledArticleSection items={data} title="recommended articles" seeMoreUrl="#" />
        <SectionHeader>Latest Post</SectionHeader>
        <StyledArticleSection items={data} title="latest posts" seeMoreUrl="#" />
        <ShareBox />
      </StyledContainer>
    </>
  )
}

export default HomeComponent
