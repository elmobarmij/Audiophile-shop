import { useDispatch } from 'react-redux'
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItem,
} from '../features/Cart/cartSlice'

export function useNewCartItem(item) {
  const dispatch = useDispatch()

  const handleDec = function () {
    if (item.cartItemQuantity <= 1) {
      dispatch(decreaseCartItemQuantity(item.id))
      dispatch(removeItem(item))
    } else {
      dispatch(decreaseCartItemQuantity(item.id))
    }
  }

  const handleInc = () => dispatch(increaseCartItemQuantity(item.id))

  return { dispatch, handleDec, handleInc }
}
