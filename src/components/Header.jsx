import { useSelector } from 'react-redux'
import cart from '../assets/shared/desktop/icon-cart.svg'
import styled from 'styled-components'
import Container from './Container'

import Nav from './Nav'
import Cart from '../features/Cart/Cart'
import Modal from './Modal'
import TechMenu from './TechMenu'
import { useEffect, useState } from 'react'

const StyledHeader = styled.header`
  position: relative;
  background-color: #191919;
`
const TechMenuContainer = styled.div`
  position: absolute;
  width: 100%;
  transition: var(--main-transition);
  animation: swipe-down 0.5s ease-in-out;
  padding: 9rem 2rem 4rem;
  background-color: #fff;
  border-bottom-right-radius: var(--main-radius);
  border-bottom-left-radius: var(--main-radius);

  @media (max-width: 68.75rem) {
    padding: 9rem 0 4rem;
    z-index: 999999;
  }

  @media (min-width: 62rem) {
    display: none;
  }

  @media (min-width: 30rem) {
    padding: 6rem 1rem 3rem;
  }

  @keyframes swipe-down {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`

const WithBorder = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #303030;

  // Set logo in header to the center (not the same in footer)
  @media (max-width: 47.93rem) {
    & a:has(img) {
      position: absolute;
      top: 0;
      left: 50%;
      translate: -50%;
    }
  }
`

const CartImg = styled.img`
  cursor: pointer;
`
const Div = styled.div`
  position: relative;
  z-index: 999999;
`
const Span = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -0.5rem;
  right: -1rem;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  width: 1.9rem;
  height: 1.9rem;
  background-color: var(--main-orange);
  border-radius: 50%;
`

function Header() {
  const items = useSelector(state => state.cart.items)
  const [showTechMenu, setShowTechMenu] = useState(false)
  const itemsInCart = items.length

  useEffect(
    () => localStorage.setItem('cartItems', JSON.stringify(items)),
    [items],
  )

  return (
    <StyledHeader>
      <Container type="header">
        <WithBorder>
          <Nav setShowTechMenu={setShowTechMenu} isInHeader={true} />
          <Modal>
            <Modal.Open opens="cart">
              <Div>
                <CartImg src={cart} alt="Cart" />
                {itemsInCart && <Span>{itemsInCart}</Span>}
              </Div>
            </Modal.Open>
            <Modal.Window name="cart">
              <Cart />
            </Modal.Window>
          </Modal>
        </WithBorder>
      </Container>

      {showTechMenu && (
        <TechMenuContainer>
          <TechMenu inHeader={true} />
        </TechMenuContainer>
      )}
    </StyledHeader>
  )
}

export default Header
