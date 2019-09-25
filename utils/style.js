import { css } from 'styled-components'

export const NAVIGATION_BAR_HEIGHT = '96px'
export const LAYOUT_SPACING = '16px'

/**
 * media query for used in styled-component
 */
export const ON_DESKTOP = (...args) => {
  return css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `
}
