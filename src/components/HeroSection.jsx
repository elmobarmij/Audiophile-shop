import { Link } from 'react-router-dom'
import styled from 'styled-components'
import headPhoneSmall from '../assets/home/tablet/image-hero.jpg'
import headPhoneMedium from '../assets/home/mobile/image-hero.jpg'
import headPhone from '../assets/home/desktop/image-hero.jpg'
import Button from './Button'

const DarkBg = styled.div`
  position: relative;
  height: 53rem;
  background-color: #191919;
  padding-bottom: 6rem;
  overflow: hidden;

  @media (min-width: 62rem) {
    padding: 0 2rem 6rem;
  }
`

const Title = styled.span`
  font-size: 1.4rem;
  letter-spacing: 1rem;
  color: var(--grey);
`

const H2 = styled.h2`
  font-size: 5.4rem;
  line-height: 1.2;
  color: white;

  @media (max-width: 47.93rem) {
    font-size: 4rem;
    max-width: 40rem;
  }
`

const P = styled.p`
  max-width: 32rem;
  font-size: 1.4rem;
  line-height: 2;
  font-weight: 100;
  letter-spacing: 0.1rem;
  color: var(--grey);
  margin-bottom: 1rem;

  @media (max-width: 62rem) {
    margin-inline: auto;
  }
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  padding-top: 12rem;
  padding-bottom: 7rem;
  z-index: 10;

  @media (max-width: 62rem) {
    position: absolute;
    top: 28rem;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 110rem;
  margin: 0 auto;

  @media (max-width: 62rem) {
    // 1100px
    display: flex;
    flex-direction: column;
    width: 100rem;
    padding: 2rem;
    text-align: center;
  }
`

const DesktopImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1440px;
  max-height: 729px;
  transform: translate(-30rem, 12rem) scale(2.5);

  @media (max-width: 62rem) {
    display: none;
  }
`

const TabletImage = styled.img`
  width: 450px;
  height: auto;
  position: absolute;
  top: 22rem;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: none;

  @media (min-width: 768px) and (max-width: 992px) {
    display: block;
  }
`

const MobileImage = styled.img`
  display: none;
  width: 600px;
  height: auto;

  @media (max-width: 47.93rem) {
    display: block;
    position: absolute;
    top: 28rem;
    left: 50vw;
    transform: translate(-50%, -50%);
    width: 500px;
  }
`

function HeroSection() {
  return (
    <DarkBg>
      <GridContainer>
        <StyledInfo>
          <Title>NEW PRODUCT</Title>
          <H2>XX99 MARK II HEADPHONES</H2>
          <P>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </P>
          <Link to="headphones/xx99-mark-two-headphones">
            <Button type="primary">See Product</Button>
          </Link>
        </StyledInfo>

        <DesktopImage
          src={headPhone}
          alt="headphones/xx99-mark-two-headphones"
        />
        <TabletImage
          src={headPhoneMedium}
          alt="headphones/xx99-mark-two-headphones"
        />
        <MobileImage
          src={headPhoneSmall}
          alt="headphones/xx99-mark-two-headphones"
        />
      </GridContainer>
    </DarkBg>
  )
}

export default HeroSection
