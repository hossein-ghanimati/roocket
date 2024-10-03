import { useContext } from "react"
import FormInput from "./FormInput"
import ToggleBox from "./ToggleBox"
import { CoursesFilterContext } from "@/assets/contexts/site/coursesFilter.context"

type Props = {}

const Sidebar = ({

}: Props) => {
  const coursesFilterSetting = useContext(CoursesFilterContext)

  return (
    <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
      <FormInput />
      <ToggleBox checked={coursesFilterSetting?.isOnlyFree || false} onChange={coursesFilterSetting?.changeOnlyFree} name="only-free" title="فقط دوره های رایگان"/>
      <ToggleBox checked={coursesFilterSetting?.isOnlyBought || false} onChange={coursesFilterSetting?.changeOnlyBought} needUser name="only-bought" title="دوره های خریداری شده"/>
    </aside>
  )
}

export default Sidebar