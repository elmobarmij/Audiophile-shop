import BestGear from '../components/BestGear'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import HomepageProducts from '../components/HomepageProducts'
import TechMenu from '../components/TechMenu'

function Homepage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TechMenu />
      <HomepageProducts />
      <BestGear />
      <Footer />
    </div>
  )
}

export default Homepage
