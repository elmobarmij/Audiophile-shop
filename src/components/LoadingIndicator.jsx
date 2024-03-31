import styled, { keyframes } from 'styled-components'
import Container from './Container'

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
`

const Indicator = styled.div`
  width: 2rem;
  height: 2rem;
  margin-top: 5rem;
  border-radius: 50%;
  padding: 2rem;
  background-color: var(--main-orange);
  animation: ${bounceAnimation} 1s ease-in-out infinite;
`

function LoadingIndicator() {
  return (
    <Container>
      <Indicator>
        <h2>Loading...</h2>
      </Indicator>
    </Container>
  )
}

export default LoadingIndicator
