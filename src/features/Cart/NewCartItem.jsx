import { useNewCartItem } from '../../hooks/useNewcartItem'
import styled from 'styled-components'
import CounterButton from '../../components/CounterButton'
import CartCounter from '../../components/CartCounter'

const flexStyles = `display: flex;
justify-content: space-between;
align-items: center; gap: 1rem;
`

const FlexGap = styled.div`
  ${flexStyles};
  gap: 0.3rem;
  margin: 1rem 0;
`
const FlexCol = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemImg = styled.img`
  vertical-align: middle;
  width: 6rem;
`
const Div = styled.div`
  background-color: var(--grey);
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem;
    background-color: rgb(0 0 0 / 8%);
    border-radius: var(--main-radius);
    z-index: 1;
  }
`

const ItemName = styled.strong`
  font-size: 1.4rem;
`
const ItemPrice = styled.strong`
  font-size: 1.4rem;
  color: var(--grey-black);
`
const Flex = styled.div`
  ${flexStyles};
`

function NewCartItem({ item }) {
  const { handleDec, handleInc } = useNewCartItem(item)

  return (
    <CartItem>
      <FlexGap>
        <Flex>
          <Div>
            <ItemImg src={item.cartImage} alt={item.shortName} />
          </Div>
          <FlexCol>
            <ItemName>{item.shortName}</ItemName>
            <ItemPrice>$ {item.price}</ItemPrice>
          </FlexCol>
        </Flex>

        <CartCounter>
          <CounterButton size="small" onClick={handleDec}>
            -
          </CounterButton>
          <CounterButton size="small">{item.cartItemQuantity}</CounterButton>
          <CounterButton size="small" onClick={handleInc}>
            +
          </CounterButton>
        </CartCounter>
      </FlexGap>
    </CartItem>
  )
}

export default NewCartItem
