import styled from 'styled-components'
import speakerDesktop from '../assets/home/desktop/image-speaker-zx7.jpg'
import speakerTablet from '../assets/home/tablet/image-speaker-zx7.jpg'
import speakerMobile from '../assets/home/mobile/image-speaker-zx7.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'

const StyledHomePageSecondSpeakerProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem;
  background: url(${speakerDesktop}) no-repeat;
  background-size: cover;
  border-radius: var(--main-radius);
  overflow: hidden;

  @media (min-width: 47.93rem) and (max-width: 62rem) {
    height: 20rem;
    justify-content: center;
    background: url(${speakerTablet}) no-repeat;
    background-size: cover;
  }

  @media (max-width: 47.93rem) {
    background-position: 30% 50%;
    justify-content: center;
    background-size: cover;
    margin: 0;
  }
  @media (max-width: 30rem) {
    height: 20rem;
    background: url(${speakerMobile}) no-repeat;
    background-size: cover;
    justify-content: center;
    padding: 5rem;
  }
`

const H3 = styled.h3`
  font-size: 2.8rem;
  color: var(--main-black);
  padding-bottom: 3rem;
`

function HomePageSecondSpeakerProduct() {
  return (
    <StyledHomePageSecondSpeakerProduct>
      <div>
        <H3>ZX7 SPEAKER</H3>
        <Link to="speakers/zx7-speaker">
          <Button type="transparent">see product</Button>
        </Link>
      </div>
    </StyledHomePageSecondSpeakerProduct>
  )
}

export default HomePageSecondSpeakerProduct
