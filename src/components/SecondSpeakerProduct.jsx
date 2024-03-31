import { Link } from 'react-router-dom'
import Button from './Button'
import Container from './Container'
import speakerDesktop from '../assets/category-speakers/desktop/image-zx7.jpg'
import speakerTablet from '../assets/category-speakers/tablet/image-zx7.jpg'
import speakerMobile from '../assets/category-speakers/mobile/image-zx7.jpg'
import ReusableProductImage from './ReusableProductImage'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'
import styled from 'styled-components'
import GridTwoColsColumn from './GridTwoColsColumn'

const Product = styled.div`
  margin-bottom: 12rem;
`

function SecondSpeakerProduct() {
  return (
    <Product>
      <Container>
        <GridTwoColsColumn direction="reverse">
          <ReusableProductImage>
            <img src={speakerDesktop} alt="Second Speaker" />
            <img src={speakerTablet} alt="Second Speaker" />
            <img src={speakerMobile} alt="Second Speaker" />
          </ReusableProductImage>
          <div>
            <ReusableProductTitle>ZX7 SPEAKER</ReusableProductTitle>
            <ReusableProductDescription>
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </ReusableProductDescription>

            <Link to="/speakers/zx7-speaker">
              <Button>see product</Button>
            </Link>
          </div>
        </GridTwoColsColumn>
      </Container>
    </Product>
  )
}

export default SecondSpeakerProduct
