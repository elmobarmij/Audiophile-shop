import Header from '../components/Header'
import TechMenu from '../components/TechMenu'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'
import { useProduct } from '../contexts/ProductContext'
import GoBackButton from '../components/GoBackBtn'
import ChosenProduct from '../components/ChosenProduct'
import ProductFeatures from '../components/ProductFeatures'
import Gallery from '../components/Gallery'
import YouMayAlsoLike from '../components/YouMayAlsoLike'
import Error from '../components/Error'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useChosenProduct } from '../hooks/useChosenProduct'
import LoadingIndicator from '../components/LoadingIndicator'

function InnerProductPage() {
  useScrollToTop()
  const { status } = useProduct()
  const chosenProductData = useChosenProduct()

  if (chosenProductData === null) return <LoadingIndicator />

  return (
    <div>
      <Header />
      <GoBackButton />
      {status === 'error' ? (
        <Error />
      ) : status === 'ready' ? (
        <>
          <ChosenProduct />
          <ProductFeatures />
          <Gallery />
          <YouMayAlsoLike />
          <TechMenu />
          <BestGear />
          <Footer />
        </>
      ) : null}
    </div>
  )
}

export default InnerProductPage
