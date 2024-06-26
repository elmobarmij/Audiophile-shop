import { createContext, useContext, useEffect, useReducer } from 'react'

const ProductContext = createContext()

const initialState = {
  products: [],
  status: 'loading',
}

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, status: 'loading' }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        status: 'ready',
        products: action.payload,
      }
    case 'FETCH_FAILURE':
      return { ...state, status: 'error' }
    default:
      throw new Error('There was an Error fetching data')
  }
}

const BASE_URL = '/data/products.json'

const ProductProvider = ({ children }) => {
  const [{ products, status }, dispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const res = await fetch(`${BASE_URL}`)
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = (await res.json())['products']
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        console.error(error)
        dispatch({ type: 'FETCH_FAILURE' })
      }
    }
    getData()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        status,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('ProductContext was used outside of ProductProvider')
  }

  return context
}

export { ProductProvider, useProduct }
