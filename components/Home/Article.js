import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconView } from '../../static/images/icon-view.svg'
import { ReactComponent as IconComment } from '../../static/images/icon-comment.svg'

import { ON_DESKTOP, LINE_CLAMP } from '../../utils/style'
import { getImagePath } from '../../utils/path'
import COLORS from '../../utils/color'

const WRAPPER_PADDING = 20
const FloatingWrapper = styled.div`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: -1px;
  color: ${COLORS.DARK_BROWN};
  display: flex;
  flex-direction: column;
  max-height: 100%;
  left: 0;
  padding: ${WRAPPER_PADDING}px;
  pointer-events: none;
  position: absolute;
  width: 100%;
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
    fill-opacity: 0.3;
    height: 18px;
    width: 18px;
  }

  ${props =>
    props.isActive &&
    css`
      color: ${COLORS.DARK_BROWN};
      > svg {
        fill-opacity: 1;
      }
    `}
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
  box-shadow: inset 0 -200px 50px -50px rgba(0,0,0,0.6);
  cursor: pointer;
  display: flex;
  height: 380px;
  position: relative;
  width: 100%;

  &:hover {
    ${props => !props.isDisabledHover && `box-shadow: inset 200px 50px 300px 200px rgba(0,0,0,0.5);`}
  }

  ${ON_DESKTOP`
    height: 415px;
    min-width: 375px;
  `}
`
const Title = styled.h3`
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
const Description = styled.span`
  font-style: italic;
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

  font-size: 12px;
  font-weight: 500;

  ${ON_DESKTOP`
    font-size: 14px;
  `}
`
const AuthorName = styled.span`
  font-style: italic;
  font-weight: 600;
  white-space: nowrap;
`
const ArticleHeaderBox = styled.div`
  bottom: 0;
  left: 0;
  padding: ${WRAPPER_PADDING}px;
  pointer-events: none;
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
  const [isActive, setIsActive] = useState(false)
  const authorImagePath = item.authorImageUrl || 'member-placeholder.jpg'
  // wrapper: onclick handler
  const onClick = useCallback(() => {
    setIsActive(prevState => !prevState)
  }, [])

  return (
    <Wrapper imageName={item.imageName} onClick={onClick} isDisabledHover={isActive}>
      {/* --- <FloatingWrapper> --- */}
      {isActive && (
        <FloatingWrapper>
          <ArticleBox>
            <Title>{item.title}</Title>
            <CategoryName>{item.categoryName}</CategoryName>
            <Description>{item.description}</Description>
          </ArticleBox>
          <InfoBox>
            <AuthorImage src={getImagePath(authorImagePath)} alt={`image of ${item.author}`} />
            <ArticleInfoBox>
              <AuthorName>{item.author}</AuthorName>
              <ArticleDate>{item.createdAt}</ArticleDate>
            </ArticleInfoBox>
          </InfoBox>
        </FloatingWrapper>
      )}
      {/* --- </FloatingWrapper> --- */}
      <ArticleHeaderBox>
        <Title>{item.title}</Title>
        <CategoryName>{item.categoryName}</CategoryName>
      </ArticleHeaderBox>
      <StatBox isActive={isActive}>
        {/* view stat */}
        <IconView />
        <StatLabel>{item.view}</StatLabel>
        {/* comment stat */}
        <IconComment />
        <StatLabel>{item.comment}</StatLabel>
      </StatBox>
    </Wrapper>
  )
})

Article.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    authorImageUrl: PropTypes.string,
    categoryName: PropTypes.string,
    createdAt: PropTypes.string,
    comment: PropTypes.string,
    description: PropTypes.string,
    imageName: PropTypes.string,
    title: PropTypes.string,
    view: PropTypes.string,
  }),
}

Article.defaultProps = {
  item: {},
}

export default Article
