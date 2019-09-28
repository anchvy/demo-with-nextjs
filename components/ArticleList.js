import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Article from './Article'
import { ON_DESKTOP } from '../utils/style'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 50px 25px;

  ${ON_DESKTOP`
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ArticleList = props => {
  const { items } = props

  return (
    <Wrapper>
      {items.map(item => (
        <Article key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

ArticleList.propTypes = {
  items: PropTypes.array,
}

ArticleList.defaultProps = {
  items: [],
}

export default ArticleList
