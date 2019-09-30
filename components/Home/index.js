import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

import Container from '../styled/Container'
import ArticleMenu from './ArticleMenu'
import ShareBox from './ShareBox'

import useData, { QUERY_TYPE } from '../../hooks/useData'
import { ON_DESKTOP } from '../../utils/style'
import COLORS from '../../utils/color'

const Header = dynamic(import('./Header'))
const ArticleSection = dynamic(import('./ArticleSection'))

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

const Home = () => {
  const [activeCategoryName, setActiveCategoryName] = useState(ALL_CATEGORY_ITEM)
  const articles = useData(QUERY_TYPE.CATEGORY_NAME)
  // menu-item: onclick handler
  const onClickMenuItem = useCallback(event => {
    const categoryName = event.currentTarget.getAttribute('data-item')
    setActiveCategoryName(categoryName)
  }, [])

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
        <StyledArticleSection items={articles} title="recommended articles" seeMoreUrl="#" />
        <SectionHeader>Latest Post</SectionHeader>
        <StyledArticleSection items={articles} title="latest posts" seeMoreUrl="#" />
        <ShareBox />
      </StyledContainer>
    </>
  )
}

export default Home
