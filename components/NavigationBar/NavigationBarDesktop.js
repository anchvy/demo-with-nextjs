import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import ButtonLink from '../ButtonLink'
import { NavItemsContainer } from './style'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import { ReactComponent as IconLogo } from '../../static/images/logo.svg'

import COLORS from '../../utils/color'
import { LAYOUT_SPACING } from '../../utils/style'

const ActionBox = styled.div`
  flex-shrink: 0;

  > *:not(:last-child) {
    margin-right: 20px;
  }
`
const SearchBox = styled.div`
  flex: 1 0 auto;
  margin: 0 60px;
`
const SearchContainer = styled.div`
  border: 1px solid ${COLORS.GRAY};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 359px;
  overflow: hidden;
`
const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${COLORS.GRAY};
  font-size: 16px;
  padding: 10px 20px;
  flex-basis: 100%;
`
const SearchButton = styled(ButtonLink)`
  border-radius: 0;
  min-width: 44px;
`
const StyledNavContainer = styled(NavItemsContainer)`
  ${props =>
    props.isCustomStyle &&
    css`
      padding: 5px ${LAYOUT_SPACING}px;

      svg {
        fill: black;
      }
    `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBarDesktop = props => {
  const { isCustomStyle } = props
  const [isScrollUp, setIsScrollUp] = useState(false)

  useEffect(() => {
    let prevOffetY = window.pageYOffset
    // scroll handler
    const onScroll = () => {
      const offsetY = window.pageYOffset

      if (prevOffetY - offsetY < 0) setIsScrollUp(false)
      else setIsScrollUp(true)

      prevOffetY = offsetY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <StyledNavContainer isCustomStyle={isCustomStyle}>
      <IconLogo height={48} fill="white" />
      <SearchBox>
        <SearchContainer>
          <SearchInput placeholder="Search...." />
          <SearchButton>
            <IconSearch width={14} height={14} fill="white" />
          </SearchButton>
        </SearchContainer>
      </SearchBox>
      <ActionBox>
        <ButtonLink>Sign in</ButtonLink>
        <ButtonLink type="secondary">Sign up</ButtonLink>
      </ActionBox>
    </StyledNavContainer>
  )
}

NavigationBarDesktop.propTypes = {
  isCustomStyle: PropTypes.bool,
}

NavigationBarDesktop.defaultProps = {
  isCustomStyle: false,
}

export default NavigationBarDesktop
