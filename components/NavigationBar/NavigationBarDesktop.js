import React from 'react'
import styled from 'styled-components'

import ButtonLink from '../ButtonLink'
import { ReactComponent as IconSearch } from '../../static/images/icon-search.svg'
import { ReactComponent as IconLogo } from '../../static/images/logo.svg'

import COLORS from '../../utils/color'

const ActionBox = styled.div`
  flex-shrink: 0;

  > *:not(:last-child) {
    margin-right: 20px;
  }
`
const SearchBox = styled.div`
  flex-grow: 1;
  margin: 0 60px;
`
const SearchContainer = styled.div`
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 359px;
  overflow: hidden;
`
const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${COLORS.LIGHT_GRAY};
  font-size: 16px;
  padding: 10px 20px;
  flex-basis: 100%;
`
const SearchButton = styled(ButtonLink)`
  border-radius: 0;
  flex-shrink: 0;
  min-width: 44px;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const NavigationBarDesktop = () => (
  <>
    <IconLogo height={48} />
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
  </>
)

export default NavigationBarDesktop
