import styled from 'styled-components'
import earphoneDesktop from '../assets/home/desktop/image-earphones-yx1.jpg'
import earphoneTablet from '../assets/home/tablet/image-earphones-yx1.jpg'
import earphoneMobile from '../assets/home/mobile/image-earphones-yx1.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'

const StyledEarPhoneProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  overflow: hidden;

  @media (max-width: 30rem) {
    display: flex;
    flex-direction: column;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;
  border-radius: var(--main-radius);
  background-color: var(--grey-light);

  @media (min-width: 47.93rem) and (max-width: 62rem) {
    padding: 6rem;
  }

  @media (max-width: 47.93rem) {
    padding: 3rem;
  }
`

const H3 = styled.h3`
  font-size: 2.8rem;
  color: var(--main-black);
  margin-bottom: 3rem;
`

const Images = styled.div`
  & img {
    width: 100%;
    overflow: hidden;
    border-radius: var(--main-radius);
  }
`
const DesktopImage = styled.img`
  @media (max-width: 62rem) {
    display: none;
  }
`

const TabletImage = styled.img`
  display: none;

  @media (min-width: 47.93rem) and (max-width: 62rem) {
    width: 400px;
    display: block;
  }
`

const MobileImage = styled.img`
  height: 100%;
  display: none;

  @media (max-width: 47.93rem) {
    display: block;
  }
`

function EarPhoneProduct() {
  return (
    <StyledEarPhoneProduct>
      <Images>
        <DesktopImage src={earphoneDesktop} alt="Earphone" />
        <TabletImage src={earphoneTablet} alt="Earphone" />
        <MobileImage src={earphoneMobile} alt="Earphone" />
      </Images>
      <Info>
        <H3>YX1 EARPHONES</H3>
        <Link to="earphones/yx1-earphones">
          <Button type="transparent">see product</Button>
        </Link>
      </Info>
    </StyledEarPhoneProduct>
  )
}

export default EarPhoneProduct
