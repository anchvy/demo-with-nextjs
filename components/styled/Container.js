import styled from 'styled-components'
import { ON_DESKTOP, LAYOUT_SPACING } from '../../utils/style'

const Container = styled.div`
  padding: 0 ${LAYOUT_SPACING}px;
  width: 100%;

  ${ON_DESKTOP`
    margin: auto;
    max-width: calc(1175px + (${LAYOUT_SPACING}px * 2));
  `}
`

export default Container
