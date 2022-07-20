import { Banner } from '../components/Banner'
import { BestGoals } from '../components/BestGoals'
import { LastResults } from '../components/LastResults'
import { Leagues } from '../components/Leagues'
import { Members } from '../components/Members'
import { Navbar } from '../components/Navbar'
import { SliderNews } from '../components/SliderNews'
import { Venezuela } from '../components/Venezuela'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className='mt-16'>
        <Banner />
        <SliderNews />
        <Leagues />
        <BestGoals />
        <LastResults />
        <Venezuela />
        <Members />
      </main>
    </>
  )
}

export default HomePage
