import Landing from '@/assets/components/site/home/landing/Landing'
import LatesCourses from '@/assets/components/site/home/latesCourses/LatesCourses'
import { memo } from 'react'

const Home = memo(() => {
  return (
    <div id="home">
      <Landing/>
      <LatesCourses/>
    </div>
  )
})

export default Home