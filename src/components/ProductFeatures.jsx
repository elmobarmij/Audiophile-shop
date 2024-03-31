import styled from 'styled-components'
import Container from './Container'
import { useChosenProduct } from '../hooks/useChosenProduct'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10rem;
  margin-bottom: 12rem;

  @media (max-width: 62rem) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`

const H2 = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 2rem;

  @media (max-width: 62rem) {
    font-size: 2.6rem;
  }
`

const P = styled.p`
  color: var(--dark);
  max-width: 61rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (min-width: 30rem) and (max-width: 62rem) {
    max-width: 100%;
  }
`

const Strong = styled.strong`
  font-family: inherit;
  letter-spacing: 0.5px;
  color: var(--main-orange);
`

const Span = styled.span`
  color: var(--dark);
  letter-spacing: 0.5px;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 1rem;
  font-size: 1.53rem;
`
const InTheBox = styled.div`
  @media (min-width: 30rem) and (max-width: 62rem) {
    display: flex;
    gap: 20vw;
  }
`

function ProductFeatures() {
  const { features, includedItems } = useChosenProduct() || {}

  return (
    <Container>
      <Grid>
        <div>
          <H2>FEATURES</H2>
          {features?.split('\n\n').map(p => (
            <P key={p}>{p}</P>
          ))}
        </div>

        <InTheBox>
          <H2>IN THE BOX</H2>

          <div>
            {Array.isArray(includedItems) &&
              includedItems.map(item => (
                <FlexContainer key={item.item}>
                  <Strong>{item.quantity}x</Strong> <Span>{item.item}</Span>
                </FlexContainer>
              ))}
          </div>
        </InTheBox>
      </Grid>
    </Container>
  )
}

export default ProductFeatures
