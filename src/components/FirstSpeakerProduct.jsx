import { Link } from 'react-router-dom'
import Button from './Button'
import Container from './Container'
import speakerDesktop from '../assets/category-speakers/desktop/image-zx9.jpg'
import speakerTablet from '../assets/category-speakers/tablet/image-zx9.jpg'
import speakerMobile from '../assets/category-speakers/mobile/image-zx9.jpg'
import ReusableProductImage from './ReusableProductImage'
import ReusableNewProduct from './ReusableNewProduct'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'
import styled from 'styled-components'
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
            <img src={speakerDesktop} alt="Third Headphone" />
            <img src={speakerTablet} alt="Third Headphone" />
            <img src={speakerMobile} alt="Third Headphone" />
          </ReusableProductImage>
          <div>
            <ReusableNewProduct />
            <ReusableProductTitle>ZX9 SPEAKER</ReusableProductTitle>
            <ReusableProductDescription>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </ReusableProductDescription>

            <Link to="/speakers/zx9-speaker">
              <Button>see product</Button>
            </Link>
          </div>
        </GridTwoColsColumn>
      </Container>
    </Product>
  )
}

export default FirstSpeakerProduct
