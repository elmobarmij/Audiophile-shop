import styled from 'styled-components'
import { usePaymentMethod } from '../../hooks/usePaymentMethod'
import cashOnDeliveryImage from '../../assets/checkout/icon-cash-on-delivery.svg'
import { useFormValidation } from '../../contexts/FormValidationContext'
import Error from './Error'

const H3 = styled.h3`
  color: var(--main-orange);
  font-size: 1.4rem;
  line-height: 3rem;
  margin: 3rem 0 1.5rem;
`
const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 32rem) {
    display: flex;
    flex-direction: column;
  }
`
const Input = styled.input`
  font-size: 1.4rem;
  padding: 2rem;
  border: 1px solid var(--grey-dark);
  border-radius: var(--main-radius);
  font-weight: bold;

  &::placeholder {
    color: var(--grey-secondary);
  }
`
const Label = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`
const CheckboxContanier = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
  padding: 2rem;
  border: 1px solid var(--grey-dark);
  border-radius: var(--main-radius);
  font-weight: bold;
  cursor: pointer;

  &:has(input:checked) {
    border: 2px solid var(--main-orange);
  }
`

const Checkbox = styled.input`
  font-weight: bold;
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  color: var(--dark);
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -99999rem;
  }

  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 3rem;
    cursor: pointer;
    display: inline-block;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.8rem;
    height: 1.8rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: var(--main-orange);
    border-radius: 50%;
    transition: var(--main-transition);
    -webkit-transition: var(--main-transition);
  }
  &:not(:checked) + label:after {
    opacity: 0;
  }
  &:checked + label:after {
    opacity: 1;
  }
`

const Flex = styled.div`
  display: flex;
  grid-column: span 2;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;
`
const Image = styled.img`
  vertical-align: middle;
  max-width: 100%;
`
const Description = styled.p`
  font-size: 1.5rem;
  color: #191919a1;
  font-weight: 500;
  line-height: 1.5;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function PaymentDetails() {
  const { register, errors } = useFormValidation()

  const {
    isCashOnDeliveryChecked,
    isEMoneyChecked,
    handleCashOnDeliveryChange,
    handleEMoneyChange,
  } = usePaymentMethod()

  return (
    <div>
      <H3>PAYMENT DETAILS</H3>
      <InputGroup>
        <Div>
          <Label>Payment Method</Label>
        </Div>

        <Div>
          <CheckboxContanier onClick={handleEMoneyChange}>
            <Checkbox
              id="eMoney"
              type="checkbox"
              name="eMoney"
              checked={isEMoneyChecked}
              onChange={() => {}}
            />
            <label htmlFor="eMoney">e-money</label>
          </CheckboxContanier>

          <CheckboxContanier onClick={handleCashOnDeliveryChange}>
            <Checkbox
              id="cachOnDelivery"
              type="checkbox"
              name="CashOnDelivery"
              checked={isCashOnDeliveryChecked}
              onChange={() => {}}
            />
            <label htmlFor="cachOnDelivery">Cash on Delivery</label>
          </CheckboxContanier>
        </Div>

        {isCashOnDeliveryChecked && (
          <Flex>
            <Image src={cashOnDeliveryImage} alt="Cash on Delivery" />
            <Description>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </Description>
          </Flex>
        )}

        {isEMoneyChecked && (
          <>
            <Div style={{ marginTop: ' 1rem' }}>
              <Header>
                <Label
                  style={
                    errors?.eMoneyNumber?.message
                      ? { color: 'var(--input)' }
                      : {}
                  }
                  htmlFor="eMoneyNumber"
                >
                  e-Money Number
                </Label>
                {errors?.eMoneyNumber?.message && (
                  <Error>{errors.eMoneyNumber.message}</Error>
                )}
              </Header>
              <Input
                style={
                  errors?.eMoneyNumber?.message
                    ? { border: '1px solid var(--input)' }
                    : { border: '1px solid var(--grey-dark)' }
                }
                type="text"
                name="eMoneyNumber"
                {...register('eMoneyNumber', {
                  required: 'Field cannot be empty',
                })}
                placeholder="238521993"
              />
            </Div>

            <Div style={{ marginTop: ' 1rem' }}>
              <Header>
                <Label
                  style={
                    errors?.eMoneyPIN?.message ? { color: 'var(--input)' } : {}
                  }
                  htmlFor="eMoneyPIN"
                >
                  e-Money Number
                </Label>
                {errors?.eMoneyPIN?.message && (
                  <Error>{errors.eMoneyPIN.message}</Error>
                )}
              </Header>
              <Input
                style={
                  errors?.eMoneyPIN?.message
                    ? { border: '1px solid var(--input)' }
                    : { border: '1px solid var(--grey-dark)' }
                }
                id="eMoneyPIN"
                type="text"
                name="eMoneyPIN"
                placeholder="6891"
                {...register('eMoneyPIN', {
                  required: 'Field cannot be empty',
                })}
              />
            </Div>
          </>
        )}
      </InputGroup>
    </div>
  )
}

export default PaymentDetails
