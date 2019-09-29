import React, { setState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconView } from '../static/images/icon-view.svg'
import { ReactComponent as IconComment } from '../static/images/icon-comment.svg'

import { ON_DESKTOP, LINE_CLAMP } from '../utils/style'
import { getImagePath } from '../utils/path'
import COLORS from '../utils/color'

const WRAPPER_PADDING = 20
const FloatingWrapper = styled.div`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: 0;
  color: ${COLORS.DARK_BLUE};
  display: flex;
  flex-direction: column;
  max-height: 100%;
  left: 0;
  opacity: 0;
  padding: ${WRAPPER_PADDING}px;
  pointer-events: none;
  position: absolute;
  width: 100%;
  transition: opacity 0.1s ease-in;
  z-index: 1;
`
const StatBox = styled.div`
  bottom: ${WRAPPER_PADDING}px;
  color: white;
  display: flex;
  pointer-events: none;
  position: absolute;
  right: ${WRAPPER_PADDING}px;
  z-index: 2;

  > svg {
    fill: ${COLORS.GRAY};
    fill-opacity: 0.4;
    height: 18px;
    width: 18px;
  }
`
const StatLabel = styled.div`
  font-size: 12px;
  margin-left: 5px;
  margin-right: 10px;
`
const Wrapper = styled.article`
  background: url("${props => getImagePath(props.imageName)}");
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: inset 0 -200px 50px -50px rgba(0,0,0,0.5);
  cursor: pointer;
  display: flex;
  height: 380px;
  position: relative;
  width: 100%;

  &:hover {
    > ${FloatingWrapper} {
      opacity: 1;
    }

    > ${StatBox} {
      color: ${COLORS.DARK_BLUE};
      > svg { fill-opacity: 1; }
    }
  }

  ${ON_DESKTOP`
    height: 415px;
    min-width: 375px;
  `}
`
const Title = styled.span`
  font-size: 24px;
  font-weight: bold;

  ${LINE_CLAMP(2)}
`
const CategoryName = styled.span`
  color: ${COLORS.LIGHT_GREEN};
  font-size: 14px;
`
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  > ${Title} {
    margin-bottom: 6px;
  }

  > ${CategoryName} {
    margin-bottom: 13px;
  }
`
const Description = styled.span.attrs({ className: 'font-subtitle' })`
  ${LINE_CLAMP(2)}
`
const InfoBox = styled.div`
  display: flex;
  max-width: 50%;
  overflow: hidden;
`
const AuthorImage = styled.img`
  border-radius: 50%;
  height: 36px;
  margin-right: 14px;
  width: 36px;
`
const ArticleInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`
const ArticleDate = styled.span`
  color: ${COLORS.DARK_GRAY};

  font-size: 14px;
  font-weight: 500;
`
const AuthorName = styled.span.attrs({ className: 'font-subtitle' })`
  font-weight: 600;
`
const ArticleHeaderBox = styled.div`
  bottom: ${WRAPPER_PADDING}px;
  left: ${WRAPPER_PADDING}px;
  position: absolute;

  > ${Title} {
    color: white;
    margin-bottom: 22px;
  }
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Article = React.memo(props => {
  const { item } = props

  return (
    <Wrapper imageName={item.imageName}>
      <FloatingWrapper>
        <ArticleBox>
          <Title>{item.title}</Title>
          <CategoryName>{item.categoryName}</CategoryName>
          <Description>{item.title}</Description>
        </ArticleBox>
        <InfoBox>
          <AuthorImage src={getImagePath(item.authorImageUrl)} alt={item.author} />
          <ArticleInfoBox>
            <AuthorName>{item.author}</AuthorName>
            <ArticleDate>{item.createdAt}</ArticleDate>
          </ArticleInfoBox>
        </InfoBox>
      </FloatingWrapper>
      <ArticleHeaderBox>
        <Title>{item.title}</Title>
        <CategoryName>{item.categoryName}</CategoryName>
      </ArticleHeaderBox>
      <StatBox>
        {/* view stat */}
        <IconView />
        <StatLabel>123</StatLabel>
        {/* comment stat */}
        <IconComment />
        <StatLabel>123</StatLabel>
      </StatBox>
    </Wrapper>
  )
})

Article.propTypes = {
  item: PropTypes.object,
}

Article.defaultProps = {
  item: {},
}

export default Article
