import { useChosenProduct } from '../hooks/useChosenProduct'
import { updateImgPath } from '../utils/helpers'
import styled from 'styled-components'
import Container from './Container'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-bottom: 15rem;
  gap: 2rem;

  @media (max-width: 30rem) {
    display: flex;
    flex-direction: column;
  }
`

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;

  @media (min-width: 30rem) {
    & img {
      display: none;
    }

    & img:first-child,
    & img:nth-child(3) {
      display: block;
    }
  }

  @media (max-width: 30rem) {
    & img {
      display: none;
    }

    & img:nth-child(2),
    & img:nth-child(4) {
      display: block;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--main-radius);
`

const Picture = styled.div`
  @media (min-width: 30rem) {
    &:first-child {
      display: block;
    }

    & img:last-child {
      display: none;
    }
  }

  @media (max-width: 30rem) {
    & img:nth-of-type(1) {
      display: none;
    }

    &:last-child {
      display: block;
    }
  }
`

function Gallery() {
  const {
    gallery: {
      first: { desktop: desktopFirstImg, mobile: mobileFirstImg } = {},
      second: { desktop: desktopSecondImg, mobile: mobileSecondImg } = {},
      third: { desktop: desktopThirdImg, mobile: mobileThirdImg } = {},
    } = {},
    shortName,
  } = useChosenProduct() || {}

  return (
    <Container>
      <Grid>
        <Div>
          <Image src={updateImgPath(desktopFirstImg)} alt={shortName} />
          <Image src={updateImgPath(mobileFirstImg)} alt={shortName} />
          <Image src={updateImgPath(desktopSecondImg)} alt={shortName} />
          <Image src={updateImgPath(mobileSecondImg)} alt={shortName} />
        </Div>
        <Picture>
          <Image src={updateImgPath(desktopThirdImg)} alt={shortName} />
          <Image src={updateImgPath(mobileThirdImg)} alt={shortName} />
        </Picture>
      </Grid>
    </Container>
  )
}

export default Gallery
