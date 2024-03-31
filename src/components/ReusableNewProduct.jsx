import styled from 'styled-components'

const Span = styled.span`
  display: block;
  color: var(--main-orange);
  font-size: 1.5rem;
  letter-spacing: 0.8rem;
  font-weight: 500;
  margin-bottom: 1.7rem;
`

function ReusableNewProduct() {
  return <Span>NEW PRODUCT</Span>
}

export default ReusableNewProduct
