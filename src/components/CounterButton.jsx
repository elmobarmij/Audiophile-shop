import styled from 'styled-components'

const Span = styled.span`
  font-family: inherit;
  font-size: 1.6rem;
  display: inline-block;
  padding: ${props => (props.size === 'big' ? '1.2rem 2rem' : '0.6rem 1.2rem')};

  &:nth-child(2) {
    font-size: 1.3rem;
    cursor: initial;
    padding: 0 1rem;
  }
`
Span.defaultProps = {
  size: 'big',
}

function CounterButton({ children, size, onClick }) {
  return (
    <Span onClick={onClick} size={size}>
      {children}
    </Span>
  )
}
export default CounterButton
