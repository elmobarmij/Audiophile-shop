import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 4rem;
  color: #fff;

  @media (max-width: 30rem) {
    font-size: 2.8rem;
    font-weight: 600;
  }
`

function CategoryTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>
}

export default CategoryTitle
