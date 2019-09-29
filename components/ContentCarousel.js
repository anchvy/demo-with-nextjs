import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ON_DESKTOP, LAYOUT_SPACING } from '../utils/style'
import { getImagePath } from '../utils/path'
import COLORS from '../utils/color'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  overflow-x: scroll;
  padding: 0 ${LAYOUT_SPACING}px;

  // TODO: If the green line is a custom scorebar
  // Please un-comment the below style :)

  // ::-webkit-scrollbar {
  //   height: 1px;
  // }

  // ::-webkit-scrollbar-thumb {
  //   background: ${COLORS.LIGHT_GREEN};
  // }

  ${ON_DESKTOP`
    padding: 0;
  `}
`
const Item = styled.article`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  display: flex;
  padding: 0 0 12px 12px;
  min-width: 270px;
  margin-right: 19px;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
  }
`
const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemSubTitle = styled.span`
  color: white;
  font-style: italic;
  font-weight: 800;
  line-height: 20px;
  overflow: hidden;
`
const ItemTitle = styled.span`
  color: ${COLORS.LIGHT_GREEN};
  font-size: 14px;
  margin-bottom: 3px;
`
const ItemImage = styled.img`
  flex-shrink: 0;
  height: 62px;
  margin-right: 15px;
  width: 62px;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ContentCarousel = props => {
  const { items, ...rest } = props
  return (
    <Wrapper {...rest}>
      {items.map(item => (
        <Item key={item.id}>
          <ItemImage src={getImagePath(item.imageName)} alt={item.title} />
          <ItemInfoBox>
            <ItemTitle>{item.categoryName}</ItemTitle>
            <ItemSubTitle>{item.title}</ItemSubTitle>
          </ItemInfoBox>
        </Item>
      ))}
    </Wrapper>
  )
}

ContentCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
}

ContentCarousel.defaultProps = {
  items: [],
}

export default ContentCarousel
