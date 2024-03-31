import styled from 'styled-components'
import Container from './Container'
import Button from './Button'

import { Link } from 'react-router-dom'
import { useChosenProduct } from '../hooks/useChosenProduct'
import { updateImgPath } from '../utils/helpers'

const Grid = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (min-width: 30rem) and (max-width: 62rem) {
    gap: 1.5rem;
  }

  @media (max-width: 47.93rem) {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const H2 = styled.h2`
  font-size: 3rem;
  color: var(--main-black);
  margin-bottom: 6rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;

  @media (max-width: 47.93rem) {
    font-size: 2.6rem;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--main-radius);
  overflow: hidden;

  @media (min-width: 62rem) {
    &:not(:first-child) {
      display: none;
    }
  }

  @media (min-width: 47.93rem) and (max-width: 62rem) {
    &:not(:nth-of-type(2)) {
      display: none;
    }
  }

  @media (max-width: 47.93rem) {
    &:not(:nth-of-type(3)) {
      display: none;
    }
  }
`
const P = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`

function YouMayAlsoLike() {
  const { others } = useChosenProduct() || {}

  return (
    <Container>
      <H2>You May Also Like</H2>

      <Grid>
        {others?.map(item => (
          <Div key={item.name}>
            <Image
              src={updateImgPath(item.image.desktop)}
              alt={item.image.name}
            />
            <Image
              src={updateImgPath(item.image.tablet)}
              alt={item.image.name}
            />
            <Image
              src={updateImgPath(item.image.mobile)}
              alt={item.image.name}
            />
            <P>{item.name}</P>
            <Link to={`/${item.slug}`}>
              <Button $position="center">see product</Button>
            </Link>
          </Div>
        ))}
      </Grid>
    </Container>
  )
}

export default YouMayAlsoLike
