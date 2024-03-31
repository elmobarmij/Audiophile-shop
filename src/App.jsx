import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext'
import { FormValidationProvider } from './contexts/FormValidationContext'
import PageNotFound from './pages/PageNotFound'
import Homepage from './pages/Homepage'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Checkout from './pages/Checkout'
import InnerProductPage from './pages/InnerProductPage'

function App() {
  // scroll to top of the homepage after payment is done
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <FormValidationProvider>
            <Routes>
              <Route path="/" index element={<Homepage />} />
              <Route path="/headphones" element={<Headphones />} />
              <Route path="/headphones/:slug" element={<InnerProductPage />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/speakers/:slug" element={<InnerProductPage />} />
              <Route path="/earphones" element={<Earphones />} />
              <Route path="/earphones/:slug" element={<InnerProductPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </FormValidationProvider>
        </ProductProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
