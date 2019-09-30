import styled, { css } from 'styled-components'

import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'

export const NavItemsContainer = styled.header`
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 16.57%, rgba(0, 0, 0, 0.4) 100%);
  display: flex;
  justify-content: space-between;
  padding: 24px ${LAYOUT_SPACING}px;
  position: fixed;
  width: 100%;
  z-index: 99;

  ${ON_DESKTOP`
    max-width: calc(1320px + (${LAYOUT_SPACING}px * 2));
    margin: auto;
  `}

  ${props =>
    props.isCustomStyle &&
    css`
      background: white;
    `}

  ${props =>
    props.isHidden &&
    css`
      display: none;
    `}
`

export const WrapperOverlayMobile = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: none;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  ${props =>
    props.isOpen &&
    css`
      display: initial;
    `}
`
