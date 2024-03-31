import { Link } from 'react-router-dom'
import Button from './Button'
import Container from './Container'
import headphoneDesktop from '../assets/category-headphones/desktop/image-xx59.jpg'
import headphoneTablet from '../assets/category-headphones/tablet/image-xx59.jpg'
import headphoneMobile from '../assets/category-headphones/mobile/image-xx59.jpg'
import ReusableProductImage from './ReusableProductImage'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'

import styled from 'styled-components'
import GridTwoColsColumn from './GridTwoColsColumn'

const Product = styled.div`
  margin-bottom: 12rem;
`

function ThirdHeadphoneProduct() {
  return (
    <Product>
      <Container>
        <GridTwoColsColumn>
          <ReusableProductImage>
            <img src={headphoneDesktop} alt="Third Headphone" />
            <img src={headphoneTablet} alt="Third Headphone" />
            <img src={headphoneMobile} alt="Third Headphone" />
          </ReusableProductImage>
          <div>
            <ReusableProductTitle>XX59 HEADPHONES</ReusableProductTitle>
            <ReusableProductDescription>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </ReusableProductDescription>

            <Link to="/headphones/xx59-headphones">
              <Button>see product</Button>
            </Link>
          </div>
        </GridTwoColsColumn>
      </Container>
    </Product>
  )
}

export default ThirdHeadphoneProduct
