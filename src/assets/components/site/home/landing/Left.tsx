import { memo } from "react"

const Left = memo(() => {
  return (
    <div className="col-span-6">
     <img src="/public/image/landing/monitoring.png" alt="roocket" className="mx-auto mb-4 md:mb-6" />
    </div>
  )
})

export default Left