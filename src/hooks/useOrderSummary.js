import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { removeAllItems } from '../features/Cart/cartSlice'

export function useOrderSummary() {
  const dispatch = useDispatch()
  const [openName, setOpenName] = useState('')
  const items = useSelector(state => state.cart.items)
  const firstItem = [items?.map(item => item)[0]]
  const [visibleItems, setVisibleItems] = useState(firstItem)
  const totalCartItemsPrice = Number(
    useSelector(state => state.cart.totalCartItemsPrice),
  )
  const shippingCost = 50
  // VAT is calculated as 20% of the product total, excluding shipping
  const vatIncluded = Number((totalCartItemsPrice * 20) / 100)
  const grandTotalPrice = Number(
    totalCartItemsPrice + vatIncluded + shippingCost,
  )
  const otherItemsCount = items.length - 1
  const numberOfVisibleItems = visibleItems.length

  const close = () => setOpenName(false)

  function closeModal() {
    dispatch(removeAllItems())
    close()
  }

  function showOtherItems() {
    numberOfVisibleItems > 1
      ? setVisibleItems(firstItem)
      : setVisibleItems(items)
  }

  return {
    dispatch,
    openName,
    setOpenName,
    items,
    firstItem,
    visibleItems,
    setVisibleItems,
    totalCartItemsPrice,
    shippingCost,
    vatIncluded,
    grandTotalPrice,
    otherItemsCount,
    numberOfVisibleItems,
    close,
    closeModal,
    showOtherItems,
  }
}
