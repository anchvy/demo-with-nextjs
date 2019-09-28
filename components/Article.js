import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconView } from '../static/images/icon-view.svg'
import { ReactComponent as IconComment } from '../static/images/icon-comment.svg'

import { ON_DESKTOP } from '../utils/style'
import { getImagePath } from '../utils/path'
import COLORS from '../utils/color'

const FloatingWrapper = styled.div`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: 0;
  color: ${COLORS.DARK_BLUE};
  display: flex;
  flex-direction: column;
  height: 60%;
  left: 0;
  opacity: 0;
  padding: 20px;
  pointer-events: none;
  position: absolute;
  width: 100%;
  transition: opacity 0.1s ease-in;
  z-index: 1;
`
const StatBox = styled.div`
  bottom: 20px;
  color: white;
  display: flex;
  pointer-events: none;
  position: absolute;
  right: 20px;
  z-index: 2;

  > svg {
    fill: ${COLORS.LIGHT_GRAY};
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
const Wrapper = styled.div`
  background: url("${props => getImagePath(props.imageName)}");
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 380px;
  position: relative;
  width: 100%;

  box-shadow: inset 0 -200px 50px -50px rgba(0,0,0,0.5);

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
const TitleBox = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1 0 auto;
  margin-bottom: 16px;
`
const Title = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const ArticleDate = styled.span`
  color: ${COLORS.DARK_GRAY};

  font-size: 14px;
  font-weight: 500;
`
const AuthorName = styled.span`
  font-weight: 600;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Article = React.memo(props => {
  const { item } = props

  return (
    <Wrapper imageName={item.imageName}>
      <FloatingWrapper>
        <TitleBox>
          <Title>{item.title}</Title>
        </TitleBox>
        <InfoBox>
          <AuthorImage src={getImagePath(item.authorImageUrl)} alt={item.author} />
          <ArticleInfo>
            <AuthorName>{item.author}</AuthorName>
            <ArticleDate>{item.createdAt}</ArticleDate>
          </ArticleInfo>
        </InfoBox>
      </FloatingWrapper>
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
