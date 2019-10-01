import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../utils/color'
import { ON_DESKTOP } from '../../utils/style'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const MenuItem = styled.span`
  color: ${COLORS.DARK_GRAY};
  cursor: pointer;
  flex: 0 1 auto;
  font-size: 18px;
  margin: 5px;
  overflow: hidden;
  padding: 7px;
  white-space: nowrap;

  ${props =>
    props.isActive &&
    css`
      border-bottom: 2px solid ${COLORS.LIGHT_GREEN};
      color: ${COLORS.DARK_BLUE};
      font-style: italic;
    `}

  ${ON_DESKTOP`
    font-size: 20px;
    padding: 17px;
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ArticleMenu = React.memo(props => {
  const { items, onClickMenuItem, activeItem, ...rest } = props

  return (
    <Wrapper {...rest}>
      {items.map(item => (
        <MenuItem key={item} data-item={item} onClick={onClickMenuItem} isActive={activeItem === item}>
          {item}
        </MenuItem>
      ))}
    </Wrapper>
  )
})

ArticleMenu.propTypes = {
  activeItem: PropTypes.string,
  items: PropTypes.array,
  onClickMenuItem: PropTypes.func,
}

ArticleMenu.defaultProps = {
  activeItem: '',
  items: [],
  onClickMenuItem: () => null,
}

export default ArticleMenu
