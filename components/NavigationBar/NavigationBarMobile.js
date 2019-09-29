import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconClose } from '../../static/images/icon-close.svg'
import { ReactComponent as IconMenu } from '../../static/images/icon-menu.svg'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import { ReactComponent as IconLogo } from '../../static/images/logo.svg'

import SideMenuMobile from './SideMenuMobile'
import ButtonLink from '../ButtonLink'
import { NavItemsContainer } from './style'
import { LAYOUT_SPACING } from '../../utils/style'

const IconButton = styled(ButtonLink)`
  border: none;
  border-radius: 50%;
  min-width: unset;
  padding: 10px;
`
const StyledNavContainer = styled(NavItemsContainer)`
  ${props =>
    props.isCustomStyle &&
    css`
      padding: 5px ${LAYOUT_SPACING}px;
    `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBarMobile = props => {
  const { isCustomStyle } = props
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  const MenuIcon = isOpenSideBar ? IconClose : IconMenu
  // menu-icon: onclick handler
  const onClickMenuIcon = () => setIsOpenSideBar(!isOpenSideBar)
  // custom style
  const svgColor = isCustomStyle ? 'black' : 'white'
  const svgLogoSize = isCustomStyle ? 29 : 48
  const svgIconSize = isCustomStyle ? 22 : 28

  return (
    <StyledNavContainer isCustomStyle={isCustomStyle}>
      <IconButton type="secondary">
        <MenuIcon width={svgIconSize} height={svgIconSize} fill={svgColor} onClick={onClickMenuIcon} />
      </IconButton>
      <IconLogo height={svgLogoSize} fill={svgColor} />
      <IconButton type="secondary">
        <IconSearch width={svgIconSize} height={svgIconSize} fill={svgColor} />
      </IconButton>
      <SideMenuMobile isOpen={isOpenSideBar} />
    </StyledNavContainer>
  )
}

NavigationBarMobile.propTypes = {
  isCustomStyle: PropTypes.bool,
}

NavigationBarMobile.defaultProps = {
  isCustomStyle: false,
}

export default NavigationBarMobile
