import styled from 'styled-components'
import Container from './Container'
import arrowImg from '../assets/shared/desktop/icon-arrow-right.svg'

import { techMenu } from '../constants/techMenu'
import { NavLink } from 'react-router-dom'

const TechMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 62rem) {
    & {
      gap: 4rem;
    }
  }

  @media (max-width: 62rem) {
    & {
      gap: 1rem;
    }
  }

  @media (max-width: 30rem) {
    & {
      grid-template-columns: 1fr;
      gap: 6rem;
    }
  }
`

// Customize component margin if its located on header,
// else we make a big margin if it's on the homepage

const Div = styled.div``

const Button = styled.button`
  transform: translateY(-5rem);
  border: none;
  display: inline-flex;
  gap: 1rem;
  color: rgba(0, 0, 0, 0.5);
  transition: var(--main-transition);
`

const Image = styled.img`
  width: 13rem;
  transform: translateY(-5rem);
`

const Item = styled.div`
  height: 21.5rem;
  text-align: center;
  background-color: var(--grey-light);
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover button:has(img) {
    color: var(--main-orange);
  }

  @media (max-width: 62rem) {
    & {
      height: 18rem;
    }
  }
`
const H3 = styled.h3`
  color: var(--main-black);
  transform: translateY(-5rem);
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 62rem) {
    & {
      font-size: 1.6rem;
    }
  }
`

function TechMenu({ inHeader }) {
  return (
    <Div
      style={
        inHeader
          ? { margin: '0' }
          : { marginTop: '20rem', marginBottom: '12rem' }
      }
    >
      <Container>
        <TechMenuContainer>
          {techMenu.map(tech => (
            <TechItem tech={tech} key={tech.id} />
          ))}
        </TechMenuContainer>
      </Container>
    </Div>
  )
}

function TechItem({ tech }) {
  return (
    <NavLink to={tech.path}>
      <Item>
        <Image src={tech.img} alt={tech.title} />
        <H3>{tech.title}</H3>
        <Button>
          SHOP <img src={arrowImg} alt="Arrow Right" />
        </Button>
      </Item>
    </NavLink>
  )
}

export default TechMenu
