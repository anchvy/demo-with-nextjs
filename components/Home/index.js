import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

import Container from '../styled/Container'
import ArticleMenu from './ArticleMenu'
import ShareBox from './ShareBox'

import { QUERY_TYPE, fetchMockData } from '../../utils/fetch'
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
const SectionHeader = styled.h2`
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
  const articles = useMemo(() => fetchMockData(QUERY_TYPE.CATEGORY_NAME, activeCategoryName), [activeCategoryName])
  const latestArticles = useMemo(() => fetchMockData(QUERY_TYPE.LATEST), [])
  const categoriesName = useMemo(() => fetchMockData(QUERY_TYPE.CATEGORIES), [])
  // menu-item: onclick handler
  const onClickMenuItem = useCallback(event => {
    const categoryName = event.currentTarget.getAttribute('data-item')
    setActiveCategoryName(categoryName)
  }, [])

  return (
    <>
      <Header />
      <StyledContainer>
        <section>
          <SectionHeader>Recommended</SectionHeader>
          <StyledArticleMenu
            activeItem={activeCategoryName}
            items={[ALL_CATEGORY_ITEM, ...categoriesName]}
            onClickMenuItem={onClickMenuItem}
          />
          <StyledArticleSection items={articles} title="recommended articles" seeMoreUrl="#" />
        </section>
        <section>
          <SectionHeader>Latest Post</SectionHeader>
          <StyledArticleSection items={latestArticles} title="latest posts" seeMoreUrl="#" />
          <ShareBox />
        </section>
      </StyledContainer>
    </>
  )
}

export default Home
