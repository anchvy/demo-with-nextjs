import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IconLogo } from '../../static/images/logo.svg'
import { ReactComponent as IconFacebook } from '../../static/images/icon-facebook.svg'
import { ReactComponent as IconInstagram } from '../../static/images/icon-instagram.svg'
import { ReactComponent as IconTwitter } from '../../static/images/icon-twitter.svg'
import { ReactComponent as IconGooglePlus } from '../../static/images/icon-google-plus.svg'
import COLORS from '../../utils/color'
import { fetchConfig } from '../../utils/fetch'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`
const Description = styled.span`
  color: white;
  margin: 30px 0;
  opacity: 0.5;
`
const SocialMediaBox = styled.nav`
  display: flex;
`
const SocialMediaLink = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding: 10px;

  > svg {
    fill: white;
    height: 19px;
    width: 19px;
  }

  &:not(:last-child) {
    margin-right: 19px;
  }

  &:hover {
    border-color: ${COLORS.LIGHT_GREEN};
    > svg {
      fill: ${COLORS.LIGHT_GREEN};
    }
  }
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const SOCIAL_MEDIA_CONFIG = [
  {
    key: 'facebook',
    url: '#',
    icon: <IconFacebook />,
  },
  {
    key: 'twitter',
    url: '#',
    icon: <IconTwitter />,
  },
  {
    key: 'instagram',
    url: '#',
    icon: <IconInstagram />,
  },
  {
    key: 'google-plus',
    url: '#',
    icon: <IconGooglePlus />,
  },
]

const ContactBox = () => {
  return (
    <Wrapper>
      <IconLogo height={48} fill="white" />
      <Description>{fetchConfig('description')}</Description>
      <SocialMediaBox>
        {SOCIAL_MEDIA_CONFIG.map(item => (
          <SocialMediaLink key={item.key} href={item.url} aria-label={item.key}>
            {item.icon}
          </SocialMediaLink>
        ))}
      </SocialMediaBox>
    </Wrapper>
  )
}

export default ContactBox
