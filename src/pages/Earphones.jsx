import Header from '../components/Header'
import Hero from '../components/Hero'
import TechMenu from '../components/TechMenu'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'
import FirstEarphoneProduct from '../components/FirstEarphoneProduct'
import { useScrollToTop } from '../hooks/useScrollToTop'
import CategoryTitle from '../components/CategoryTitle'

function Earphones() {
  useScrollToTop()

  return (
    <div>
      <Header />
      <Hero>
        <CategoryTitle>EARPHONES</CategoryTitle>
      </Hero>
      <FirstEarphoneProduct />
      <TechMenu />
      <BestGear />
      <Footer />
    </div>
  )
}

export default Earphones
