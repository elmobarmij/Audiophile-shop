import styled from 'styled-components'
import emptyCart from '../../assets/cart/empty-cart.png'

const Empty = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
const P = styled.p`
    font-size: 1.9rem;
    font-weight: 600;
    color: var(--dark);
`

const Image = styled.img`
  width: 8rem;
`

function EmptyCart() {
  return (
    <Empty>
      <P>Your cart is empty</P>
      <div>
        <Image src={emptyCart} alt="Empty cart" />
      </div>
    </Empty>
  )
}

export default EmptyCart
