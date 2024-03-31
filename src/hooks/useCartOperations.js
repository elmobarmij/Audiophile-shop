import { useDispatch, useSelector } from 'react-redux'
import { removeAllItems, togglePaymentButton } from '../features/Cart/cartSlice'
import { useModal } from '../components/Modal'

export function useCartOperations() {
  const { close } = useModal()
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const isEmptyCart = !items.length
  const numItems = items.length

  function clearCart() {
    dispatch(removeAllItems())
  }

  function enablePaymentButtonAndCloseCart() {
    close()
    dispatch(togglePaymentButton(false))
  }

  return {
    isEmptyCart,
    numItems,
    items,
    clearCart,
    enablePaymentButtonAndCloseCart,
  }
}
