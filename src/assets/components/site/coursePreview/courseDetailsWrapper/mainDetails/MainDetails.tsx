import { memo } from 'react'
import Propaganda from './Propaganda'
import Navbar from './Navbar'
import Garanti from './Garanti'
import SessionsSection from './sessions/SessionsSection'
import CommentsSection from './commentsSection/CommentsSection'

const MainDetails = memo(() => {
  return (
    <aside
      className='col-span-8 xl:col-span-9'
    >
      <Propaganda/>
      <Navbar/>
      <Garanti/>
      <SessionsSection />
      <CommentsSection />
    </aside>
  )
})

export default MainDetails