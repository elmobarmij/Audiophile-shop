import { useLocation, useParams } from 'react-router-dom'
import { useProduct } from '../contexts/ProductContext'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  addToCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  resetItemCount,
  resetProductQuantity,
  updateCartItemQuantity,
} from '../features/Cart/cartSlice'
import { updateImgPath } from '../utils/helpers'

export function useChosenProduct() {
  const items = useSelector(state => state.cart.items)
  const productQuantity = useSelector(state => state.cart.productQuantity)
  const { products } = useProduct() || {}
  const { slug: searchedProduct } = useParams()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(resetProductQuantity())
    dispatch(resetItemCount(1))
  }, [dispatch, location.pathname])

  if (!products) return null

  const currentProduct = products.find(
    product => product.slug === searchedProduct,
  )

  if (!currentProduct) return null

  const {
    id,
    features,
    slug,
    gallery,
    others,
    includedItems,
    name: productName,
    description,
    image,
    price,
    shortName,
    cartImage,
    new: isNewProduct,
  } = currentProduct

  const {
    desktop: desktopImg,
    mobile: mobileImg,
    tablet: tabletImg,
  } = image || {}

  function handleAddToCart() {
    const existingItem = items.find(item => item.id === id)

    if (existingItem) {
      // If the item exists, update its quantity
      dispatch(
        updateCartItemQuantity({
          id,
          cartItemQuantity: existingItem.cartItemQuantity + productQuantity,
        }),
      )
    } else {
      // If the item doesn't exist, add it to the cart as a new item
      const cartItemObj = {
        id,
        cartImage: updateImgPath(cartImage),
        price,
        shortName,
        cartItemQuantity: productQuantity,
      }
      dispatch(addToCart(cartItemObj))
    }
  }

  function handleDec() {
    if (productQuantity > 1) {
      dispatch(decreaseProductQuantity())
    }
  }

  function handleInc() {
    dispatch(increaseProductQuantity())
  }

  return {
    id,
    slug,
    others,
    gallery,
    includedItems,
    features,
    productName,
    description,
    desktopImg,
    mobileImg,
    tabletImg,
    isNewProduct,
    price,
    shortName,
    cartImage,
    items,
    productQuantity,
    dispatch,
    handleAddToCart,
    handleDec,
    handleInc,
  }
}
