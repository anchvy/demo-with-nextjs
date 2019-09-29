import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import ArticleList from './ArticleList'

const SeeMoreButton = dynamic(import('./SeeMoreButton'), { ssr: false })

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ArticleSection = React.memo(props => {
  const { items, seeMoreUrl, title, ...rest } = props
  if (items.length === 0) return null

  return (
    <section {...rest}>
      <ArticleList items={items} />
      {seeMoreUrl && <SeeMoreButton title={title} />}
    </section>
  )
})

ArticleSection.propTypes = {
  items: PropTypes.array,
  seeMoreUrl: PropTypes.string,
  title: PropTypes.string,
}
ArticleSection.defaultProps = {
  items: [],
  seeMoreUrl: null,
  title: '',
}

export default ArticleSection
