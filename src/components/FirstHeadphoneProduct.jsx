import Button from './Button'
import Container from './Container'
import headphoneDesktop from '../assets/category-headphones/desktop/image-xx99-mark-two.jpg'
import headphoneTablet from '../assets/category-headphones/tablet/image-xx99-mark-two.jpg'
import headphoneMobile from '../assets/category-headphones/mobile/image-xx99-mark-two.jpg'
import ReusableProductImage from './ReusableProductImage'
import ReusableNewProduct from './ReusableNewProduct'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GridTwoColsColumn from './GridTwoColsColumn'

const Product = styled.div`
  margin-bottom: 12rem;
`

function FirstHeadphoneProduct() {
  return (
    <Product>
      <Container>
        <GridTwoColsColumn>
          <ReusableProductImage>
            <img src={headphoneDesktop} alt="New Headphone" />
            <img src={headphoneTablet} alt="New Headphone" />
            <img src={headphoneMobile} alt="New Headphone" />
          </ReusableProductImage>
          <div>
            <ReusableNewProduct />
            <ReusableProductTitle>
              XX99 MARK II <br />
              HEADPHONES
            </ReusableProductTitle>
            <ReusableProductDescription>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </ReusableProductDescription>

            <Link to="/headphones/xx99-mark-two-headphones">
              <Button>see product</Button>
            </Link>
          </div>
        </GridTwoColsColumn>
      </Container>
    </Product>
  )
}

export default FirstHeadphoneProduct
