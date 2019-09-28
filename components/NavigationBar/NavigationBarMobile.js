import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconClose } from '../../static/images/icon-close.svg'
import { ReactComponent as IconMenu } from '../../static/images/icon-menu.svg'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import { ReactComponent as IconLogo } from '../../static/images/logo.svg'

import SideMenuMobile from './SideMenuMobile'
import ButtonLink from '../ButtonLink'

const IconButton = styled(ButtonLink)`
  border: none;
  border-radius: 50%;
  min-width: unset;
  padding: 10px;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBarMobile = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  const MenuIcon = isOpenSideBar ? IconClose : IconMenu
  // menu-icon: onclick handler
  const onClickMenuIcon = () => setIsOpenSideBar(!isOpenSideBar)

  return (
    <>
      <IconButton type="secondary">
        <MenuIcon width={28} height={28} fill="white" onClick={onClickMenuIcon} />
      </IconButton>
      <IconLogo height={48} />
      <IconButton type="secondary">
        <IconSearch width={28} height={28} fill="white" />
      </IconButton>
      <SideMenuMobile isOpen={isOpenSideBar} />
    </>
  )
}

export default NavigationBarMobile
