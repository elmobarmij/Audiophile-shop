import styled from 'styled-components'
import Container from './Container'
import manWithHeadphoneDesktop from '../assets/shared/desktop/image-best-gear.jpg'
import manWithHeadphoneTablet from '../assets/shared/tablet/image-best-gear.jpg'
import manWithHeadphoneMobile from '../assets/shared/mobile/image-best-gear.jpg'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  place-items: center;
  overflow: hidden;
  margin-bottom: 20rem;

  @media (max-width: 62rem) {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 30rem) {
    margin-bottom: 12rem;
  }
`

const Images = styled.div`
  & img {
    border-radius: var(--main-radius);
    max-width: 100%;
  }
`

const H2 = styled.h2`
  border-radius: var(--main-radius);
  max-width: 100%;
  line-height: 1.2;
  margin-bottom: 4rem;

  @media (max-width: 62rem) {
    max-width: 75rem;
    margin: 0 auto 3rem;
  }

  @media (max-width: 30rem) {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }
`

const Info = styled.div`
  font-size: 2.8rem;
  max-width: 75rem;

  @media (max-width: 62rem) {
    order: 1;
  }
`

const Span = styled.span`
  color: var(--main-orange);
`

const P = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  color: grey;
`

const DesktopImage = styled.img`
  @media (max-width: 62rem) {
    display: none;
  }
`

const TabletImage = styled.img`
  display: none;

  @media (min-width: 30rem) and (max-width: 62rem) {
    display: block;
  }
`

const MobileImage = styled.img`
  display: none;

  @media (max-width: 30rem) {
    display: block;
  }
`

function BestGear() {
  return (
    <div>
      <Container>
        <Grid>
          <Info>
            <H2>
              BRINGING YOU THE <Span>BEST</Span> AUDIO GEAR
            </H2>
            <P>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </P>
          </Info>

          <Images>
            <DesktopImage
              src={manWithHeadphoneDesktop}
              alt="Man With headphone"
            />
            <TabletImage
              src={manWithHeadphoneTablet}
              alt="Man With headphone"
            />
            <MobileImage
              src={manWithHeadphoneMobile}
              alt="Man With headphone"
            />
          </Images>
        </Grid>
      </Container>
    </div>
  )
}

export default BestGear
