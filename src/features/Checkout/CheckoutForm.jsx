import { useFormValidation } from '../../contexts/FormValidationContext'
import styled from 'styled-components'
import CheckoutInputs from './CheckoutInputs'
import PaymentDetails from './PaymentDetails'
import ChippingInfo from './ChippingInfo'

const Box = styled.div`
  background-color: #fff;
  flex-basis: 70%;
  padding: 4.8rem;
  border-radius: var(--main-radius);
  overflow: hidden;

  @media (max-width: 47.93rem) {
    padding: 2rem;
  }
`

function CheckoutForm() {
  const { handleSubmit, onSubmit } = useFormValidation()

  return (
    <Box>
      <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
        <CheckoutInputs onSubmit={onSubmit} />
        <ChippingInfo onSubmit={onSubmit} />
        <PaymentDetails onSubmit={onSubmit} />
      </form>
    </Box>
  )
}

export default CheckoutForm
