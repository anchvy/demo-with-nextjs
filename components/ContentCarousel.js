import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ON_DESKTOP, LAYOUT_SPACING } from '../utils/style'
import { getImagePath } from '../utils/path'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  overflow-x: scroll;
  padding: 0 ${LAYOUT_SPACING}px;

  ${ON_DESKTOP`
    justify-content: space-between;
    overflow-x: unset;
    padding: 0;
  `}
`
const ITEM_WIDTH = 270
const Item = styled.article`
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  display: flex;
  padding: 0 0 12px 12px;
  min-width: ${ITEM_WIDTH}px;
  margin-right: 19px;
`
const ItemTitle = styled.div`
  align-self: flex-end;
  color: white;
  font-weight: 800;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
`
const ItemImage = styled.img`
  margin-right: 15px;
  width: 62px;
`

const ContentCarousel = props => {
  const { items, ...rest } = props
  return (
    <Wrapper {...rest}>
      {items.map(item => (
        <Item key={item.id}>
          <ItemImage src={getImagePath(item.imageName)} alt={item.title} />
          <ItemTitle>{item.title}</ItemTitle>
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
