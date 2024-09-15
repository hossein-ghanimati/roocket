import FormInput from "./FormInput"
import ToggleBox from "./ToggleBox"

type Props = {}

const Sidebar = ({

}: Props) => {
  return (
    <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
      <FormInput />
      <ToggleBox title="فقط دوره های رایگان"/>
      <ToggleBox title="دوره های خریداری شده"/>
    </aside>
  )
}

export default Sidebar