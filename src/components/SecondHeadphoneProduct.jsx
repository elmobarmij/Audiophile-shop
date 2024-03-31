import { Link } from 'react-router-dom'
import Button from './Button'
import Container from './Container'
import headphoneDesktop from '../assets/category-headphones/desktop/image-xx99-mark-one.jpg'
import headphoneTablet from '../assets/category-headphones/tablet/image-xx99-mark-one.jpg'
import headphoneMobile from '../assets/category-headphones/mobile/image-xx99-mark-one.jpg'
import ReusableProductImage from './ReusableProductImage'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'
import styled from 'styled-components'
import GridTwoColsColumn from './GridTwoColsColumn'

const Product = styled.div`
  margin-bottom: 12rem;
`

function SecondHeadphoneProduct() {
  return (
    <Product>
      <Container>
        <GridTwoColsColumn direction="reverse">
          <ReusableProductImage>
            <img src={headphoneDesktop} alt="Second Headphone" />
            <img src={headphoneTablet} alt="Second Headphone" />
            <img src={headphoneMobile} alt="Second Headphone" />
          </ReusableProductImage>
          <div>
            <ReusableProductTitle>
              XX99 MARK I
              <br />
              HEADPHONES
            </ReusableProductTitle>
            <ReusableProductDescription>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </ReusableProductDescription>

            <Link to="/headphones/xx99-mark-one-headphones">
              <Button>see product</Button>
            </Link>
          </div>
        </GridTwoColsColumn>
      </Container>
    </Product>
  )
}

export default SecondHeadphoneProduct
