import { memo } from 'react'
import Propaganda from './Propaganda'
import Navbar from './Navbar'
import Garanti from './Garanti'

const MainDetails = memo(() => {
  return (
    <div
      className='col-span-8 xl:col-span-9'
    >
      <Propaganda/>
      <Navbar/>
      <Garanti/>
    </div>
  )
})

export default MainDetails