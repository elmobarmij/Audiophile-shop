import { formatPrice } from '../../utils/helpers'
import styled from 'styled-components'
import Button from '../../components/Button'
import CheckoutItem from './CheckoutItem'
import Modal from '../../components/Modal'
import OrderSummary from './OrderSummary'
import { useCheckoutSummary } from '../../hooks/useCheckoutSummary'

const ContentContainer = styled.div`
  font-family: inherit;
  padding: 4rem;
  width: 50rem;
  max-height: 50rem;
  height: 100%;
  background-color: #fff;
  border-radius: var(--main-radius);

  @media (max-width: 62rem) {
    width: 70vw;
    max-height: 70rem;
  }
`

const Box = styled.div`
  background-color: #fff;
  flex-basis: 30%;
  border-radius: var(--main-radius);
  padding: 3rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;

  @media (max-width: 62rem) {
    align-self: initial;
    flex-grow: 1;
  }
`
const H2 = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
`
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--grey-black);
`

const Flex = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
const Empty = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  color: var(--dark);
  font-weight: bold;
  margin-bottom: 1rem;
`

function CheckoutSummary() {
  const {
    items,
    isPaymentButtonDisabled,
    isPaid,
    totalCartItemsPrice,
    shippingCost,
    vatIncluded,
    grandTotalPrice,
    emptyCart,
    isEmptyCart,
  } = useCheckoutSummary()

  return (
    <Box>
      <H2>Summary</H2>
      <div>
        {items?.map(item => (
          <CheckoutItem item={item} key={item.shortName} />
        ))}

        {emptyCart && <Empty>No Items in cart</Empty>}
      </div>

      <div>
        <Flex>
          <Title>total</Title>
          <H2> {formatPrice(totalCartItemsPrice)}</H2>
        </Flex>

        <Flex>
          <Title>SHIPPING</Title>
          <H2>$ {shippingCost}</H2>
        </Flex>

        <Flex>
          <Title>VAT (included)</Title>
          <H2> {formatPrice(vatIncluded)}</H2>
        </Flex>
      </div>

      <Flex>
        <Title>GRAND TOTAL</Title>
        <H2 style={{ color: 'var(--main-orange)' }}>
          {formatPrice(grandTotalPrice)}
        </H2>
      </Flex>

      <Modal>
        <Modal.Open opens="payment-done">
          <Button
            form="my-form"
            type="submit"
            onClick={() => {}}
            style={{ marginTop: '1rem', width: '100%' }}
            disabled={isEmptyCart || isPaymentButtonDisabled}
          >
            Continue & Pay
          </Button>
        </Modal.Open>
        {isPaid && (
          <Modal.Window name="payment-done">
            <ContentContainer>
              <OrderSummary />
            </ContentContainer>
          </Modal.Window>
        )}
      </Modal>
    </Box>
  )
}

export default CheckoutSummary
