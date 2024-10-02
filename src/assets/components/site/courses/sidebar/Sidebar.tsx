import FormInput from "./FormInput"
import ToggleBox from "./ToggleBox"

type Props = {}

const Sidebar = ({

}: Props) => {
  return (
    <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
      <FormInput />
      <ToggleBox name="only-free" title="فقط دوره های رایگان"/>
      <ToggleBox needUser name="only-bought" title="دوره های خریداری شده"/>
    </aside>
  )
}

export default Sidebar