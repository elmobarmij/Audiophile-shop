import { useSelector } from 'react-redux'
import styled from 'styled-components'

const flexStyles = `display: flex;
justify-content: space-between;
align-items: center; gap: 1rem;
`
const Flex = styled.div`
  ${flexStyles};
`

const Total = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--grey-black);
`

const Span = styled.strong`
  font-size: 1.6rem;
`

const Space = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
`

function TotalPrice() {
  const totalCartItemsPrice = useSelector(
    state => state.cart.totalCartItemsPrice,
  )

  return (
    <Space>
      <Flex>
        <Total>TOTAL</Total>
        <Span>$ {totalCartItemsPrice}</Span>
      </Flex>
    </Space>
  )
}

export default TotalPrice
