
import { memo } from "react"
import Sessions from "./Sessions"

const SessionsSection = memo(() => {
  return (
    <section
      id="sessions"
      className="bg-white dark:bg-gray-900 shadow-sm rounded-lg sm:px-10 px-3 pt-7 pb-6 mb-8"
    >
      <h2 className="text-blue-700 dark:text-white sm:text-27 text-lg font-bold sm:justify-start justify-center flex items-center mb-5">
        <i className="bg-blue-700 dark:bg-white ml-1 w-2 h-2 rounded-full sm:flex hidden"></i>
        سر فصل ها
      </h2>

      <Sessions/>
    </section>
  )
})

export default SessionsSection