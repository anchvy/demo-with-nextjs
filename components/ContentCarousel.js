import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ON_DESKTOP, FLEX_CENTER } from '../utils/style'
import { getImagePath } from '../utils/path'

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  ${ON_DESKTOP`
    justify-content: space-between;
  `}
`
const Item = styled.article`
  display: flex;
  padding: 0 0 12px 12px;
  width: 270px;

  &:not(:last-child) {
    margin-right: 19px;
  }
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
  flex-shrink: 1;
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
