import styled from 'styled-components'

import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'

export const NavItemsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 24px ${LAYOUT_SPACING}px;

  ${ON_DESKTOP`
    max-width: calc(1320px + (${LAYOUT_SPACING}px * 2));
    margin: auto;
  `}
`
