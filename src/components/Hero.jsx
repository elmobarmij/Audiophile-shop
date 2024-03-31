import styled from 'styled-components'

const StyledHero = styled.div`
  background-color: #191919;
  padding: 10rem;
  text-align: center;
  margin-bottom: 6rem;
  font-weight: 600;
  letter-spacing: 0.2rem;

  @media (max-width: 30rem) {
    padding: 3rem;
  }
`

function Hero({ children }) {
  return <StyledHero>{children}</StyledHero>
}

export default Hero
