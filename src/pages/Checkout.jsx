import { useScrollToTop } from '../hooks/useScrollToTop'
import Footer from '../components/Footer'
import GoBackButton from '../components/GoBackBtn'
import Header from '../components/Header'
import CheckoutForm from '../features/Checkout/CheckoutForm'
import CheckoutSummary from '../features/Checkout/CheckoutSummary'
import styled from 'styled-components'
import Container from '../components/Container'

const Operations = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 15rem;

  @media (max-width: 62rem) {
    flex-direction: column;
  }
`

function Checkout() {
  useScrollToTop()

  return (
    <div>
      <Header />
      <GoBackButton />
      <Container>
        <Operations>
          <CheckoutForm />
          <CheckoutSummary />
        </Operations>
      </Container>
      <Footer />
    </div>
  )
}

export default Checkout
