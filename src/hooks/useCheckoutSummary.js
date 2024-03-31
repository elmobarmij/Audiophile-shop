import { useSelector } from 'react-redux'
import { useFormValidation } from '../contexts/FormValidationContext'

export function useCheckoutSummary() {
  const items = useSelector(state => state.cart.items)
  const isPaymentButtonDisabled = useSelector(
    state => state.cart.isPaymentButtonDisabled,
  )
  const { isPaid } = useFormValidation()
  const totalCartItemsPrice = Number(
    useSelector(state => state.cart.totalCartItemsPrice),
  )
  const shippingCost = 50
  // VAT is calculated as 20% of the product total, excluding shipping
  const vatIncluded = Number((totalCartItemsPrice * 20) / 100)
  const grandTotalPrice = Number(
    totalCartItemsPrice + vatIncluded + shippingCost,
  )
  const emptyCart = !items.length
  const isEmptyCart = !items.length

  return {
    items,
    isPaymentButtonDisabled,
    isPaid,
    totalCartItemsPrice,
    shippingCost,
    vatIncluded,
    grandTotalPrice,
    emptyCart,
    isEmptyCart,
  }
}
