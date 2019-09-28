import { css } from 'styled-components'

export const NAVIGATION_BAR_HEIGHT = 96
export const LAYOUT_SPACING = 16
export const MOBILE_MAX_WIDTH = 768

export const FLEX_CENTER = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

/**
 * media query for used in styled-component
 */
export const ON_DESKTOP = (...args) => {
  return css`
    @media (min-width: ${MOBILE_MAX_WIDTH + 1}px) {
      ${css(...args)}
    }
  `
}
