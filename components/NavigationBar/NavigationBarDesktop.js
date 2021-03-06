import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import ButtonLink from '../ButtonLink'
import { NavItemsContainer } from './styled'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'

import COLORS from '../../utils/color'
import Logo from '../Logo'

const ActionBox = styled.div`
  flex-shrink: 0;

  > *:not(:last-child) {
    margin-right: 20px;
  }
`
const SearchBox = styled.div`
  flex: 1 0 auto;
  margin: 0 60px 0 20px;
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
      ${SearchInput} {
        color: black;
      }
    `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBarDesktop = React.memo(props => {
  const { isCustomStyle } = props

  return (
    <StyledNavContainer isCustomStyle={isCustomStyle}>
      <Logo width={55} />
      <SearchBox>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search...." />
          <SearchButton>
            <IconSearch width={14} height={14} fill="white" />
          </SearchButton>
        </SearchContainer>
      </SearchBox>
      <ActionBox>
        <ButtonLink aria-label="Sign in">Sign in</ButtonLink>
        <ButtonLink type="secondary" aria-label="Sign up">
          Sign up
        </ButtonLink>
      </ActionBox>
    </StyledNavContainer>
  )
})

NavigationBarDesktop.propTypes = {
  isCustomStyle: PropTypes.bool,
}

NavigationBarDesktop.defaultProps = {
  isCustomStyle: false,
}

export default NavigationBarDesktop
