import { css } from 'styled-components'
import { getImagePath } from './path'

export const NAVIGATION_BAR_HEIGHT = 96
export const LAYOUT_SPACING = 16
export const MOBILE_MAX_WIDTH = 768

export const LINE_CLAMP = numberOfLine => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${numberOfLine};
  -webkit-box-orient: vertical;
`

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

/**
 * Generate image srcset value
 * @param {string} filename
 * @returns {string}
 */
export const getImageSrcset = filename => `${getImagePath(filename, true)} 100w, ${getImagePath(filename)} 500w`
