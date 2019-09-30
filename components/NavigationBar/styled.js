import styled, { css } from 'styled-components'

import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'

export const CUSTOM_NAVBAR_HEIGHT = 58
export const WITH_CUSTOM_STYLE_BG = css`
  ${props =>
    props.isCustomStyle &&
    css`
      background: white;
      height: ${CUSTOM_NAVBAR_HEIGHT}px;
      padding: 5px ${LAYOUT_SPACING}px;
    `}
`
export const NavItemsContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px ${LAYOUT_SPACING}px;
  position: absolute;
  width: 100%;
  z-index: 2;

  ${ON_DESKTOP`
    max-width: calc(1320px + (${LAYOUT_SPACING}px * 2));
    margin: auto;
  `}

  ${WITH_CUSTOM_STYLE_BG}
`
export const WrapperOverlayMobile = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: none;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  ${props =>
    props.isOpen &&
    css`
      display: initial;
    `}
`
