import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ON_DESKTOP } from '../utils/style'
import { Container } from './Layout'

const Wrapper = styled.div`
  background: url('/static/images/header.jpg');
  background-position: center;
  background-size: cover;
  height: 659px;
  position: relative;

  ${ON_DESKTOP`
    height: 786px;
  `}
`

const Header = props => {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
