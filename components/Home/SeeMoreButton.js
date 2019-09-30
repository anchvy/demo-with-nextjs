import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as IconArrow } from '../../static/images/icon-arrow.svg'
import COLORS from '../../utils/color'
import ButtonLink from '../ButtonLink'
import { DetectDeviceContext } from '../../contexts/DetectDeviceProvider'

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
  const { isDesktop } = useContext(DetectDeviceContext)
  const { title, ...rest } = props
  const displayedTitle = `See more ${title}`

  return (
    <Wrapper {...rest}>
      {isDesktop ? (
        <StyledSeeMoreButton>
          {displayedTitle}
          <IconArrow width={16} height={15} fill={COLORS.LIGHT_GREEN} />
        </StyledSeeMoreButton>
      ) : (
        <StyledButtonLink aria-label={displayedTitle} type="secondary">
          {displayedTitle}
        </StyledButtonLink>
      )}
    </Wrapper>
  )
})

SeeMoreButton.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SeeMoreButton
