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
  padding-top: 40px;
  padding-bottom: 40px;

  ${ON_DESKTOP`
    padding-top: 60px;
    padding-bottom: 60px;
  `}
`
const ContentBox = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-gap: 40px;
  margin-bottom: 20px;
  padding-bottom: 20px;

  ${ON_DESKTOP`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
    margin-bottom: 25px;
    padding-bottom: 40px;
  `}
`
const CompanyLabel = styled.div`
  color: white;
  font-size: 12px;
  opacity: 0.4;
  text-align: center;
`
/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const Footer = () => (
  <Wrapper>
    <StyledContainer>
      <ContentBox>
        <ContactBox />
        <TagsBox />
        <RelatedLinksBox />
      </ContentBox>
      <CompanyLabel>© 2018 Mewala Travel Blog. All rights reserved. </CompanyLabel>
    </StyledContainer>
  </Wrapper>
)

export default Footer
