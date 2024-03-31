import TechMenu from '../components/TechMenu'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FirstHeadphoneProduct from '../components/FirstHeadphoneProduct'
import SecondHeadphoneProduct from '../components/SecondHeadphoneProduct'
import ThirdHeadphoneProduct from '../components/ThirdHeadphoneProduct'
import { useScrollToTop } from '../hooks/useScrollToTop'
import CategoryTitle from '../components/CategoryTitle'

function Headphones() {
  useScrollToTop()

  return (
    <div>
      <Header />
      <Hero>
        <CategoryTitle>HEADPHONES</CategoryTitle>
      </Hero>
      <FirstHeadphoneProduct />
      <SecondHeadphoneProduct />
      <ThirdHeadphoneProduct />
      <TechMenu />
      <BestGear />
      <Footer />
    </div>
  )
}

export default Headphones
