import styled from 'styled-components'

const Counter = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-weight: bold;
  font-size: 1rem;
  place-items: center;
  font-family: inherit;
  border-radius: 0.2rem;
  background-color: var(--grey-light);
  cursor: pointer;

  & span:hover:not(:nth-child(2)) {
    color: var(--main-orange);
    background-color: var(--grey-dark);
    transition: var(--main-transition);
  }
`

function CartCounter({ children }) {
  return <Counter>{children}</Counter>
}

export default CartCounter
