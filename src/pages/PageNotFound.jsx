import styled from 'styled-components'

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`

const Title = styled.h1`
  font-size: 36px;
  color: #333;
`

const Message = styled.p`
  font-size: 18px;
  color: #666;
`

function PageNotFound() {
  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Message>The page you are looking for does not exist.</Message>
    </NotFoundContainer>
  )
}

export default PageNotFound
