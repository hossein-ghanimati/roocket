
import { memo, useContext } from "react"
import Sessions from "./Sessions"
import { AuthContext } from "@/assets/contexts/share/auth.context"
import { setToLocal } from "@/assets/ts/utils/browserMemo"

const SessionsSection = memo(() => {
  const auth = useContext(AuthContext)
  return (
    <section
      id="sessions"
      className="bg-white dark:bg-gray-900 shadow-sm rounded-lg sm:px-10 px-3 pt-7 pb-6 mb-8"
    >
      <h2 onClick={() => {
        setToLocal("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmY2YTAxNzQ4YjUyODMxYTdkNDI1MyIsImlhdCI6MTcyNTUzNTkzOCwiZXhwIjoxNzI4MTI3OTM4fQ.SANUMbssrS2Gi6Ro03CRot0vtE-erzpPCtD-G5oNdjw")
        auth?.getMe()
      }} className="text-blue-700 dark:text-white sm:text-27 text-lg font-bold sm:justify-start justify-center flex items-center mb-5">
        <i className="bg-blue-700 dark:bg-white ml-1 w-2 h-2 rounded-full sm:flex hidden"></i>
        سر فصل ها
        {auth?.user?.name}
      </h2>

      <Sessions/>
    </section>
  )
})

export default SessionsSection