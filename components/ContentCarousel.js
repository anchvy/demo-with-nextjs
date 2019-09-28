import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ON_DESKTOP } from '../utils/style'
import { getImagePath } from '../utils/path'
import COLORS from '../utils/color'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.LIGHT_GREEN};
  }

  ${ON_DESKTOP`
    overflow-x: unset;
    justify-content: space-between;
  `}
`
const ITEM_WIDTH = 270
const Item = styled.article`
  display: flex;
  padding: 0 0 12px 12px;
  min-width: ${ITEM_WIDTH}px;

  &:not(:last-child) {
    margin-right: 19px;
  }

  ${ON_DESKTOP`
    min-width: unset;
    width: ${ITEM_WIDTH}px;
  `}
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
