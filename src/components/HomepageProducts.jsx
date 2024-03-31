import styled from 'styled-components'
import Container from './Container'
import EarPhoneProduct from './EarPhoneProduct'
import HomePageFirstSpeakerProduct from './HomePageFirstSpeakerProduct'
import HomePageSecondSpeakerProduct from './HomePageSecondSpeakerProduct'

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 10rem;
`

function HomepageProducts() {
  return (
    <div>
      <Container>
        <Products>
          <HomePageFirstSpeakerProduct />
          <HomePageSecondSpeakerProduct />
          <EarPhoneProduct />
        </Products>
      </Container>
    </div>
  )
}

export default HomepageProducts
