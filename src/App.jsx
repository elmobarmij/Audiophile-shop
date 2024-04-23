import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext'
import { FormValidationProvider } from './contexts/FormValidationContext'
import LoadingIndicator from './components/LoadingIndicator'

// This is for performance optimization
// Add code splitting (lazy loading) to make the code splitted into chunks
const Homepage = lazy(() => import('./pages/Homepage'))
const InnerProductPage = lazy(() => import('./pages/InnerProductPage'))
const Headphones = lazy(() => import('./pages/Headphones'))
const Speakers = lazy(() => import('./pages/Speakers'))
const Earphones = lazy(() => import('./pages/Earphones'))
const Checkout = lazy(() => import('./pages/Checkout'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

// dist/assets/index-VVaXz0J-.css                  0.65 kB │ gzip:  0.37 kB
// dist/assets/index-Dn-GGanH.js                 309.37 kB │ gzip: 99.83 kB

function App() {
  // scroll to top of the homepage after payment is done
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <FormValidationProvider>
            <Suspense fallback={<LoadingIndicator />}>
              <Routes>
                <Route path="/" index element={<Homepage />} />
                <Route path="/headphones" element={<Headphones />} />
                <Route
                  path="/headphones/:slug"
                  element={<InnerProductPage />}
                />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/speakers/:slug" element={<InnerProductPage />} />
                <Route path="/earphones" element={<Earphones />} />
                <Route path="/earphones/:slug" element={<InnerProductPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </FormValidationProvider>
        </ProductProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
