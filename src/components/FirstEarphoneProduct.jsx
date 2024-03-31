import Button from './Button'
import Container from './Container'
import newEarphoneDesktop from '../assets/category-earphones/desktop/image-yx1-earphones.jpg'
import newEarphoneTablet from '../assets/category-earphones/tablet/image-yx1-earphones.jpg'
import newEarphoneMobile from '../assets/category-earphones/mobile/image-yx1-earphones.jpg'
import ReusableNewProduct from './ReusableNewProduct'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'
import ReusableProductImage from './ReusableProductImage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GridTwoColsColumn from './GridTwoColsColumn'

const Product = styled.div`
  margin-bottom: 12rem;
`

function FirstSpeakerProduct() {
  return (
    <Product>
      <Container>
        <GridTwoColsColumn>
          <ReusableProductImage>
            <img src={newEarphoneDesktop} alt="New Earphone" />
            <img src={newEarphoneTablet} alt="New Earphone" />
            <img src={newEarphoneMobile} alt="New Earphone" />
          </ReusableProductImage>
          <div>
            <ReusableNewProduct />
            <ReusableProductTitle>
              YX1 WIRELESS <br /> EARPHONES
            </ReusableProductTitle>
            <ReusableProductDescription>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </ReusableProductDescription>

            <Link to="/earphones/yx1-earphones">
              <Button>see product</Button>
            </Link>
          </div>
        </GridTwoColsColumn>
      </Container>
    </Product>
  )
}

export default FirstSpeakerProduct
