import { memo } from 'react'
import Propaganda from './Propaganda'
import Navbar from './Navbar'
import Garanti from './Garanti'
import SessionsSection from './sessions/SessionsSection'

const MainDetails = memo(() => {
  return (
    <aside
      className='col-span-8 xl:col-span-9'
    >
      <Propaganda/>
      <Navbar/>
      <Garanti/>
      <SessionsSection />
    </aside>
  )
})

export default MainDetails