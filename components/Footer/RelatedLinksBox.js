import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 11px;
`
const LinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
`
const LinkItem = styled.a`
  color: white;
  margin: 7px 0;
  opacity: 0.5;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const LINKS_CONFIG = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'About us',
    url: '#',
  },
  {
    title: 'Help / FAQ',
    url: '#',
  },
  {
    title: 'Policies',
    url: '#',
  },
  {
    title: 'Contact us',
    url: '#',
  },
]

const RelatedLinksBox = () => {
  return (
    <Wrapper>
      <Title>Company</Title>
      <LinkContainer>
        {LINKS_CONFIG.map(item => (
          <LinkItem key={item.title} href={item.url} aria-label={item.title}>
            {item.title}
          </LinkItem>
        ))}
      </LinkContainer>
    </Wrapper>
  )
}

export default RelatedLinksBox
