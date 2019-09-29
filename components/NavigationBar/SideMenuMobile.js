import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import useData from '../../hooks/useData'
import COLORS from '../../utils/color'
import ButtonLink from '../ButtonLink'

const CONTAINER_WIDTH = '80vw'
const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: -100vw;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;

  ${props =>
    props.isOpen &&
    css`
      left: 0;
    `}
`
const Container = styled.div`
  background: white;
  height: 100%;
  padding: 0 20px;
  padding-top: 50px;
  width: ${CONTAINER_WIDTH};
`
const ItemBox = styled.div`
  margin-bottom: 40px;
`
const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${COLORS.DARK_BLUE};
  display: flex;
  flex-direction: column;
  font-style: italic;
  padding: 20px 0;

  &:hover {
    padding-left: 20px;

    :before {
      background: ${COLORS.LIGHT_GREEN};
      content: ' ';
      display: block;
      height: 20px;
      left: 20px;
      position: absolute;
      width: 3px;
    }
  }
`
const SubItem = styled(Item)`
  display: flex;
  font-style: unset;
  margin: 0 20px;

  &:hover {
    :before {
      left: 40px;
    }
  }
`
const ActionBox = styled.div`
  display: grid;
  grid-gap: 12px;
  margin-bottom: 20px;
  width: 100%;
`
const CompanyLabel = styled.div`
  color: black;
  font-size: 10px;
  opacity: 0.2;
  text-align: center;
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const SideMenuMobile = React.memo(props => {
  const { isOpen, onCloseSideBar } = props
  const data = useData()
  // freeze body when sidebar is activate
  const { body } = document
  body.style.overflow = isOpen ? 'hidden' : 'initial'
  // stop propagation for container
  const onContainerClick = event => event.stopPropagation()

  return (
    <Wrapper isOpen={isOpen} onClick={onCloseSideBar}>
      <Container onClick={onContainerClick}>
        <ItemBox>
          <Item>Home</Item>
          <Item>Recommended Article</Item>
          {data.map(category => (
            <SubItem key={category.categoryName}>{category.categoryName}</SubItem>
          ))}
          <Item>Latest Post</Item>
        </ItemBox>
        <ActionBox>
          <ButtonLink type="primary">Sign In</ButtonLink>
          <ButtonLink type="secondary">Sign Up</ButtonLink>
        </ActionBox>
        <CompanyLabel>© 2018 Mewala Travel Blog. All rights reserved. </CompanyLabel>
      </Container>
    </Wrapper>
  )
})

SideMenuMobile.propTypes = {
  isOpen: PropTypes.bool,
  onCloseSideBar: PropTypes.func,
}

SideMenuMobile.defaultProps = {
  isOpen: false,
  onCloseSideBar: () => null,
}

export default SideMenuMobile
