import styled from 'styled-components'

const H2 = styled.h2`
  font-size: ${props => (props.size === 'big' ? '4rem' : '3rem')};
  text-transform: uppercase;

  @media (max-width: 62rem) {
    font-size: ${props => (props.size === 'big' ? '3rem' : '2rem')};
  }
`

H2.defaultProps = {
  size: 'small',
}

function ReusableProductTitle({ children, size }) {
  return <H2 size={size}>{children}</H2>
}

export default ReusableProductTitle
