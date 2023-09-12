import useScrollWhenHashChange from '@/hooks/useScrollWhenHashChange'
import Welcome from '@/components/Welcome'
import TopOffers from '@/components/TopOffers'
import AboutUs from '@/components/AboutUs'
import OurTeam from '@/components/OurTeam'
import References from '@/components/References'

export default function Home() {
  useScrollWhenHashChange()

  return (
    <div>
      <Welcome className="mt-16 mb-32 max-w-5xl mx-auto" />
      <TopOffers />
      <AboutUs />
      <OurTeam />
      <References />
    </div>
  )
}
