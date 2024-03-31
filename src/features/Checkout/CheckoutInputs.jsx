import { useFormValidation } from '../../contexts/FormValidationContext'
import styled from 'styled-components'
import Error from './Error'
import { emailRegex } from '../../constants/emailRegex'

const H2 = styled.h2`
  font-size: 3rem;
  line-height: 3rem;
`
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
  gap: 1rem;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function CheckoutInputs() {
  const { register, errors } = useFormValidation()

  return (
    <>
      <H2>CHECHOUT</H2>
      <div>
        <H3>BILLING DETAILS</H3>
        <InputGroup>
          <Div>
            <Header>
              <Label
                htmlFor="fullName"
                style={
                  errors?.fullName?.message ? { color: 'var(--input)' } : {}
                }
              >
                Name
              </Label>
              {errors?.fullName?.message && (
                <Error>{errors.fullName.message}</Error>
              )}
            </Header>
            <Input
              style={
                errors?.fullName?.message
                  ? { border: '1px solid var(--input)' }
                  : { border: '1px solid var(--grey-dark)' }
              }
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Alexei Ward"
              {...register('fullName', { required: 'Field cannot be empty' })}
            />
          </Div>

          <Div>
            <Header>
              <Label
                htmlFor="email"
                style={errors?.email?.message ? { color: 'var(--input)' } : {}}
              >
                Email Address
              </Label>
              {errors?.email?.message && <Error>{errors.email.message}</Error>}
            </Header>

            <Input
              style={
                errors?.email?.message
                  ? { border: '1px solid var(--input)' }
                  : { border: '1px solid var(--grey-dark)' }
              }
              id="email"
              type="email"
              name="email"
              placeholder="alexei@mail.com"
              {...register('email', {
                required: 'Field cannot be empty',
                pattern: {
                  value: emailRegex,
                  message: 'Wrong format',
                },
              })}
            />
          </Div>

          <Div>
            <Header>
              <Label
                htmlFor="phone"
                style={errors?.phone?.message ? { color: 'var(--input)' } : {}}
              >
                Phone Number
              </Label>
              {errors?.phone?.message && <Error>{errors.phone.message}</Error>}
            </Header>
            <Input
              style={
                errors?.phone?.message
                  ? { border: '1px solid var(--input)' }
                  : { border: '1px solid var(--grey-dark)' }
              }
              id="phone"
              type="text"
              name="phone"
              placeholder="+1 202-555-0136"
              {...register('phone', { required: 'Field cannot be empty' })}
            />
          </Div>
        </InputGroup>
      </div>
    </>
  )
}

export default CheckoutInputs
