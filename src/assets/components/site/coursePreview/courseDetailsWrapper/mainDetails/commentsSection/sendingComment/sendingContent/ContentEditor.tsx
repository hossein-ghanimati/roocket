import { memo } from "react"

const ContentEditor = memo(() => {
  return (
    <textarea
      placeholder="کامنت خودرا بنویسید ..."
      className="mt-4 w-full min-h-40 max-h-80 overflow-auto bg-custom-white dark:bg-gray-950 shadow rounded-lg md:rounded-2xl py-4 px-3 border-none outline-none">

    </textarea>
  )
})

export default ContentEditor