import styled from 'styled-components'
import Container from './Container'

const StyledError = styled.div`
  margin-top: 5rem;
  color: red;
  font-size: 18px;
  font-weight: bold;
`

function Error() {
  return (
    <Container>
      <StyledError>An error occurred. Please try again later.</StyledError>
    </Container>
  )
}

export default Error
