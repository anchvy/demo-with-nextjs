import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import { Container } from './Layout'
import ArticleList from './ArticleList'
import useData from '../hooks/useData'

const ArticleSection = styled.div`
  padding: 44px 0;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const HomeComponent = props => {
  const data = useData()

  return (
    <>
      <Header />
      <Container>
        <ArticleSection>
          <ArticleList items={data} />
        </ArticleSection>
        <ArticleSection>
          <ArticleList items={data} />
        </ArticleSection>
      </Container>
    </>
  )
}

export default HomeComponent
