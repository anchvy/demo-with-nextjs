import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { WrapperOverlayMobile as Wrapper, CUSTOM_NAVBAR_HEIGHT } from './styled'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import COLORS from '../../utils/color'
import { LAYOUT_SPACING } from '../../utils/style'

const Container = styled.div`
  align-items: center;
  background: white;
  display: flex;
  padding: 20px ${LAYOUT_SPACING}px;
  position: relative;
  top: ${CUSTOM_NAVBAR_HEIGHT}px;

  > svg {
    margin-left: 10px;
  }
`
const SearchInput = styled.input`
  color: ${COLORS.DARK_GRAY};
  font-style: italic;
  margin-left: 10px;
  width: 100%;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const SearchBarMobile = React.memo(props => {
  const { isOpen, onCloseSearchBar, viewKey } = props
  // container: stop propagation for container
  const onContainerClick = event => event.stopPropagation()

  return (
    <Wrapper isOpen={isOpen} onClick={onCloseSearchBar} data-viewkey={viewKey}>
      <Container onClick={onContainerClick}>
        <IconSearch width={22} height={22} fill={COLORS.LIGHT_GREEN} />
        <SearchInput placeholder="What do you want to find?" />
      </Container>
    </Wrapper>
  )
})

SearchBarMobile.propTypes = {
  isOpen: PropTypes.bool,
  onCloseSearchBar: PropTypes.func,
  viewKey: PropTypes.string.isRequired,
}

SearchBarMobile.defaultProps = {
  isOpen: false,
  onCloseSearchBar: () => null,
}

export default SearchBarMobile
