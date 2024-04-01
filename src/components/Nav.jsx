import { NavLink } from 'react-router-dom'
import logo from '../assets/shared/desktop/logo.svg'
import styled from 'styled-components'
import burgerIcon from '../assets/shared/tablet/icon-hamburger.svg'
import closeIcon from '../assets/shared/tablet/icon-close-menu.svg'
import { useToggleMenu } from '../hooks/useToggleMenu'

const StyledNav = styled.nav`
  display: flex;
  gap: 4rem;

  @media (max-width: 62rem) {
    display: none;
  }

  @media (max-width: 30rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`

const LogoNav = styled.div`
  display: flex;
  gap: 15rem;
  z-index: 999999;

  @media (max-width: 47.93rem) {
    flex-direction: column;
    gap: 4rem;
  }
  @media (max-width: 30rem) {
    line-height: 0;
  }
`

const StyledNavLink = styled(NavLink)`
  color: white;
  letter-spacing: 0.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  transition: var(--main-transition);
  cursor: pointer;

  &:is(.active, :hover) {
    color: var(--main-orange);
  }

  @media (max-width: 30rem) {
    font-size: 1.2rem;
  }
`

const Icons = styled.div`
  cursor: pointer;

  @media (min-width: 62rem) {
    display: none;
  }
`
const CloseIcon = styled.img`
  display: none;
`
const Div = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 30rem) and (max-width: 47.93rem) {
    justify-content: flex-start;
  }

  @media (max-width: 30rem) {
    justify-content: center;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--grey-secondary);
  backdrop-filter: blur(3px);
  z-index: 999;
  transition: all 0.5s;

  @media (min-width: 62rem) {
    display: none;
  }
`

function Nav({ style, setShowTechMenu, isInHeader }) {
  const {
    isOpenButtonShown,
    setIsOpenButtonShown,
    isCloseButtonShown,
    setIsCloseButtonShown,
    showOverlay,
    setShowOverlay,
  } = useToggleMenu()

  function toggleOpenIconAndMenu() {
    setIsOpenButtonShown(open => !open)
    setIsCloseButtonShown(close => !close)
    setShowTechMenu(true)
    setShowOverlay(true)
  }

  function toggleCloseIconAndMenu() {
    setIsCloseButtonShown(close => !close)
    setIsOpenButtonShown(open => !open)
    setShowTechMenu(false)
    setShowOverlay(false)
  }

  return (
    <>
      <LogoNav style={style}>
        <Div>
          {isInHeader && (
            <Icons>
              <img
                style={
                  isOpenButtonShown ? { display: 'block' } : { display: 'none' }
                }
                onClick={toggleOpenIconAndMenu}
                src={burgerIcon}
                alt="Burger Icon"
              />
              <CloseIcon
                style={
                  isCloseButtonShown
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                onClick={toggleCloseIconAndMenu}
                src={closeIcon}
                alt="Close Icon"
              />
            </Icons>
          )}
          <StyledNavLink to="/">
            <img src={logo} alt="Audiophile logo" />
          </StyledNavLink>
        </Div>
        <StyledNav
          // This style is to show 'StyledNav' only in footer and not in mobile header
          style={
            isInHeader
              ? {
                  '@media (maxWidth: 62rem)': {
                    display: 'none',
                  },
                }
              : { display: 'flex', gap: '3rem' }
          }
        >
          <StyledNavLink to="/">HOME</StyledNavLink>
          <StyledNavLink to="/headphones">HEADPHONES</StyledNavLink>
          <StyledNavLink to="/speakers">SPEAKERS</StyledNavLink>
          <StyledNavLink to="/earphones">EARPHONES</StyledNavLink>
        </StyledNav>
      </LogoNav>

      {showOverlay && <Overlay></Overlay>}
    </>
  )
}

export default Nav
