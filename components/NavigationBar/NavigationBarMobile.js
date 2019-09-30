import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import { ReactComponent as IconClose } from '../../static/images/icon-close.svg'
import { ReactComponent as IconMenu } from '../../static/images/icon-menu.svg'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import { ReactComponent as IconLogo } from '../../static/images/logo.svg'

import ButtonLink from '../ButtonLink'
import { NavItemsContainer } from './styled'
import { LAYOUT_SPACING } from '../../utils/style'

const SideMenuMobile = dynamic(import('./SideMenuMobile'))
const IconButton = styled(ButtonLink)`
  border: none;
  border-radius: 50%;
  min-width: unset;
  padding: 10px;

  ${props =>
    props.isHidden &&
    css`
      visibility: hidden;
    `}
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

const NavigationBarMobile = React.memo(props => {
  const { isCustomStyle } = props
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  const MenuIcon = isOpenSideBar ? IconClose : IconMenu
  // menu-icon: onclick handler
  const onClickMenuIcon = () => setIsOpenSideBar(!isOpenSideBar)
  // custom style
  const shouldChangeStyle = isCustomStyle || isOpenSideBar
  const svgColor = shouldChangeStyle ? 'black' : 'white'
  const svgLogoSize = shouldChangeStyle ? 29 : 48
  const svgIconSize = shouldChangeStyle ? 22 : 28

  return (
    <StyledNavContainer isCustomStyle={isCustomStyle || isOpenSideBar}>
      <IconButton type="secondary">
        <MenuIcon width={svgIconSize} height={svgIconSize} fill={svgColor} onClick={onClickMenuIcon} />
      </IconButton>
      <IconLogo height={svgLogoSize} fill={svgColor} />
      <IconButton type="secondary" isHidden={isOpenSideBar}>
        <IconSearch width={svgIconSize} height={svgIconSize} fill={svgColor} />
      </IconButton>
      <SideMenuMobile isOpen={isOpenSideBar} onCloseSideBar={onClickMenuIcon} />
    </StyledNavContainer>
  )
})

NavigationBarMobile.propTypes = {
  isCustomStyle: PropTypes.bool,
}

NavigationBarMobile.defaultProps = {
  isCustomStyle: false,
}

export default NavigationBarMobile
