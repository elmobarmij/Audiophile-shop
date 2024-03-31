import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: ${props => (props.type === 'header' ? '4rem 0 0' : '0')};

  @media (max-width: 68.75rem) {
    // 1100px
    padding: ${props => (props.type === 'header' ? '3rem 2rem 0rem' : '0')};
    width: auto;
    margin: 0 2rem;
  }
  @media (min-width: 68.75rem) {
    padding: ${props => (props.type === 'header' ? '3rem 2rem 1rem' : '0')};
  }
`

function Container({ children, type }) {
  return <StyledContainer type={type}>{children}</StyledContainer>
}

export default Container
