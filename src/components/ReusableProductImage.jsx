import styled from 'styled-components'

const ImagesContainer = styled.div`
  & img {
    display: none;
  }

  & img:first-child {
    width: 500px;
    height: 500px;
    border-radius: var(--main-radius);

    @media (min-width: 62rem) {
      display: block;
    }
  }

  & img:nth-child(2) {
    width: 100%;
    min-height: 30rem;
    @media (min-width: 30rem) and (max-width: 62rem) {
      display: block;
    }
  }

  & img:last-child {
    width: 100%;
    @media (max-width: 30rem) {
      display: block;
    }
  }
`

function ReusableProductImage({ children }) {
  return <ImagesContainer>{children}</ImagesContainer>
}

export default ReusableProductImage
