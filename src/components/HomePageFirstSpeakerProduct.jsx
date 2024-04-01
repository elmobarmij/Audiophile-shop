import { Link } from 'react-router-dom'
import Button from './Button'
import speakerDesktop from '../assets/home/mobile/image-speaker-zx9.png'
import speakerSmall from '../assets/home/mobile/image-speaker-zx9.png'
import styled from 'styled-components'
import patternBg from '../assets/home/desktop/pattern-circles.svg'

const StyledHomePageFirstSpeakerProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  background:
    url(${patternBg}) -17rem -3.125rem no-repeat,
    var(--main-orange);
  border-radius: var(--main-radius);
  padding: 8rem 14rem 10rem;
  overflow: hidden;

  @media (max-width: 62rem) {
    background:
      url(${patternBg}) 50% -10rem no-repeat,
      var(--main-orange);
    background-size: 60rem 60rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

const H3 = styled.h3`
  color: white;
  font-size: 6rem;
  padding-bottom: 2.4rem;

  @media (max-width: 62rem) {
    font-size: 6rem;
    line-height: 6rem;
    letter-spacing: 0.5rem;
  }
  @media (max-width: 47.93rem) {
    font-size: 5rem;
  }
`
const P = styled.h3`
  font-size: 1.4rem;
  max-width: 35rem;
  color: var(--white-light);
  font-weight: 100;
  letter-spacing: 0.1rem;
  line-height: 1.6;
  margin-bottom: 3.4rem;

  @media (min-width: 47.93rem) and (max-width: 62rem) {
    font-size: 1.2rem;
    max-width: 42rem;
  }
`

const DesktopImage = styled.img`
  transform: translateY(9rem) scale(1.2);

  @media (max-width: 62rem) {
    display: none;
  }
`

const MobileImage = styled.img`
  display: none;

  @media (max-width: 62rem) {
    width: 200px;
    display: block;
  }
`

function HomePageFirstSpeakerProduct() {
  return (
    <StyledHomePageFirstSpeakerProduct>
      <div>
        <DesktopImage src={speakerDesktop} alt="Speaker" />
        <MobileImage src={speakerSmall} alt="Speaker" />
      </div>

      <ProductInfo>
        <H3>
          ZX9 <br /> SPEAKER
        </H3>
        <P>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </P>
        <Link to="speakers/zx9-speaker">
          <Button type="secondary">see product</Button>
        </Link>
      </ProductInfo>
    </StyledHomePageFirstSpeakerProduct>
  )
}

export default HomePageFirstSpeakerProduct
