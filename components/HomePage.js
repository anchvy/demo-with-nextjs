import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'
import { Container } from './Layout'
import ArticleList from './ArticleList'
import { ReactComponent as IconArrow } from '../static/images/icon-arrow.svg'

import useData from '../hooks/useData'
import { ON_DESKTOP } from '../utils/style'
import COLORS from '../utils/color'

const ArticleSection = styled.div`
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
const StyledSeeMoreButton = styled.a`
  color: ${COLORS.LIGHT_GREEN};
  display: block;
  font-size: 24px;
  font-weight: 800;
  margin-top: 44px;
  text-align: center;

  > svg {
    margin-left: 12px;
  }
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const SeeMoreButton = props => (
  <StyledSeeMoreButton href="#">
    {`See more ${props.title} `}
    <IconArrow width={16} height={15} fill={COLORS.LIGHT_GREEN} />
  </StyledSeeMoreButton>
)

const HomeComponent = props => {
  const data = useData()

  return (
    <>
      <Header />
      <StyledContainer>
        <ArticleSection>
          <ArticleList items={data} />
          <SeeMoreButton title="recommended articles" />
        </ArticleSection>
        <ArticleSection>
          <ArticleList items={data} />
          <SeeMoreButton title="latest posts" />
        </ArticleSection>
      </StyledContainer>
    </>
  )
}

SeeMoreButton.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HomeComponent
