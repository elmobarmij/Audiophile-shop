import { useOrderSummary } from '../../hooks/useOrderSummary'
import { formatPrice } from '../../utils/helpers'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import checkMark from '../../assets/shared/desktop/icon-check-mark.svg'
import Button from '../../components/Button'
import CheckoutItem from './CheckoutItem'

const Image = styled.img`
  width: 6rem;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const H2 = styled.h2`
  font-size: 3rem;

  @media (max-width: 47.93rem) {
    font-size: 2.4rem;
  }
`
const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`
const P = styled.p`
  font-size: 1.4rem;
`
const StyledNavLink = styled(NavLink)`
  margin-top: 1rem;
`
const Items = styled.div`
  flex-basis: 50%;
  padding: 2rem;
  max-height: 20rem;
  overflow: scroll;
  background-color: var(--grey-light);
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--grey);
`
const ItemInfo = styled.div`
  display: flex;
  margin-top: 1rem;
  border-radius: var(--main-radius);
  overflow: hidden;

  @media (max-width: 47.93rem) {
    flex-direction: column;
  }
`
const PriceContainer = styled.div`
  flex-basis: 50%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #000;
  justify-content: flex-end;
  overflow: hidden;
`
const Span = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--dark);
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Line = styled.div`
  width: 90%;
  height: 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: var(--grey-dark);
`

function OrderSummary() {
  const {
    items,
    visibleItems,
    grandTotalPrice,
    otherItemsCount,
    numberOfVisibleItems,
    closeModal,
    showOtherItems,
  } = useOrderSummary()

  return (
    <Flex>
      <Image src={checkMark} alt="Order Completed checkMark" />
      <H2>
        THANK YOU <br /> FOR YOUR ORDER
      </H2>
      <P>You will receive an email confirmation shortly.</P>

      <ItemInfo>
        <Items>
          {visibleItems?.map(item => (
            <CheckoutItem item={item} key={item.shortName} />
          ))}

          {items.length > 1 && (
            <>
              <Line></Line>
              <Span onClick={showOtherItems}>
                {numberOfVisibleItems > 1
                  ? 'View less'
                  : `and ${otherItemsCount} other item(s)`}
              </Span>
            </>
          )}
        </Items>

        <PriceContainer>
          <Title>GRAND TOTAL</Title>
          <Price style={{ color: '#fff' }}>
            {formatPrice(grandTotalPrice)}
          </Price>
        </PriceContainer>
      </ItemInfo>

      <StyledNavLink to="/">
        <Button onClick={closeModal} style={{ width: '100%' }}>
          Back to home
        </Button>
      </StyledNavLink>
    </Flex>
  )
}

export default OrderSummary
