import { useChosenProduct } from '../hooks/useChosenProduct'
import { updateImgPath } from '../utils/helpers'
import Button from './Button'
import Container from './Container'
import GridTwoCols from './GridTwoCols'
import ReusableProductImage from './ReusableProductImage'
import ReusableProductTitle from './ReusableProductTitle'
import ReusableProductDescription from './ReusableProductDescription'
import styled from 'styled-components'
import CartCounter from './CartCounter'
import ReusableNewProduct from './ReusableNewProduct'
import CounterButton from './CounterButton'

const Product = styled.div`
  margin-top: 6rem;
  margin-bottom: 15rem;

  @media (min-width: 30rem) and (max-width: 62rem) {
    margin-bottom: 12rem;
    margin-top: 3rem;
  }
  @media (max-width: 30rem) {
    margin-top: 2rem;
  }
`

const P = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 4rem;
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`

function ChosenProduct() {
  const {
    slug,
    productName,
    description,
    desktopImg,
    mobileImg,
    tabletImg,
    isNewProduct,
    price,
    productQuantity,
    handleAddToCart,
    handleDec,
    handleInc,
  } = useChosenProduct() || {}

  return (
    <Product>
      <Container>
        <GridTwoCols>
          <ReusableProductImage>
            <img src={updateImgPath(desktopImg)} alt={slug} />
            <img src={updateImgPath(tabletImg)} alt={slug} />
            <img src={updateImgPath(mobileImg)} alt={slug} />
          </ReusableProductImage>

          <div>
            {isNewProduct && <ReusableNewProduct />}
            <ReusableProductTitle size="big">
              {productName}
            </ReusableProductTitle>
            <ReusableProductDescription>
              {description}
            </ReusableProductDescription>
            <P>$ {price}</P>

            <ButtonGroup>
              <CartCounter>
                <CounterButton onClick={handleDec}>-</CounterButton>
                <CounterButton>{productQuantity}</CounterButton>
                <CounterButton onClick={handleInc}>+</CounterButton>
              </CartCounter>
              <Button onClick={handleAddToCart}>Add to cart</Button>
            </ButtonGroup>
          </div>
        </GridTwoCols>
      </Container>
    </Product>
  )
}

export default ChosenProduct
