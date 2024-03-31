import { useScrollToTop } from '../hooks/useScrollToTop'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TechMenu from '../components/TechMenu'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'
import FirstSpeakerProduct from '../components/FirstSpeakerProduct'
import SecondSpeakerProduct from '../components/SecondSpeakerProduct'
import CategoryTitle from '../components/CategoryTitle'

function Speakers() {
  useScrollToTop()

  return (
    <div>
      <Header />
      <Hero>
        <CategoryTitle>SPEAKERS</CategoryTitle>
      </Hero>
      <FirstSpeakerProduct />
      <SecondSpeakerProduct />
      <TechMenu />
      <BestGear />
      <Footer />
    </div>
  )
}

export default Speakers
