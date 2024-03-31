import styled from 'styled-components'

const P = styled.p`
  max-width: 50rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem 0 3rem;
  line-height: 1.6;
  color: var(--dark);

  @media (max-width: 62rem) {
    max-width: 50rem;
    margin: auto;
  }
`

function ReusableProductDescription({ children }) {
  return <P>{children}</P>
}

export default ReusableProductDescription
