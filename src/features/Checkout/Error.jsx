import styled from 'styled-components'

const Span = styled.span`
  color: var(--input);
  font-size: 1.2rem;
  font-weight: 600;
`

function Error({ children }) {
  return <Span>{children}</Span>
}

export default Error
