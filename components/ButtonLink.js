import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import COLORS from '../utils/color'

const StyledButton = styled.a`
  align-items: center;
  background: ${COLORS.LIGHT_GREEN};
  border: 1px solid ${COLORS.LIGHT_GREEN};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-style: italic;
  justify-content: center;
  min-width: 150px;
  padding: 10px 0;

  &:hover {
    background: ${COLORS.DARK_GREEN};
  }

  ${props =>
    props.isSecondary &&
    `
      color: ${COLORS.DARK_BLUE};
      background: transparent;

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const ButtonLink = React.memo(props => {
  const { type, ...rest } = props

  return (
    <StyledButton isSecondary={type === 'secondary'} {...rest}>
      {props.children}
    </StyledButton>
  )
})

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  type: PropTypes.oneOf(['primary', 'secondary']),
}

ButtonLink.defaultProps = {
  children: null,
  type: 'primary',
}

export default ButtonLink
