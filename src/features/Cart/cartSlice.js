import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  productQuantity: 1,
  isPaymentButtonDisabled: false,
  cartItemQuantity: 1,
  totalCartItemsPrice: initialTotalPrice(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload)
      calcTotalPrice(state)
    },
    updateCartItemQuantity(state, action) {
      const { id, cartItemQuantity } = action.payload
      const itemToUpdate = state.items.find(item => item.id === id)
      if (itemToUpdate) {
        itemToUpdate.cartItemQuantity = cartItemQuantity
      }
      calcTotalPrice(state)
    },
    increaseCartItemQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload)
      item.cartItemQuantity = item.cartItemQuantity + 1
      calcTotalPrice(state)
    },
    decreaseCartItemQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload)
      item.cartItemQuantity = item.cartItemQuantity - 1
      calcTotalPrice(state)
    },
    resetTotalPrice(state, action) {
      state.totalCartItemsPrice = 0
    },
    resetProductQuantity(state, action) {
      state.productQuantity = 1
    },
    increaseProductQuantity(state, action) {
      state.productQuantity = state.productQuantity + 1
    },
    decreaseProductQuantity(state, action) {
      state.productQuantity = state.productQuantity - 1
    },
    togglePaymentButton(state, action) {
      state.isPaymentButtonDisabled = action.payload
    },
    resetItemCount(state, action) {
      state.itemCount = action.payload
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        item => item.shortName !== action.payload.shortName,
      )
    },
    removeAllItems(state) {
      state.items = []
    },
  },
})

// returned totalPrice from localStorage
function initialTotalPrice() {
  return (
    JSON.parse(localStorage.getItem('cartItems'))
      ?.map(item => item.cartItemQuantity * item.price)
      .reduce((acc, cur) => acc + cur, 0) || 0
  )
}

// calculated totalPrice with new quantity chanages
function calcTotalPrice(state) {
  state.totalCartItemsPrice = state?.items
    .map(item => item.cartItemQuantity * item.price)
    .reduce((acc, cur) => acc + cur, 0)
}

export const {
  addToCart,
  resetItemCount,
  updateCartItemQuantity,
  removeItem,
  removeAllItems,
  resetTotalPrice,
  togglePaymentButton,
  increaseProductQuantity,
  decreaseProductQuantity,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  resetProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
