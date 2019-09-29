import React from 'react'
import styled from 'styled-components'
import Container from '../styled/Container'
import { ON_DESKTOP } from '../../utils/style'
import COLORS from '../../utils/color'

import ContactBox from './ContactBox'
import TagsBox from './TagsBox'
import RelatedLinksBox from './RelatedLinksBox'

const Wrapper = styled.footer`
  background: ${COLORS.DARK_BLUE};
`
const StyledContainer = styled(Container)`
  display: grid;
  grid-gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;

  ${ON_DESKTOP`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
    padding-top: 60px;
    padding-bottom: 60px;
  `}
`
/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Footer = () => (
  <Wrapper>
    <StyledContainer>
      <ContactBox />
      <TagsBox />
      <RelatedLinksBox />
    </StyledContainer>
  </Wrapper>
)

export default Footer
