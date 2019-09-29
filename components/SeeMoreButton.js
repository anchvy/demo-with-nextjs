import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconArrow } from '../static/images/icon-arrow.svg'
import COLORS from '../utils/color'
import useDetectDevice from '../hooks/useDetectDevice'
import ButtonLink from './ButtonLink'

const DEFAULT_STYLE = css`
  display: inline-block;
  font-weight: 800;
  margin: 24px auto 0 auto;
`
const Wrapper = styled.div`
  font-style: italic;
  text-align: center;
`
const StyledButtonLink = styled(ButtonLink)`
  // only for mobile
  width: 100%;
  ${DEFAULT_STYLE}
`
const StyledSeeMoreButton = styled(ButtonLink)`
  // only for desktop
  background: transparent;
  border: none;
  color: ${COLORS.LIGHT_GREEN};
  font-size: 24px;
  padding: 10px;

  > svg {
    margin-left: 12px;
  }

  &:hover {
    background: transparent;
  }

  ${DEFAULT_STYLE}
`
/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const SeeMoreButton = React.memo(props => {
  const { isDesktop, ...rest } = useDetectDevice()

  if (!process.browser) return null
  const title = `See more ${props.title}`

  return (
    <Wrapper {...rest}>
      {isDesktop ? (
        <StyledSeeMoreButton>
          {title}
          <IconArrow width={16} height={15} fill={COLORS.LIGHT_GREEN} />
        </StyledSeeMoreButton>
      ) : (
        <StyledButtonLink type="secondary">{title}</StyledButtonLink>
      )}
    </Wrapper>
  )
})

SeeMoreButton.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SeeMoreButton
