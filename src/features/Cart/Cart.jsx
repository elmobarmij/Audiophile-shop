import { useCartOperations } from '../../hooks/useCartOperations'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import NewCartItem from './NewCartItem'
import EmptyCart from './EmptyCart'
import TotalPrice from './TotalPrice'

const ContentContainer = styled.div`
  font-family: inherit;
  padding: 4rem;
  width: 30rem;
  height: 100%;
  background-color: #fff;
  border-radius: var(--main-radius);

  @media (max-width: 30rem) {
    max-width: 20rem;
  }
`
const ItemsContainer = styled.div`
  padding-right: 2rem;
  max-height: 30rem;
  overflow: scroll;
`

const flexStyles = `display: flex;
justify-content: space-between;
align-items: center; gap: 1rem;
`

const FlexHeader = styled.div`
  ${flexStyles};
  margin-bottom: 1.5rem;
`

const H2 = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.1rem;
`

const Remove = styled.button`
  color: var(--grey-secondary);
  border: none;
  font-size: 1.4rem;
  text-decoration: underline;
  transition: 0.2s;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: var(--main-orange);
  }
`

function Cart() {
  const {
    isEmptyCart,
    items,
    numItems,
    clearCart,
    enablePaymentButtonAndCloseCart,
  } = useCartOperations()

  return (
    <ContentContainer>
      {isEmptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <FlexHeader>
            <H2>CART ({numItems})</H2>
            <Remove onClick={clearCart}>Remove All</Remove>
          </FlexHeader>

          <ItemsContainer>
            {items?.map(item => (
              <NewCartItem item={item} key={item.shortName} />
            ))}
          </ItemsContainer>

          <TotalPrice />

          <Link to="/checkout">
            <Button
              onClick={enablePaymentButtonAndCloseCart}
              style={{ width: '100%' }}
            >
              Checkout
            </Button>
          </Link>
        </>
      )}
    </ContentContainer>
  )
}

export default Cart
