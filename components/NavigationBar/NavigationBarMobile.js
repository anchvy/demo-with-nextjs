import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import { ReactComponent as IconClose } from '../../static/images/icon-close.svg'
import { ReactComponent as IconMenu } from '../../static/images/icon-menu.svg'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import { ReactComponent as IconLogo } from '../../static/images/logo.svg'

import ButtonLink from '../ButtonLink'
import { NavItemsContainer } from './styled'

const SearchBarMobile = dynamic(import('./SearchBarMobile'))
const SideMenuMobile = dynamic(import('./SideMenuMobile'))
const IconButton = styled(ButtonLink)`
  border: none;
  border-radius: 50%;
  min-width: unset;
  padding: 10px;
`
const StyledNavContainer = styled(NavItemsContainer)``

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const VIEW_KEYS = {
  SEARCH: 'SEARCH',
  MENU: 'MENU',
}

const NavigationBarMobile = React.memo(props => {
  const { isCustomStyle } = props
  const [activeViewKey, setActiveViewKey] = useState(null)

  // viewState
  const isOpenSideBar = activeViewKey === VIEW_KEYS.MENU
  const isOpenSearchBar = activeViewKey === VIEW_KEYS.SEARCH
  // freeze body when sidebar is activate
  const { body } = document
  body.style.overflow = activeViewKey ? 'hidden' : 'initial'
  const MenuIcon = isOpenSideBar ? IconClose : IconMenu
  // menu/search-icon: onclick handler
  const onToggleViewState = useCallback(event => {
    const viewKey = event.currentTarget.getAttribute('data-viewkey')
    // if `prevState === viewKey` is true,
    // it mean that view has been displayed then, we need to close
    setActiveViewKey(prevState => (prevState === viewKey ? null : viewKey))
  }, [])
  // custom style
  const shouldChangeStyle = isCustomStyle || isOpenSideBar || isOpenSearchBar
  const svgColor = shouldChangeStyle ? 'black' : 'white'
  const svgLogoSize = shouldChangeStyle ? 29 : 48
  const svgIconSize = shouldChangeStyle ? 22 : 28

  return (
    <>
      <StyledNavContainer isCustomStyle={shouldChangeStyle}>
        <IconButton
          as="div"
          aria-label="Menu"
          type="secondary"
          onClick={onToggleViewState}
          data-viewkey={VIEW_KEYS.MENU}
        >
          <MenuIcon width={svgIconSize} height={svgIconSize} fill={svgColor} />
        </IconButton>
        <IconLogo height={svgLogoSize} fill={svgColor} />
        <IconButton
          as="div"
          aria-label="Search"
          type="secondary"
          onClick={onToggleViewState}
          data-viewkey={VIEW_KEYS.SEARCH}
        >
          <IconSearch width={svgIconSize} height={svgIconSize} fill={svgColor} />
        </IconButton>
      </StyledNavContainer>
      <SideMenuMobile viewKey={VIEW_KEYS.MENU} isOpen={isOpenSideBar} onCloseSideBar={onToggleViewState} />
      <SearchBarMobile viewKey={VIEW_KEYS.SEARCH} isOpen={isOpenSearchBar} onCloseSearchBar={onToggleViewState} />
    </>
  )
})

NavigationBarMobile.propTypes = {
  isCustomStyle: PropTypes.bool,
}

NavigationBarMobile.defaultProps = {
  isCustomStyle: false,
}

export default NavigationBarMobile
