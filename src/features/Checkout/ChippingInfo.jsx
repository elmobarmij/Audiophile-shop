import styled from 'styled-components'
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
  gap: 1rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function ChippingInfo() {
  const { register, errors } = useFormValidation()

  return (
    <div>
      <H3>SHIPPING INFO</H3>
      <InputGroup>
        <Div style={{ gridColumn: '1/-1' }}>
          <Header>
            <Label
              style={
                errors?.YourAddress?.message ? { color: 'var(--input)' } : {}
              }
              htmlFor="YourAddress"
            >
              Your Address
            </Label>
            {errors?.YourAddress?.message && (
              <Error>{errors.YourAddress.message}</Error>
            )}
          </Header>
          <Input
            style={
              errors?.YourAddress?.message
                ? { border: '1px solid var(--input)' }
                : { border: '1px solid var(--grey-dark)' }
            }
            id="YourAddress"
            type="text"
            name="YourAddress"
            placeholder="1137 Williams Avenue"
            {...register('YourAddress', {
              required: 'Field cannot be empty',
            })}
          />
        </Div>

        <Div>
          <Header>
            <Label
              style={errors?.ZipCode?.message ? { color: 'var(--input)' } : {}}
              htmlFor="ZipCode"
            >
              ZIP Code
            </Label>
            {errors?.ZipCode?.message && (
              <Error>{errors.ZipCode.message}</Error>
            )}
          </Header>
          <Input
            style={
              errors?.ZipCode?.message
                ? { border: '1px solid var(--input)' }
                : { border: '1px solid var(--grey-dark)' }
            }
            id="ZipCode"
            type="text"
            name="ZipCode"
            placeholder="10001"
            {...register('ZipCode', { required: 'Field cannot be empty' })}
          />
        </Div>

        <Div>
          <Header>
            <Label
              style={errors?.City?.message ? { color: 'var(--input)' } : {}}
              htmlFor="City"
            >
              City
            </Label>
            {errors?.City?.message && <Error>{errors.City.message}</Error>}
          </Header>
          <Input
            style={
              errors?.City?.message
                ? { border: '1px solid var(--input)' }
                : { border: '1px solid var(--grey-dark)' }
            }
            id="City"
            type="text"
            name="City"
            placeholder="New York"
            {...register('City', { required: 'Field cannot be empty' })}
          />
        </Div>

        <Div>
          <Header>
            <Label
              style={errors?.Country?.message ? { color: 'var(--input)' } : {}}
              htmlFor="Country"
            >
              Country
            </Label>
            {errors?.Country?.message && (
              <Error>{errors.Country.message}</Error>
            )}
          </Header>
          <Input
            style={
              errors?.Country?.message
                ? { border: '1px solid var(--input)' }
                : { border: '1px solid var(--grey-dark)' }
            }
            id="Country"
            type="text"
            name="Country"
            placeholder="United States"
            {...register('Country', { required: 'Field cannot be empty' })}
          />
        </Div>
      </InputGroup>
    </div>
  )
}

export default ChippingInfo
