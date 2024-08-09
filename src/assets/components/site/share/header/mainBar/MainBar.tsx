import { memo } from "react"
import Right from "./right/Right";
import Center from "./center/Center";
import Left from "./left/Left";


const MainBar = memo(() => {
  return (
    <div className="bg-white dark:bg-gray-900 flex items-center justify-between p-4 lg:py-6 rounded-xl lg:rounded-2xl">
      <Right/>
      <Center />
      <Left />
    </div>
  )
})

export default MainBar